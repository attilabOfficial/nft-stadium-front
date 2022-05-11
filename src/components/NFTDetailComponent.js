import styled from 'styled-components';

const NFTDetail = styled.div`
  text-align: center;
  width: 100%;
  overflow: hidden;
`

export const NFTDetailComponent = ({ currentNFT, owner }) => {
  return (
    <NFTDetail>
      <h2>{currentNFT}</h2>
      <p>{owner}</p>
    </NFTDetail>
  )
}