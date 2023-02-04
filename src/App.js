import React, { useState, useEffect } from "react";
import {} from "zksync-web3";
import { ethers } from "ethers";
import { Contract, Web3Provider, Provider, utils } from "zksync-web3";
import "./style/App.css";

// Components
import CalculatorInterface from "./components/CalculatorInterface";
import Navbar from "./components/Navbar";

// ABI
import CALCULATOR_CONTRACT_ABI from "./abis/SimpleCalculator.json";

//Contract address
const CALCULATOR_CONTRACT_ADDRESS =
  "0xA3147b3860c6eC1fDc9434045Dd030cCE947c3c3";

function App() {
  const [provider, setProvider] = useState();
  const [signer, setSigner] = useState();
  const [calculator, setCalculator] = useState();
  const [account, setAccount] = useState();

  const loadBlockchainData = async () => {
    //Connect to blockchain
    const provider = new Provider("https://zksync2-testnet.zksync.dev");
    const signer = new Web3Provider(window.ethereum).getSigner();
    setProvider(provider);
    setSigner(signer);

    // Create JavaScript version of smart contract
    const calculator = new ethers.Contract(
      CALCULATOR_CONTRACT_ADDRESS,
      CALCULATOR_CONTRACT_ABI,
      provider
    );
    setCalculator(calculator);
    console.log(calculator);
  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <div>
      <Navbar account={account} setAccount={setAccount} />
      <CalculatorInterface
        provider={provider}
        signer={signer}
        account={account}
        calculator={calculator}
      />
    </div>
  );
}

export default App;
