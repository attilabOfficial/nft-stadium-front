import React from 'react'

import styled from 'styled-components'
import { INFT } from '../../../common/store/nftSlice'
import { NFTCard } from './NFTCard'

const NFTSection = styled.div`
    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        height: 40%;
    }
`

export const NFTByOwnerComponent = ({
    NFTsOwn,
    curOwner,
    clickOnNft,
}: {
    NFTsOwn: INFT[]
    curOwner: string
    clickOnNft: (id: INFT['id']) => void
}) => {
    return (
        <NFTSection>
            <ul>
                {NFTsOwn.map((nft: INFT) => (
                    <NFTCard nft={nft} clickOnNft={clickOnNft} />
                ))}
            </ul>
        </NFTSection>
    )
}
