import React from 'react'
import styled from 'styled-components'
import logo from '../../images/Logo_Stade_Rennais.png'

const Loader = styled.div`
    background-color: #ca180b;
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 5555;

    img {
        display: block;
        width: 30%;
        position: absolute;
        top: 50%;
        margin-top: -15%;
        left: 50%;
        margin-left: -15%;
        animation: spin 5s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotateY(0deg);
        }
        100% {
            transform: rotateY(360deg);
        }
    }
`

export const Loading = () => {
    return (
        <Loader>
            <img src={logo} alt="logo" />
        </Loader>
    )
}
