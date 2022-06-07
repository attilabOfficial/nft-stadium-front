import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
    closeHeaderPanel,
    isHeaderPanelOpenSelector,
    openHeaderPanel,
} from '../../../common/store/appStateSlice'
import { RootState } from '../../../store'
import aboutIcon from '../../images/about.svg'
import walletIcon from '../../images/wallet.svg'
import HeaderPanel from './HeaderPanel';

const HeaderContainer = styled.div`
    background-color: #FFFFFF;
    font-family: 'Open Sans', sans-serif;
    box-shadow: 0px 12px 48px -4px rgba(0, 0, 0, 0.06);
    border-radius: 0px 0px 24px 24px;
    position: fixed;
    top: 0;
    left: 50;
    margin: 0 2.5vw;
    z-index: 9999;
    width: 95vw;
`

const HeaderSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Wallet = styled.div`
    text-transform: uppercase;
    font-size: 16px;
    margin-left: 48px;
    color: #212936;
    display: flex;

    img {
        margin-right: 8px;
    }

    :hover {
        cursor: default;
    }
`

const Title = styled.div`
    text-align: center;

    h1 {
        color: #212936;
        font-size: 24px;
        margin: 20px 0 8px 0;
    }

    h2 {
        text-transform: uppercase;
        color: #6C727F;
        font-size: 16px;
        margin: 8px 0 20px 0;
    }
`

const About = styled(Link)`
    text-transform: uppercase;
    font-size: 16px;
    margin-right: 48px;
    color: #212936;
    display: flex;
    text-decoration: none;

    img {
        margin-right: 8px;
    }

    :hover {
        cursor: default;
    }
`

const Header = () => {
    const dispatch = useDispatch()
    // *********
    // *********
    const { headerPanelOpen } = useSelector((state: RootState) => ({
        headerPanelOpen: isHeaderPanelOpenSelector(state),
    }))

    const clickOnWallet = () => {
        if (headerPanelOpen === false) {
            dispatch(openHeaderPanel())
        } else {
            dispatch(closeHeaderPanel())
        }    
    }

    return (
        <HeaderContainer>
            <HeaderSection>
                <Wallet onClick={clickOnWallet}>
                    <img src={walletIcon} alt="" />
                    <p>My Wallet</p>
                </Wallet>
                <Title>
                    <h1>NFT Stadium</h1>
                    <h2>Roazhon Park - Rennes (FR)</h2>
                </Title>
                <About to='/about'>
                    <img src={aboutIcon} alt="" />
                    <p>About</p>
                </About>
            </HeaderSection>
            <HeaderPanel />
        </HeaderContainer>
    )
}

export default Header
