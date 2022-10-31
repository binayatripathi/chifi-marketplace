import { openContractCall } from "@stacks/connect"
import { StacksMocknet,StacksMainnet } from "@stacks/network";
import { userSession } from "./connectWallet";
// import { uploadMetaData } from "../arweaveFoundation/uploadmetadata";
import { uintCV, FungibleConditionCode, makeStandardSTXPostCondition, standardPrincipalCV, trueCV, falseCV, makeContractCall, AnchorMode, broadcastTransaction } from "@stacks/transactions";
export async function MintFive() {
  const contractAddress = 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM';
  const contract_caller = userSession.loadUserData().profile.stxAddress.testnet;
  console.log(contract_caller)
  const contractName = 'chifi-bots-packs-nft';
  const network = new StacksMocknet;

  const functionArgs :[]=[]
  const postConditionAddress = userSession.loadUserData().profile.stxAddress.testnet;
  const postConditionCode = FungibleConditionCode.LessEqual;
  const postConditionAmount = 15000000;
  const postConditions = [
    makeStandardSTXPostCondition(
      postConditionAddress,
      postConditionCode,
      postConditionAmount
    ),
  ];


  const options = {
    contractAddress,
    functionName: "claim-five",
    contractName,
    functionArgs,
    network,
    postConditions,
    appDetails: {
      name: "ChiFiBots NFT Marketplace on Stacks",
      icon: window.location.origin + "/vercel.svg",
    },
    onFinish: (data: any) => {
      console.log("Stacks Transaction:", data.stacksTransaction);
      console.log("Transaction ID:", data.txId);
      console.log("Raw transaction:", data.txRaw);
    }

  };
  await openContractCall(options);
}

export async function MintSeven() {
    const contractAddress = 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM';
  // const contractAddress = userSession.loadUserData().profile.stxAddress.testnet;
  console.log(contractAddress)
  const contractName = 'chifi-bots-packs-nft';
  const network = new StacksMocknet;

  const functionArgs :[]=[]
  const postConditionAddress = userSession.loadUserData().profile.stxAddress.testnet;
  const postConditionCode = FungibleConditionCode.LessEqual;
  const postConditionAmount = 50000000;
  const postConditions = [
    makeStandardSTXPostCondition(
      postConditionAddress,
      postConditionCode,
      postConditionAmount
    ),
  ];


  const options = {
    contractAddress,
    functionName: "claim-seven",
    contractName,
    functionArgs,
    network,
    postConditions,
    appDetails: {
      name: "ChiFiBots NFT Marketplace on Stacks",
      icon: window.location.origin + "/vercel.svg",
    },
    onFinish: (data: any) => {
      console.log("Stacks Transaction:", data.stacksTransaction);
      console.log("Transaction ID:", data.txId);
      console.log("Raw transaction:", data.txRaw);
    }

  };
  await openContractCall(options);
  // if(openContractCall().then())
  // await uploadMetaData("",data1,"")
}
export async function MintTwentyOne() {
    const contractAddress = 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM';
  // const contractAddress = userSession.loadUserData().profile.stxAddress.testnet;
  console.log(contractAddress)
  const contractName = 'chifi-bots-packs-nft';
  const network = new StacksMocknet;

  const functionArgs :[]=[]
  const postConditionAddress = userSession.loadUserData().profile.stxAddress.testnet;
  const postConditionCode = FungibleConditionCode.LessEqual;
  const postConditionAmount = 63000000;
  const postConditions = [
    makeStandardSTXPostCondition(
      postConditionAddress,
      postConditionCode,
      postConditionAmount
    ),
  ];


  const options = {
    contractAddress,
    functionName: "claim-twenty-one",
    contractName,
    functionArgs,
    network,
    postConditions,
    appDetails: {
      name: "ChiFiBots NFT Marketplace on Stacks",
      icon: window.location.origin + "/vercel.svg",
    },
    onFinish: (data: any) => {
      console.log("Stacks Transaction:", data.stacksTransaction);
      console.log("Transaction ID:", data.txId);
      console.log("Raw transaction:", data.txRaw);
    }

  };
  await openContractCall(options);
}

export async function MintFiveDemo() {
  const contractAddress = 'SPH4FEPVGPZ82GHCT7K0ZTCQRXXYPYM21JFRRZVP';
  const contract_caller = userSession.loadUserData().profile.stxAddress.mainnet;
  console.log(contract_caller)
  const contractName = 'shadowy-super-coder';
  const network = new StacksMainnet;

  const functionArgs :[]=[]
  const postConditionAddress = userSession.loadUserData().profile.stxAddress.mainnet;
  const postConditionCode = FungibleConditionCode.LessEqual;
  const postConditionAmount = 4206900*5;
  const postConditions = [
    makeStandardSTXPostCondition(
      postConditionAddress,
      postConditionCode,
      postConditionAmount
    ),
  ];


  const options = {
    contractAddress,
    functionName: "claim-five",
    contractName,
    functionArgs,
    network,
    postConditions,
    appDetails: {
      name: "ChiFiBots NFT Marketplace on Stacks",
      icon: window.location.origin + "/vercel.svg",
    },
    onFinish: (data: any) => {
      console.log("Stacks Transaction:", data.stacksTransaction);
      console.log("Transaction ID:", data.txId);
      console.log("Raw transaction:", data.txRaw);
    }

  };
  await openContractCall(options);
}

