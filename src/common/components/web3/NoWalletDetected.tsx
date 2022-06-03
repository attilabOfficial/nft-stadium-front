import React from 'react'
import styled from 'styled-components'
import error from '../../images/error.svg'

const NoWalletDetectedStyle = styled.div`
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

const Error = styled.div`
    background-color: #FFFFFF;
    width: 454px;
    height: auto;
    border: 1px solid #E5E7EB;
    border-radius: 12px;
    padding: 48px;

    p {
        font-size: 16px;
        margin-bottom: 48px;
    }
`

const Link = styled.a`
    color: white;
    padding: 9px 16px;
    margin: 48px;

    :link,
    :visited,
    :active {
        text-decoration: none;
        color: #212936;
    }
`

export function NoWalletDetected() {
    return (
        <NoWalletDetectedStyle className="container">
            <div>
                <Welcome>
                    <p>Welcome to</p>
                    <h1>NFT Stadium</h1>
                    <h2>Roazhon Park - Rennes (FR)</h2>
                </Welcome>
                <Error>
                    <img src={error} alt="" />
                    <p>
                        No Ethereum wallet was detected. <br />
                        <b>Please install MetaMask</b>.
                    </p>
                    <Link
                        href="http://metamask.io"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Install MetaMask
                    </Link>
                </Error>
            </div>
        </NoWalletDetectedStyle>
    )
}
