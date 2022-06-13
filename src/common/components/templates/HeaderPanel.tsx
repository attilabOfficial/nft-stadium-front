import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import closeIcon from '../../images/close.svg'
import {
    closeHeaderPanel,
    isHeaderPanelOpenSelector
} from '../../store/appStateSlice'
import { RootState } from '../../../store'
import { useContext } from 'react';
import { Web3Context } from '../web3/DappContainer';
import { NFTByOwnerContainer } from '../../../feature/NFTByOwner/components/NFTByOwnerContainer'

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
    }

    .owner {
        font-size: 36px;
        font-weight: 600;
        margin: 0 0 48px 0;
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

const HeaderPanel = () => {
    const web3Context = useContext(Web3Context)
    const currentOwner = web3Context.selectedAddress
    const dispatch = useDispatch()
    const HeaderPanelIsOpen = useSelector((state: RootState) =>
        isHeaderPanelOpenSelector(state)
    )

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
                        <img src={closeIcon} alt="" />
                    </ClosePanel>
                </Panel>
            )}
        </>
    )
}

export default HeaderPanel
