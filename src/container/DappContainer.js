import {NoWalletDetected} from "../components/NoWalletDetected"
import { ConnectWallet } from '../components/ConnectWallet';
import { ethers } from 'ethers';
import TokenArtifact from "../contracts/Token.json";
import contractAddress from "../contracts/contract-address.json";
import { createContext, useState } from "react";
import { MOCK } from '../index';


const HARDHAT_NETWORK_ID = '80001';

export const Web3Context = createContext({});


export const DappContainer = ({children}) =>{
    const [selectedAddress, setSelectedAddress] = useState("");
    const [contract, setContract] = useState(null);


    if(MOCK){
      return <>
        {children}
      </>
    }

    const _connectWallet = async()=> {
      const [_selectedAddress] = await window.ethereum.request({ method: 'eth_requestAccounts' });
      if (!_checkNetwork()) {
        return;
      }
      _initialize(_selectedAddress);
      window.ethereum.on("accountsChanged", ([newAddress]) => { 
        _initialize(newAddress);
      });
    }
    const _initialize=(_userAddress)=> {
      setSelectedAddress(_userAddress);
      _initializeEthers();

    }
    const _initializeEthers=() =>{
      const provider= new ethers.providers.Web3Provider(window.ethereum);
      setContract(new ethers.Contract(
        contractAddress.Token,
        TokenArtifact.abi,
        provider.getSigner(0)
      ));
    }
    // This method checks if Metamask selected network is Localhost:8545 
    const _checkNetwork=() =>{
      if (window.ethereum.networkVersion === HARDHAT_NETWORK_ID) {
        return true;
      }
      return false;
    }

    if (window.ethereum === undefined) {
        return <NoWalletDetected />;
    }

    if (!selectedAddress) {
        return (
          <ConnectWallet 
            connectWallet={_connectWallet} 
            networkError={""}
            dismiss={() =>{}}
          />
        );
      }
      

    return <Web3Context.Provider value={{selectedAddress, contract}}>
        {children}
      </Web3Context.Provider>

}