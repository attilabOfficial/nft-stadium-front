import React, { useState, useEffect, useRef, useCallback } from 'react';
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

const StadiumContainer = () => {
    let [mapSize, setMapSize] = useState(1);

    const containerRef = useRef(null);

    const zoomIn = () => {
        containerRef.current.style.transform = `scale(${(mapSize += 0.5)})`;
        console.log('click +');
    };
    
    const zoomOut = () => {
        if (mapSize > 1) {
            containerRef.current.style.transform = `scale(${(mapSize -= 0.5)})`;
            console.log('click -')
        }
    };

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

export default StadiumContainer;