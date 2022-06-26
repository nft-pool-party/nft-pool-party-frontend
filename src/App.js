
import "./App.css";
import React, { useState, useEffect } from "react";

import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Stack,
  Box,
  Toolbar,
  Typography,
  Container,
  TextField,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ethers } from "ethers";
import LoanAppraisalInfo from "./LoanAppraisalInfo";
import ConnectWallet from "./connectWallet";
import getNFTs from "./getNFTs";
require('dotenv').config();


// //  Create WalletConnect Provider
// const provider = new WalletConnectProvider({
//   infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
// });

// //  Enable session (triggers QR Code modal)
// await provider.enable();

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#00e3ab",
    },
  },
});

const cards = [1, 2, 3];

function App() {
  const [address, setAddress] = useState("");
  const [provider, setProvider] = useState(null);
  const [nfts, setNfts] = useState("");
  const [contractAddresses, setContractAddresses] = useState([]);

  useEffect(() =>{
    if(address){
      getNFTs(address, setNfts);
      console.log(nfts);
    }
  },[address])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" color="inherit" noWrap>
            Pool Party NFT
          </Typography>
          <ConnectWallet setAddress={setAddress} setProvider={setProvider} />
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 5,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            {/* <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          marginLeft: "27%"
        }}
        alt="Cool pool"
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      /> */}
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Pool Party NFT
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Appraise your NFTs for a loan
            </Typography>


            <LoanAppraisalInfo contractAddresses={contractAddresses}/>

            {/*

              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
             */}
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {nfts && JSON.parse(nfts).map((nft) => (
              <Grid item key={nft} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image={nft.metadata.image}
                    alt={nft.metadata.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {nft.metadata.name}
                    </Typography>
                    <Typography>
                      {nft.metadata.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{display: "flex", justifyContent: "center"}}>
                    <Button variant="contained" onClick={() => {
                      setContractAddresses([...contractAddresses, nft.contract.address]);
                    }}>Add</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      {/* <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box> */}
    </ThemeProvider>
  );
}

export default App;
