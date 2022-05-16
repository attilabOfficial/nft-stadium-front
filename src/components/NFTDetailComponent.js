import { useSelector } from 'react-redux';
import styled from 'styled-components';

const NFTDetail = styled.div`
  text-align: center;
  width: 100%;
  overflow: hidden;
`

export const NFTDetailComponent = ({ currentNFT, owner }) => {
  const nftImg = useSelector((state) => state.web3Config.imgMap);
  console.log(nftImg);

  return (
    <NFTDetail>
      <h2>{currentNFT}</h2>
      <h3>Owner :</h3>
      <p>{owner}</p>
      <img src={nftImg[currentNFT]} alt='NFT' />
    </NFTDetail>
  )
}