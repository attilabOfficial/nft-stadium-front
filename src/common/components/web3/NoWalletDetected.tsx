import React from 'react'
import styled from 'styled-components'
import error from '../../images/error.svg'
import arrow from '../../images/arrow_g.svg'

const NoWalletDetectedStyle = styled.div`
    padding: 122px 0;
    background-color: #F3F4F6;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-size: 16px;
        margin-bottom: 48px;
    }
`

const Link = styled.a`
    margin: 48px;
    display: flex;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        margin-right: 8px;
    }

    p {
        margin: 0;
    }

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
                    <img src={arrow} alt="" />
                    <p>Install MetaMask</p>
                </Link>
            </Error>
        </NoWalletDetectedStyle>
    )
}
