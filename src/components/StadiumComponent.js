import React from 'react';
import styled from 'styled-components';
import AllMap from './AllMap';
import ZoomButton from './ZoomButton';

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
`

export const StadiumComponent = ({containerRef, zoomIn, zoomOut}) => {
    return (
        <div>
            <Container ref={containerRef} >
                <AllMap />
            </Container>
            <ZoomButtonsContainer>
                <ZoomButton buttonLabel='Zoom +' fctOnClick={zoomIn} />
                <ZoomButton buttonLabel='Zoom -' fctOnClick={zoomOut} />
            </ZoomButtonsContainer>
        </div>
    )
}

