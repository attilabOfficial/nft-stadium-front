
import React, { useState, useRef } from 'react';

import {useContext, useEffect} from 'react';
import { Web3Context } from './DappContainer';
import { useDispatch } from 'react-redux';
import { getAllMapInfo } from '../store/mapInfoSlice';
import { StadiumComponent } from '../components/StadiumComponent';


export const StadiumContainer =()=>{
    const web3Context = useContext(Web3Context);
    const dispatch = useDispatch();
    // eslint-disable-next-line no-unused-vars
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

    useEffect(()=>{
        if(web3Context.contract){
            dispatch(getAllMapInfo(web3Context.contract));
        }
    }, [web3Context.contract, dispatch])


    return <StadiumComponent containerRef={containerRef} zoomIn={zoomIn} zoomOut={zoomOut}/>
}