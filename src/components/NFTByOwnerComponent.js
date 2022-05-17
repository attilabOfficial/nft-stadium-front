import styled from 'styled-components';

const NFTList = styled.div`
  text-align: center;
  width: 100%;
  overflow: hidden;
`

export const NFTByOwnerComponent = ({ currentOwner }) => {

  return (
    <NFTList>
      <h2>Current owner :</h2>
      <p>{currentOwner}</p>
      <h3>Your NFTs :</h3>
    </NFTList>
  )
}