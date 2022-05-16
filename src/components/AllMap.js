import styled from 'styled-components';
import stade from '../images/Stade.png';
import OneCell from './OneCell'

// Grid property
const columnsNbr = 25;
const rowsNbr = 17;
const gridWidth = 30;

const GridContainer = styled.div`
  background: no-repeat center url(${stade});
  background-size : contain;
  margin: 0 auto;
  width: 100vw;
  max-width: 1400px;
  padding: 300px 0;
`

const StadeGrid = styled.div`
  margin: 0 auto;
  padding-top: 3vh;
  width: ${gridWidth}%;
  heigth: 100%;
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(${columnsNbr}, 1fr);
  grid-template-rows: repeat(${rowsNbr} ,1fr);
  border: solid 1px transparent;
`

const AllMap = ({ nftImg }) => {
  
  return (
    <>
      <GridContainer>
        <StadeGrid>
          {nftImg.map((cell, index, img) => <OneCell key={index} id={index} img={img} />)}
        </StadeGrid>
      </GridContainer>
    </>
  )
}

export default AllMap;