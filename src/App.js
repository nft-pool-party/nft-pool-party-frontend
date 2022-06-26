import "./App.css";
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
import Web3Modal from "web3modal";
import LoanAppraisalInfo from "./LoanAppraisalInfo";
import React, { useState } from 'react';


// import WalletConnectProvider from "@walletconnect/web3-provider";
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            NFT Pool Party
          </Typography>
          <Button color="secondary" variant="contained" sx={{marginLeft: "auto"}}> Connect Wallet</Button>

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
          <Container maxWidth="sm" >
          {/* <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          margin: "auto",
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
              NFT Pool Party
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Appraise your NFT for a loan
            </Typography>
            
            <LoanAppraisalInfo></LoanAppraisalInfo>

            

            {/*

              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
             */}
          </Container>
        </Box>
        {/* <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
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
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container> */}
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
