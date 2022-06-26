import { responsiveFontSizes } from '@mui/material';
import axios from 'axios';

export default function getNFTs(address, setNFTs){

const baseURL = "https://eth-mainnet.alchemyapi.io/nft/v2/hA2ONXLuakmXgxSTdhzyGU3-hZC6339Z/getNFTs/";
const ownerAddr = address;
const contractAddrs = ["0x1485297e942ce64E0870EcE60179dFda34b4C625", "0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e", "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"];


var config = {
  method: 'get',
  url: `${baseURL}?owner=${ownerAddr}`
};

axios(config)
.then((response) => {
    console.log(response.data.ownedNfts);
    setNFTs(JSON.stringify(response.data.ownedNfts));
})
.catch(error => console.log(error));
}