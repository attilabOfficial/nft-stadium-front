import React from 'react'

import styled from 'styled-components'
import { NFTCard } from './NFTCard'
import { INFT } from '../../../common/store/nftSlice'

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
}: {
    NFTsOwn: INFT[]
    curOwner: string
}) => {
    return (
        
        <NFTSection>
            <ul>
                {NFTsOwn.map((nft: INFT) => (
                    <NFTCard key={nft.id} nft={nft} curOwner={curOwner} />
                ))}
            </ul>
        </NFTSection>
        
    )
}
