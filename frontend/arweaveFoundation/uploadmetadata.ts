import Arweave from 'arweave';
import fs from "fs"
import path from 'path';
import axios from 'axios';
import TestWeave from 'testweave-sdk';


const arweave = Arweave.init({});
const Metadata=(imageUrl:string,token_id:string,token_url:string)=>({
    name: "My Image",
    symbol: "",
    description: "This is the picture capture on Methlang",
    seller_fee_basis_points: 500,
    external_url: "https://www.thugbirdz.com/",
    attributes:{
        token_id:token_id,
        token_url:token_url
    },
    collection: {
      name: "Test Collection",
      pack: "7 card pack",
    },
    properties: {
      files: [
        {
          uri: imageUrl,
          type: "image/png",
        },
      ],
      category: "image",
      maxSupply: 0,
      creators: [
        {
          address: "CBBUMHRmbVUck99mTCip5sHP16kzGj3QTYB8K3XxwmQx",
          share: 100,
        },
      ],
    },
    image: imageUrl,
})

export const uploadMetaData= async(imageUrl:string,token_id:string,token_url:string)=>{
    // const testWeave = await TestWeave.init(arweave);
    // const key_path= path.join(process.cwd(),"public","images", "key.json")
    const key_path= await axios.get("http://localhost:3000/images/key.json").then((response)=>response.data)
    const {key} =JSON.parse(JSON.stringify(key_path))
    const metaData= Metadata(imageUrl,token_id,token_url)
    const data=JSON.stringify(metaData)
    const tx= await arweave.createTransaction({ data, }, key);
    tx.addTag("Content-Type", "application/json");
    await arweave.transactions.sign(tx,key)
    await arweave.transactions.post(tx);
    // await testWeave.mine();
    const statusAfterMine = await arweave.transactions.getStatus(tx.id)
    console.log(statusAfterMine); // this will return 200
    const dataUrl= `http://localhost/${tx.id}`
    console.log(dataUrl)
    // console.log(data)
    console.log(tx.id)
}
