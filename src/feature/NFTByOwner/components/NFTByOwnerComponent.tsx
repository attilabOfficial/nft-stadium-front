import React from 'react'

import styled from 'styled-components'
import { NFTOwnLi } from './NFTOwnLi'
import { INFT } from '../../../common/store/nftSlice'

const NFTList = styled.div`
  margin-top 1rem;
  text-align: center;
  width: 100%;
  overflow: hidden;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`

export const NFTByOwnerComponent = ({
    currentOwner,
    NFTsOwn,
}: {
    currentOwner: string
    NFTsOwn: INFT[]
}) => {
    return (
        <NFTList>
            <h2>Current owner :</h2>
            <p>{currentOwner}</p>
            <h3>Your NFTs :</h3>
            <ul>
                {NFTsOwn.map((nft: INFT) => (
                    <NFTOwnLi key={nft.id} nft={nft} />
                ))}
            </ul>
        </NFTList>
    )
}
