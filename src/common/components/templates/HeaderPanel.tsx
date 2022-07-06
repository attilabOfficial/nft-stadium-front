import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import closeIcon from '../../images/close.svg'
import closeIconWhite from '../../images/close_w.svg'
import {
    closeHeaderPanel,
    isHeaderPanelOpenSelector
} from '../../store/appStateSlice'
import { RootState } from '../../../store'
import { useContext } from 'react';
import { Web3Context } from '../web3/DappContainer';
import { NFTByOwnerContainer } from '../../../feature/NFTByOwner/components/NFTByOwnerContainer'
import { curThemeSelector } from '../../store/appStateSlice';
import { ITheme } from '../../../themes'

const Panel = styled.div`
    height: 700px;
`

const OwnerSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .subtitle {
        font-family: 'Clash Display', sans-serif;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0.1em;
        margin: 48px 0 6px 0;
        color: ${({ theme }) => (theme.id === 'T_001' ? theme.colors.darkFontColor : theme.colors.lightFontColor)};
    }

    .owner {
        font-size: 36px;
        font-weight: 600;
        margin: 0 0 48px 0;
        color: ${({ theme }) => (theme.id === 'T_001' ? theme.colors.darkFontColor : theme.colors.whiteFontColor)};

    }
`

const ClosePanel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 48px;

    p {
        font-family: 'Clash Display', sans-serif;
        font-weight: 600;
        font-size: 16px;
        letter-spacing: 0.1em;
        margin: 16px 8px;
        color: ${({ theme }) => (theme.id === 'T_001' ? theme.colors.darkFontColor : theme.colors.whiteFontColor)};
    }

    :hover {
        cursor: default;
    }
`

const closeImg = (theme: ITheme['id']) => {        
    if ((theme as unknown as string) !== 'T_001') {
        return closeIconWhite;
    } else {
        return closeIcon;
    }
}

const HeaderPanel = () => {
    const web3Context = useContext(Web3Context)
    const currentOwner = web3Context.selectedAddress
    const dispatch = useDispatch()
    const HeaderPanelIsOpen = useSelector((state: RootState) =>
        isHeaderPanelOpenSelector(state)
    )

    const currentTheme = useSelector((state: RootState) =>
        curThemeSelector(state)
    )

    let curThemeId: ITheme['id'] = currentTheme.id;

    const clickOnClose = () => {
        dispatch(closeHeaderPanel())
    }

    return (
        <>
            {HeaderPanelIsOpen && (
                <Panel>
                    <OwnerSection>
                        <p className='subtitle'>THIS NFTS ARE YOURS</p>
                        <p className='owner'>{currentOwner}</p>
                    </OwnerSection>
                    <NFTByOwnerContainer />
                    <ClosePanel onClick={clickOnClose}>
                        <p>CLOSE</p>
                        <img src={closeImg(curThemeId)} alt="" />
                    </ClosePanel>
                </Panel>
            )}
        </>
    )
}

export default HeaderPanel
