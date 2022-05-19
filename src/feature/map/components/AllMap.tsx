import React from 'react'

import styled from 'styled-components';
import stade from '../images/Stade.png';
import OneCell from './OneCell';
import { NBR_COL, NBR_ROW } from '../../../const';
import { INFT } from '../../../common/store/nftSlice';

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
  width: 30%;
  heigth: 100%;
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(${NBR_COL}, 1fr);
  grid-template-rows: repeat(${NBR_ROW} ,1fr);
  border: solid 1px transparent;
`

const AllMap = ({ mapInfo }: {mapInfo: INFT[]}) => {
  return (
    <>
      <GridContainer>
        <StadeGrid>
          {mapInfo.map((cell, index) => <OneCell key={index} id={cell.id} img={cell.img} />)}
        </StadeGrid>
      </GridContainer>
    </>
  )
}

export default AllMap;