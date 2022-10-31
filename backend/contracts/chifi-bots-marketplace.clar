(use-trait tradeable-nfts-trait .sip009-nft-trait.nft-trait)

(define-constant err-payment-failed u1)
(define-constant err-transfer-failed u2)
(define-constant err-not-allowed u3)
(define-constant err-duplicate-entry u4)
(define-constant err-tradable-not-found u5)
(define-constant err-listings-frozen u6)
(define-constant contract-owner tx-sender)


(define-data-var listings-frozen bool false) ;; turn off the ability to list additional NFTs
(define-data-var purchases-frozen bool false) ;; turn off the ability to purchase NFTs
(define-data-var unlistings-frozen bool false) ;; turn off the ability to unlist NFTs



(define-map add-sale { tradables: principal,tradable-id: uint } { price: uint, owner: principal })

(define-read-only (get-listing (tradables <tradeable-nfts-trait>) (tradable-id uint))
  (match (map-get? add-sale {tradables: (contract-of tradables), tradable-id: tradable-id})
    nft-data 
    (ok nft-data)
    (err err-tradable-not-found)
  )
)
(define-private (transfer-tradable-to-escrow (tradables <tradeable-nfts-trait>) (tradable-id uint))
    (begin
    (contract-call? tradables transfer tradable-id tx-sender (as-contract tx-sender))
  )
)
(define-private (transfer-tradable-from-escrow (tradables <tradeable-nfts-trait>) (tradable-id uint))
    (let ((owner tx-sender))
      (begin
        (as-contract (contract-call? tradables transfer tradable-id (as-contract tx-sender) owner))
      )
    )
)
(define-private (get-owner (tradables <tradeable-nfts-trait>) (tradable-id uint))
  (contract-call? tradables get-owner tradable-id)
)

;; #[allow(unchecked_data)]
(define-public (list-asset (tradables <tradeable-nfts-trait>) (tradable-id uint) (price uint)) 
(begin 
(asserts! (is-eq false (var-get listings-frozen)) (err err-listings-frozen)) 
  (let ((tradable-owner (unwrap! (unwrap-panic (get-owner tradables tradable-id)) (err err-tradable-not-found))))
    (if (is-eq tradable-owner tx-sender)
      (if (map-insert add-sale {tradables: (contract-of tradables),tradable-id: tradable-id} {price: price, owner: tradable-owner}) 
        (begin 
          (match (transfer-tradable-to-escrow tradables tradable-id) 
            success (begin (ok true))
          error (begin (print error) (err err-transfer-failed)))
        )
        (err err-duplicate-entry)
      )
      (err err-not-allowed)
    )
  )
))
;; #[allow(unchecked_data)]
(define-public (unlist-asset (tradables <tradeable-nfts-trait>) (tradable-id uint)) 
  (begin 
    (asserts! (is-eq false (var-get unlistings-frozen)) (err err-listings-frozen))
    (match (map-get? add-sale {tradables: (contract-of tradables),tradable-id: tradable-id})
      nft-data
      (if (is-eq (get owner nft-data) tx-sender) 
        (match (transfer-tradable-from-escrow tradables tradable-id) 
        success (begin (map-delete add-sale {tradables: (contract-of tradables), tradable-id: tradable-id}) 
          (ok true)
        ) error (begin (print error) (err err-transfer-failed)))
       (err err-not-allowed))
       (err err-tradable-not-found)
     )
   )
)

;; #[allow(unchecked_data)]
(define-public (purchase-asset (tradables <tradeable-nfts-trait>) (tradable-id uint))
  (begin  
    (asserts! (is-eq false (var-get purchases-frozen)) (err err-listings-frozen))
    (match (map-get? add-sale {tradables: (contract-of tradables), tradable-id: tradable-id}) 
      data 
      (let ((price (get price data))) 
        (match (stx-transfer? price tx-sender (get owner data)) 
          success ;; amount sent to owner 
          (match (transfer-tradable-from-escrow tradables tradable-id) 
            transfer-success 
            (begin
            (map-delete add-sale {tradables: (contract-of tradables), tradable-id: tradable-id})
            (ok true);; sending NFT to buyer succeeded
            ) error (err err-transfer-failed)
          ) 
          error (err err-payment-failed)
      )) 
        (err err-tradable-not-found)
    )
  )
)

;; #[allow(unchecked_data)]
(define-public (set-listings-frozen (frozen bool))
  (begin
    (asserts! (is-eq tx-sender contract-owner) (err err-not-allowed))
    (ok (var-set listings-frozen frozen))
  )
)
;; #[allow(unchecked_data)]
(define-public (set-unlistings-frozen (frozen bool))
  (begin
    (asserts! (is-eq tx-sender contract-owner) (err err-not-allowed))
    (ok (var-set unlistings-frozen frozen))
  )
)
;; #[allow(unchecked_data)]
(define-public (set-purchases-frozen (frozen bool))
  (begin
    (asserts! (is-eq tx-sender contract-owner) (err err-not-allowed))
    (ok (var-set purchases-frozen frozen))
  )
)

