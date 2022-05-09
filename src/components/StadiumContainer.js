import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import AllMap from './AllMap';

const Container = styled.div`
  width: 100vw;
  text-align: center;
  background-color: black;
  margin-top: 119.5px;
`

const StadiumContainer = () => {
    let [mapSize, setMapSize] = useState(1);

    const containerRef = useRef(null);

    useEffect(() => {
        containerRef.current.addEventListener('wheel', function (e){
            if (e.deltaY > 0) {
                containerRef.current.style.transform = `scale(${(mapSize += 0.02)})`;
                console.log('zoom +', containerRef.current.style.transform)
            } else if (mapSize > 1) {
                containerRef.current.style.transform = `scale(${(mapSize -= 0.02)})`;
                console.log('zoom -', containerRef.current.style.transform);
            }
        });
    }, [mapSize]);

    return (
        <Container ref={containerRef} id="container" >
            <AllMap />
        </Container>
    )
}

export default StadiumContainer;