import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
    closeHeaderPanel,
    isHeaderPanelOpenSelector,
    openHeaderPanel,
} from '../../../common/store/appStateSlice'
import { openAbout } from '../../../feature/cms/store/cmsSlice'
import { RootState } from '../../../store'
import aboutIcon from '../../images/about.svg'
import aboutIconW from '../../images/aboutW.svg'
import walletIcon from '../../images/wallet.svg'
import walletIconW from '../../images/walletWhite.svg'
import HeaderPanel from './HeaderPanel'
import { curThemeSelector } from '../../store/appStateSlice'
import { ITheme } from '../../../themes'

const HeaderContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.primaryColor};
    box-shadow: 0px 12px 48px -4px rgba(0, 0, 0, 0.06);
    border-radius: 0px 0px 24px 24px;
    position: fixed;
    top: 0;
    left: 50;
    margin: 0 2.5vw;
    z-index: 8888;
    width: 95vw;
`

const HeaderSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Wallet = styled.div`
    font-family: 'Clash Display', sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.1em;
    margin-left: 48px;
    color: ${({ theme }) =>
        theme.id === 'T_001'
            ? theme.colors.darkFontColor
            : theme.colors.whiteFontColor};
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
        color: ${({ theme }) =>
            theme.id === 'T_001'
                ? theme.colors.darkFontColor
                : theme.colors.whiteFontColor};
        font-size: 24px;
        margin: 20px 0 8px 0;
    }

    h2 {
        font-family: 'Clash Display', sans-serif;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.lightFontColor};
        font-size: 16px;
        margin: 8px 0 20px 0;
    }
`

const About = styled(Link)`
    font-family: 'Clash Display', sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.1em;
    margin-right: 48px;
    color: ${({ theme }) =>
        theme.id === 'T_001'
            ? theme.colors.darkFontColor
            : theme.colors.whiteFontColor};
    display: flex;
    text-decoration: none;

    img {
        margin-right: 8px;
    }

    :hover {
        cursor: default;
    }
`

const aboutImg = (theme: ITheme['id']) => {
    if ((theme as unknown as string) !== 'T_001') {
        return aboutIconW
    } else {
        return aboutIcon
    }
}

const walletImg = (theme: ITheme['id']) => {
    if ((theme as unknown as string) !== 'T_001') {
        return walletIconW
    } else {
        return walletIcon
    }
}

const Header = () => {
    const dispatch = useDispatch()
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

    const clickOnAbout = () => {
        dispatch(openAbout())
    }

    const currentTheme = useSelector((state: RootState) =>
        curThemeSelector(state)
    )

    let curThemeId: ITheme['id'] = currentTheme.id

    return (
        <HeaderContainer>
            <HeaderSection>
                <Wallet onClick={clickOnWallet}>
                    <img src={walletImg(curThemeId)} alt="" />
                    <p>My Wallet</p>
                </Wallet>
                <Title>
                    <h1>NFT Stadium</h1>
                    <h2>Roazhon Park - Rennes (FR)</h2>
                </Title>
                <About to="/about" onClick={clickOnAbout}>
                    <img src={aboutImg(curThemeId)} alt="" />
                    <p>About</p>
                </About>
            </HeaderSection>
            <HeaderPanel />
        </HeaderContainer>
    )
}

export default Header
