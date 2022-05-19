import React from "react";

import { NetworkErrorMessage } from "./NetworkErrorMessage";
import  styled from 'styled-components';

const ConnectWalletStyle = styled.div`
  padding: 150px 0;
  background-color: black;
  font-family: "Open Sans",sans-serif;
  color: white;
  text-align: center;

  button {
    background-color: #ca180b;
    color: white;
    border: none;
    border-radius: 5px;
    margin: 1rem;
    padding: 0.5rem;
    width: 7rem;
    height: 4rem;
  }
`;

export const ConnectWallet = ({ connectWallet, networkError, dismiss }: { connectWallet: () =>void , networkError: string, dismiss : () =>void }) =>{
  return (
    <ConnectWalletStyle>
      <div className="row justify-content-md-center">
        <div className="col-12 text-center">
          {networkError && (
            <NetworkErrorMessage 
              message={networkError} 
              dismiss={dismiss} 
            />
          )}
        </div>
        <div className="col-6 p-4 text-center">
          <p>Please connect to your wallet.</p>
          <button
            className="btn btn-warning"
            type="button"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </ConnectWalletStyle>
  );
}
