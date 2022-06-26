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

export default function Lend() {

    const [ currBalance, setCurrBalance ] = useState(0.0);
    const [ currToken, setCurrToken ] = useState('UDSC');
  
  return (
    <div>
        <h1>Lend</h1>
        <h2>Current Balance in {currToken}: {currBalance} </h2>
    </div>
  );
}
