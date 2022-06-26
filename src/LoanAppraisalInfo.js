import React, { useState } from "react";
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
import axios from "axios";

export default function LoanAppraisalInfo({contractAddresses}) {
  const API_BASE = "https://nameless-plateau-97799.herokuapp.com/";

  const [inputValue, setInputValue] = useState("");
  const [totalLoanAmount, setTotalLoanAmount] = useState(0.0);
  const [ltvRatio, setLtvRatio] = useState(0.0);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

//   function handleOnAddNFT() {
//     // Add the current input to the contract addresses
//     setContractAddresses((prevContractAddresses) => [
//       ...prevContractAddresses,
//       inputValue,
//     ]);
//     // Delete input value
//     setInputValue("");
//   }

  async function getOneLoanInfo(address) {
    const api_endpoint = `${API_BASE}/getLTV?address=${address}`;
    // Return the
    return axios.get(api_endpoint).then((res) => {
      return res.data;
    });
  }

  async function handleGetLoanInfo() {
    console.log(contractAddresses);
    // Get the loan information for each contract
    const loansInfo = await Promise.all(
      contractAddresses.map((address) => getOneLoanInfo(address))
    );
    const totalLoanAmount = loansInfo
      .map((loanInfo) => loanInfo.rec_loan_amount)
      .reduce((a, b) => a + b);
    setTotalLoanAmount(totalLoanAmount);

    const totalCollateralValue = loansInfo
      .map((loanInfo) => loanInfo.current_price)
      .reduce((a, b) => a + b);
    const totalLtv = totalLoanAmount / totalCollateralValue;
    setLtvRatio(totalLtv);
  }

  return (
    <div>

      <h3>Added NFTs</h3>
      <ul>
        {contractAddresses.map((address) => (
          <li>{address}</li>
        ))}
      </ul>

      <Button variant="contained" onClick={handleGetLoanInfo}>
        {" "}
        Get Loan Info
      </Button>
      <h3>Maximum Loan Amount: {totalLoanAmount.toFixed(2)}</h3>
      <h3>Overall LTV Ratio: {(ltvRatio * 100).toFixed(1)}% </h3>
    </div>
  );
}
