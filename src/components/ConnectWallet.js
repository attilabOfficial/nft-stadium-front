import React from "react";

import { NetworkErrorMessage } from "./NetworkErrorMessage";
import  styled from 'styled-components';

const ConnectWalletStyle = styled.div`
  margin-top:150px;
`;

export const ConnectWallet = ({ connectWallet, networkError, dismiss }) =>{
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
