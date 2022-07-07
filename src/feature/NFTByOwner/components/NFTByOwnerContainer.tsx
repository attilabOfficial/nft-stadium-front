import React from 'react'
import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NFTByOwnerComponent } from './NFTByOwnerComponent'
import { INFT, nftsByOwnerSelector } from '../../../common/store/nftSlice'
import { Web3Context } from '../../../common/components/web3/DappContainer'
import { AppDispatch, RootState } from '../../../store'
import styled from 'styled-components'
import {
    closeHeaderPanel,
    openRightPanel,
    setCurrentNFT,
} from '../../../common/store/appStateSlice'

const Container = styled.div`
    overflow: scroll;
    height: 60%;
    width: 100%;
    mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
`

export const NFTByOwnerContainer = () => {
    const web3Context = useContext(Web3Context)
    const currentOwner = web3Context.selectedAddress

    // All NFTs one owner
    const { NFTsOwn } = useSelector((state: RootState) => ({
        NFTsOwn: nftsByOwnerSelector(state, currentOwner),
    }))
    const dispatch: AppDispatch = useDispatch()

    const clickOnNft = (id: INFT['id']) => {
        dispatch(closeHeaderPanel())
        dispatch(openRightPanel())
        dispatch(setCurrentNFT(id))
    }

    return (
        <>
            <Container>
                <NFTByOwnerComponent
                    NFTsOwn={NFTsOwn}
                    curOwner={currentOwner}
                    clickOnNft={clickOnNft}
                />
            </Container>
        </>
    )
}
