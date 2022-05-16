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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`

export const StadiumComponent = ({containerRef, zoomIn, zoomOut, mockImg}) => {
    return (
        <div>
            <Container ref={containerRef} >
                <AllMap mockImg={mockImg} />
            </Container>
            <ZoomButtonsContainer>
                <ZoomButton buttonLabel='zoom_in' fctOnClick={zoomIn} />
                <ZoomButton buttonLabel='zoom_out' fctOnClick={zoomOut} />
            </ZoomButtonsContainer>
        </div>
    )
}

