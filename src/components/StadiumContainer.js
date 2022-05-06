import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import AllMap from './AllMap';

const Container = styled.div`
  width: 100vw;
  text-align: center;
  background-color: black;
`

const StadiumContainer = () => {
    let [mapSize, setMapSize] = useState(1);

    const changeState = () => {
        setMapSize(containerRef.style.transform)
    };

    const containerRef = useRef(null);

    useEffect(() => {
        document.addEventListener('wheel', function (e){
            if (e.deltaY > 0) {
                containerRef.current.style.transform = `scale(${(mapSize += 0.02)})`;
                console.log('zoom +', containerRef.current.style.transform)
            } else if (mapSize >= 0) {
                containerRef.current.style.transform = `scale(${(mapSize -= 0.02)})`;
                console.log('zoom -', containerRef.current.style.transform);
            }
        });
    }, [mapSize]);

    return (
        <Container ref={containerRef} >
            <AllMap />
        </Container>
    )
}

export default StadiumContainer;