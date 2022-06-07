import React from 'react'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { NFTByOwnerComponent } from './NFTByOwnerComponent'
import { nftsByOwnerSelector } from '../../../common/store/nftSlice'
import { Web3Context } from '../../../common/components/web3/DappContainer'
import { RootState } from '../../../store'
import styled from 'styled-components'

const Container = styled.div`
    overflow: scroll;
    height: 60%;
`

export const NFTByOwnerContainer = () => {
    const web3Context = useContext(Web3Context)
    const currentOwner = web3Context.selectedAddress

    // All NFTs one owner
    const { NFTsOwn } = useSelector((state: RootState) => ({
        NFTsOwn: nftsByOwnerSelector(state, currentOwner),
    }))

    return (
        <>
            <Container>
                <NFTByOwnerComponent
                    NFTsOwn={NFTsOwn}
                    curOwner={currentOwner}
                />
            </Container>
        </>
    )
}
