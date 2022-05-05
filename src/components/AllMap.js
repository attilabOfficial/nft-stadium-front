import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import styled from 'styled-components';
import stade from '../images/Stade.png'

// Grid property
const columnsNbr = 25;
const rowsNbr = 15;
const gridWidth = 30;
const cellsTotal = columnsNbr * rowsNbr;

const cells = [];

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
  width: ${gridWidth}%;
  heigth: 100%;
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(${columnsNbr}, 1fr);
  grid-template-rows: repeat(${rowsNbr}, 1fr);
  border: solid 1px transparent;
`

const Cell = styled.div`
  background-color: red;
  aspect-ratio: 1;
`

const AllMap = (columnsNbr, rowsNbr) => {
  const [cellsNbr, setCellsNbr] = useState(0);

  useEffect(() => {
    if (cells.length === 0) {
      for (let c = 0; c <= cellsTotal - 1; c++) {
        cells.push(c);
        setCellsNbr((cellsNbr) => cellsNbr + 1);
        console.log(cells.length)
      }
    }
  }, []);
  
  return (
    <>
      <GridContainer>
        <StadeGrid>
          {cells.map((cell, index) => <Cell key={index} />)}
        </StadeGrid>
      </GridContainer>
    </>
  )
}

export default AllMap;