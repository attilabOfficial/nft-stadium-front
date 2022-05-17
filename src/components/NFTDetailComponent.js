import styled from 'styled-components';

const NFTDetail = styled.div`
  text-align: center;
  width: 100%;
  overflow: hidden;
`

export const NFTDetailComponent = ({ currentNFT }) => {

  return (
    <NFTDetail>
      <h2>#{currentNFT.id}</h2>
      <h3>Owner :</h3>
      <p>{currentNFT.owner}</p>
      <img src={currentNFT.img} alt='NFT' />
    </NFTDetail>
  )
}