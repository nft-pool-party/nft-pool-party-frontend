import { responsiveFontSizes } from '@mui/material';
import axios from 'axios';

export default function getNFTs(address, setNFTs){

// replace with your Alchemy api key
const apiKey = "demo";
const baseURL = `https://eth-mainnet.alchemyapi.io/nft/v2/VvFictdZv49HDRVG2STvkRu-h3jdcmgK/getNFTs/`;
// replace with the wallet address you want to query for NFTs
const ownerAddr = address;

var config = {
  method: 'get',
  url: `${baseURL}?owner=${ownerAddr}`
};

axios(config)
.then((response) => {
    setNFTs(JSON.stringify(response.data.ownedNfts));
})
.catch(error => console.log(error));
}