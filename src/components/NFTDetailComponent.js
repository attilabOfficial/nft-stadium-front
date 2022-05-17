import { useSelector } from 'react-redux';
import styled from 'styled-components';

const NFTDetail = styled.div`
  text-align: center;
  width: 100%;
  overflow: hidden;
`

export const NFTDetailComponent = ({ currentNFT, owner }) => {
  const nftImg = useSelector((state) => state.map.imgMap[0][currentNFT]);
  const nftOwner = useSelector((state) => state.map.imgMap[1][currentNFT]);

  return (
    <NFTDetail>
      <h2>{currentNFT}</h2>
      <h3>Owner :</h3>
      <p>{nftOwner}</p>
      <img src={nftImg} alt='NFT' />
    </NFTDetail>
  )
}