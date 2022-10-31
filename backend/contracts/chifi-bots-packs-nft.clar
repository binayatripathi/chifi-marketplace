;; (impl-trait .sip009-nft-trait.nft-trait)
;; (define-non-fungible-token chifi-bots-packs uint)
(use-trait commission-trait 'SP3D6PV2ACBPEKYJTCMH7HEN02KP87QSP8KTEH335.commission-trait.commission)

(define-non-fungible-token chifi-bots-cards uint)

;; Define constants 
(define-constant ERR-NO-MORE-NFTS u100)
(define-constant ERROR_PACK_OWNER_NOT_FOUND u300)
(define-constant ERROR_NOT_TOKEN_OWNER (err u400))
(define-constant ERR-NOT-AUTHORIZED u104)
(define-constant ERR-WRONG-COMMISSION u107)
(define-constant ERR-NOT-FOUND u108)


(define-constant ERR-LISTING u106)

;; Define Variables
(define-data-var base-uri (string-ascii 80) "https://arweave.net/{id}")


(define-data-var last-cards-id uint u0)
(define-data-var deployer principal tx-sender)
;; (define-data-var pack-mint-price uint u6000000)
(define-data-var mint-limit uint u7000)
(define-data-var pack-mint-price uint u50000000)

(define-map token-count principal uint)

(define-read-only (get-balance (account principal))
  (default-to u0
    (map-get? token-count account)))

;; SIP009: Transfer token to a specified principal
;; #[allow(unchecked_data)]
(define-public (transfer (id uint) (sender principal) (recipient principal))
  (begin
    (asserts! (is-eq tx-sender sender) (err ERR-NOT-AUTHORIZED))
    (asserts! (is-none (map-get? market id)) (err ERR-LISTING))
    (trnsfr id sender recipient)))
;; SIP009: Get the owner of the specified token ID
(define-read-only (get-owner (id uint))
  (ok (nft-get-owner? chifi-bots-cards id)))

;; SIP009: Get the last token ID
(define-read-only (get-last-token-id)
  (ok (var-get last-cards-id)))

;; SIP009: Get the token URI. You can set it to any other URI
(define-read-only (get-token-uri (id uint))
  (ok (some (var-get base-uri))))

(define-public (claim-seven)
  (mint (list true true true true true true true)))

(define-public (claim-twenty-one)
  (mint (list true true true true true true true true true true true true true true true true true true true true true)))
;; Default Minting
(define-private (mint (orders (list 25 bool)))
  (mint-many orders))

(define-private (mint-many (orders (list 25 bool )))
  (let
    (
      (last-nft-id  (var-get last-cards-id))
      (enabled (asserts! (<= last-nft-id (var-get mint-limit)) (err ERR-NO-MORE-NFTS)))
      (id-reached (fold mint-many-iter orders last-nft-id))
      ;; (price (* (var-get card-mint-price) (- id-reached last-nft-id)))
      (price (var-get pack-mint-price))
      (current-balance (get-balance tx-sender))
    )
      (begin
        (var-set last-cards-id id-reached)
        (map-set token-count tx-sender (+ current-balance (- id-reached last-nft-id)))
        (try! (stx-transfer? price tx-sender (var-get deployer)))
      )
    (ok id-reached)))
(define-private (mint-many-iter (ignore bool) (next-id uint))
  (if (<= next-id (var-get mint-limit))
    (begin
      (unwrap! (nft-mint? chifi-bots-cards next-id tx-sender) next-id)
      (+ next-id u1)
    )
    next-id))

;; Non-custodial marketplace extras

(define-map market uint {price: uint, commission: principal})

(define-private (trnsfr (id uint) (sender principal) (recipient principal))
  (match (nft-transfer? chifi-bots-cards id sender recipient)
    success
      (let
        ((sender-balance (get-balance sender))
        (recipient-balance (get-balance recipient)))
          (map-set token-count
            sender
            (- sender-balance u1))
          (map-set token-count
            recipient
            (+ recipient-balance u1))
          (ok success))
    error (err error)))

(define-private (is-sender-owner (id uint))
  (let ((owner (unwrap! (nft-get-owner? chifi-bots-cards id) false)))
    (or (is-eq tx-sender owner) (is-eq contract-caller owner))))

(define-read-only (get-listing-in-ustx (id uint))
  (map-get? market id))

(define-public (list-in-ustx (id uint) (price uint) (comm-trait <commission-trait>))
  (let ((listing  {price: price, commission: (contract-of comm-trait)}))
    (asserts! (is-sender-owner id) (err ERR-NOT-AUTHORIZED))
    (map-set market id listing)
    (print (merge listing {a: "list-in-ustx", id: id}))
    (ok true)))

(define-public (unlist-in-ustx (id uint))
  (begin
    (asserts! (is-sender-owner id) (err ERR-NOT-AUTHORIZED))
    (map-delete market id)
    (print {a: "unlist-in-ustx", id: id})
    (ok true)))

(define-public (buy-in-ustx (id uint) (comm-trait <commission-trait>))
  (let ((owner (unwrap! (nft-get-owner? chifi-bots-cards id) (err ERR-NOT-FOUND)))
      (listing (unwrap! (map-get? market id) (err ERR-LISTING)))
      (price (get price listing)))
    (asserts! (is-eq (contract-of comm-trait) (get commission listing)) (err ERR-WRONG-COMMISSION))
    (try! (stx-transfer? price tx-sender owner))
    (try! (contract-call? comm-trait pay id price))
    (try! (trnsfr id owner tx-sender))
    (map-delete market id)
    (print {a: "buy-in-ustx", id: id})
    (ok true)))

;; [[project.requirements]]
;; contract_id = "SP3D6PV2ACBPEKYJTCMH7HEN02KP87QSP8KTEH335.commission-trait"

;; [[project.requirements]]
;; contract_id = "SPNWZ5V2TPWGQGVDR6T7B6RQ4XMGZ4PXTEE0VQ0S.gamma-commission-v1"

