import React from 'react'

import { NetworkErrorMessage } from './NetworkErrorMessage'
import styled from 'styled-components'
import connect from '../../images/connect.svg'

import arrow from '../../images/arrow_w.svg'

const ConnectWalletStyle = styled.div`
    padding: 122px 0;
    background-color: #F3F4F6;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Welcome = styled.div`
    p {
        text-transform: uppercase;
        color: #212936;
        font-size: 16px;
        margin-bottom: 48px;
    }

    h1 {
        color: #212936;
        font-size: 24px;
        margin: 8px;
    }

    h2 {
        text-transform: uppercase;
        color: #6C727F;
        font-size: 16px;
        margin: 8px 0 48px 0;
    }
`

const Connection = styled.div`
    background-color: #FFFFFF;
    width: 454px;
    height: auto;
    border: 1px solid #E5E7EB;
    border-radius: 12px;
    padding: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-size: 16px;
    }

    button {
        background-color: #212936;
        color: white;
        font-size: 14px;
        border: none;
        border-radius: 4px;
        padding: 9px 16px;
        margin: 48px;
        display: flex;
        justify-content: center;
        align-items: center;


        img {
            margin-right: 8px;
        }

        p {
            margin: 0;
        }
    }
`

export const ConnectWallet = ({
    connectWallet,
    networkError,
    dismiss,
}: {
    connectWallet: () => void
    networkError: string
    dismiss: () => void
}) => {
    return (
        <ConnectWalletStyle>
            <div>
                <div>
                    {networkError && (
                        <NetworkErrorMessage
                            message={networkError}
                            dismiss={dismiss}
                        />
                    )}
                </div>
                <Welcome>
                    <p>Welcome to</p>
                    <h1>NFT Stadium</h1>
                    <h2>Roazhon Park - Rennes (FR)</h2>
                </Welcome>
                <Connection>
                    <img src={connect} alt="" />
                    <p>Before accessing, please <b>connect your wallet</b></p>
                    <button
                        type="button"
                        onClick={connectWallet}
                    >
                        <img src={arrow} alt="" />
                        <p>Connect my wallet</p>
                    </button>
                </Connection>
                
            </div>
        </ConnectWalletStyle>
    )
}
