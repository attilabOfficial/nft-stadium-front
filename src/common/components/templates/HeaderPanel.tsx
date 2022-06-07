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
    height: 65vh;
`

const OwnerSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ClosePanel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 48px;
    margin-bottom: 48px;

    p {
        margin-right: 10px;
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
                        <p>THIS NFTS ARE YOURS</p>
                        <p>{currentOwner}</p>
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
