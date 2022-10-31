import { openContractCall } from "@stacks/connect"
import { StacksMocknet } from "@stacks/network";
import { userSession } from "./connectWallet";
import { FungibleConditionCode, makeStandardSTXPostCondition,standardPrincipalCV } from "@stacks/transactions";

export async function mintCard() {
 const contractAddress = 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM';
  const contractcallerAddress = userSession.loadUserData().profile.stxAddress.testnet;
  const contractCallerAddressCV=standardPrincipalCV(contractcallerAddress)
  console.log(contractcallerAddress)
  const contractName = '';
  const network = new StacksMocknet;

  const functionArgs=[contractCallerAddressCV]
  const postConditionAddress = userSession.loadUserData().profile.stxAddress.testnet;
  const postConditionCode = FungibleConditionCode.LessEqual;
  const postConditionAmount = 3000000;
  const postConditions = [
    makeStandardSTXPostCondition(
      postConditionAddress,
      postConditionCode,
      postConditionAmount
    ),
  ];


  const options = {
    contractAddress,
    functionName: "mint-card",
    contractName: 'chifi-bots-packs-nft',
    functionArgs,
    network,
    postConditions,
    appDetails: {
      name: "ChiFiBots NFT Marketplace",
      icon: "/images/individualNfts/cosmic foil/Alpha_Bot_cosmicfoil_dayone_card.png",
    },
    onFinish: (data: any) => {
      console.log("Stacks Transaction:", data.stacksTransaction);
      console.log("Transaction ID:", data.txId);
      console.log("Raw transaction:", data.txRaw);
    }

  };
  await openContractCall(options);
}