import styled from 'styled-components';
import { NFTOwnLi } from './NFTOwnLi';

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

export const NFTByOwnerComponent = ({ currentOwner, NFTsOwn }) => {
  return (
    <NFTList>
      <h2>Current owner :</h2>
      <p>{currentOwner}</p>
      <h3>Your NFTs :</h3>
      <ul>
        {NFTsOwn.map((nft) =>
          <NFTOwnLi key={nft.id} nft={nft} />
        )}
      </ul>
    </NFTList>
  )
}