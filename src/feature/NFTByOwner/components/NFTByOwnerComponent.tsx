import React from 'react'

import styled from 'styled-components'
import { INFT } from '../../../common/store/nftSlice'
import { NFTCardContainer } from './NFTCardContainer'

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
                    <NFTCardContainer key={nft.id} nft={nft} />
                ))}
            </ul>
        </NFTSection>
    )
}
