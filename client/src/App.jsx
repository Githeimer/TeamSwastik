import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example from "./components/ui/Navbar";
import Page404 from "./components/pages/Page404";
import Signin from "./components/ui/signin";
import Signup from "./components/ui/signup";
import Landing from "./components/pages/Landing";
import OrgLanding from "./components/pages/OrgLanding";
import Projects from "./components/ui/Card";
import Onecard from "./components/pages/cards/Onecard";
import Twocard from "./components/pages/cards/Twocard";
import Threecard from "./components/pages/cards/Threecard";
import Web3 from 'web3';
import EscrowABI from '../artifacts/contracts/Crowdfunding.sol/Crowdfunding.json';// Import the contract ABI

export default function App() {

    const [web3, setWeb3] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [escrowContract, setEscrowContract] = useState(null);

    useEffect(() => {
        if (window.ethereum) {
            const web3Instance = new Web3(window.ethereum);
            setWeb3(web3Instance);
            window.ethereum.enable().then(accounts => {
                setAccounts(accounts);
                const escrow = new web3Instance.eth.Contract(
                    EscrowABI, 
                    '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199'
                );
                setEscrowContract(escrow);
            });
        } else {
            console.log('Ethereum not found. Install MetaMask!');
        }
    }, []);

    const deposit = async (amount) => {
        await escrowContract.methods.deposit(accounts[0]).send({ from: accounts[0], value: web3.utils.toWei(amount, 'ether') });
    };

    const releaseFunds = async (payee) => {
        await escrowContract.methods.release(payee).send({ from: accounts[0] });
    };

    const getBalance = async () => {
        const balance = await escrowContract.methods.getBalance().call();
        console.log(balance);
    };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin></Signin>}></Route>
          <Route path="/signin" element={<Signin></Signin>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/landing/user" element={<Landing></Landing>}></Route>\
          <Route
            path="/landing/org"
            element={<OrgLanding></OrgLanding>}
          ></Route>
          <Route path="/landing/cards" element={<Projects></Projects>}></Route>
          <Route
            path="/landing/cards/one"
            element={<Onecard></Onecard>}
          ></Route>
          <Route
            path="/landing/cards/two"
            element={<Twocard></Twocard>}
          ></Route>
          <Route
            path="/landing/cards/three"
            element={<Threecard></Threecard>}
          ></Route>
          <Route path="*" element={<Page404></Page404>}></Route>
        </Routes>
      </BrowserRouter>

            <div>
                <h1>Escrow Dashboard</h1>
                <button onClick={() => deposit('1')}>Deposit 1 Ether</button>
                <button onClick={() => releaseFunds('PAYEE_ADDRESS_HERE')}>Release Funds</button>
                <button onClick={getBalance}>Get Balance</button>
            </div>
    </>
  );
}
