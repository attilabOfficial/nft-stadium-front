import React from 'react'
import styled from 'styled-components'
import ball from '../../images/ballon.svg'

const Loader = styled.div`
    background-color: #F3F4F6;
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
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
`

export const Loading = () => {
    return (
        <Loader>
            <img src={ball} alt="logo" />
        </Loader>
    )
}
