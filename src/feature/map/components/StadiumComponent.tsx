import React from 'react';
import styled from 'styled-components';
import AllMap from './AllMap';
import ZoomButton from './ZoomButton';
import { INFT } from '../../../common/store/nftSlice';

const Container = styled.div`
  width: 100vw;
  text-align: center;
  background-color: black;
  margin-top: 119.5px;
`

const ZoomButtonsContainer = styled.div`
  position: fixed;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`

export const StadiumComponent = (
        {containerRef, zoomIn, zoomOut, mapInfo}:
            {containerRef : React.RefObject<HTMLInputElement>,zoomIn: ()=>void, zoomOut : ()=>void , mapInfo : INFT[]}) => {
    if(mapInfo && mapInfo.length>0){
        return (
            <div>
                <Container ref={containerRef} >
                    <AllMap mapInfo={mapInfo} />
                </Container>
                <ZoomButtonsContainer>
                    <ZoomButton buttonLabel='zoom_in' fctOnClick={zoomIn} />
                    <ZoomButton buttonLabel='zoom_out' fctOnClick={zoomOut} />
                </ZoomButtonsContainer>
            </div>
        )
    }else{
        return <h1>Loading</h1>
    }
  
}

