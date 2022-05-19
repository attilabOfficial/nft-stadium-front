import React from 'react'
import styled from 'styled-components'

const NoWalletDetectedStyle = styled.div`
    padding: 150px 0 2rem;
    background-color: black;
    font-family: 'Open Sans', sans-serif;
    color: white;
    text-align: center;

    a:link,
    a:visited,
    a:active {
        text-decoration: none;
    }

    a:hover {
        color: red;
    }
`

export function NoWalletDetected() {
    return (
        <NoWalletDetectedStyle className="container">
            <div className="row justify-content-md-center">
                <div className="col-6 p-4 text-center">
                    <p>
                        No Ethereum wallet was detected. <br />
                        Please install{' '}
                        <a
                            href="http://metamask.io"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            MetaMask
                        </a>
                        .
                    </p>
                </div>
            </div>
        </NoWalletDetectedStyle>
    )
}
