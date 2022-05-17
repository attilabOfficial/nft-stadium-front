
import React, { useRef } from 'react';

import {useContext, useEffect} from 'react';
import { Web3Context } from './DappContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMapInfo, mockData, mapSelector } from '../store/mapInfoSlice';
import { StadiumComponent } from '../components/StadiumComponent';
import { MOCK } from '../index';

export const StadiumContainer =()=>{
    const web3Context = useContext(Web3Context);
    const dispatch = useDispatch();
    const mapInfo = useSelector((state) => mapSelector(state));

    let mapSize = 1;

    const containerRef = useRef(null);

    const zoomIn = () => {
        if (containerRef && containerRef.current && containerRef.current.style) {
            containerRef.current.style.transform = `scale(${(mapSize += 0.5)})`;
            containerRef.current.style.transformOrigin = `top left`;
            containerRef.current.style.position = `${mapSize > 1 ? "absolute" : undefined}`;
            containerRef.current.style.top = `${mapSize > 1 ? 0 : undefined}`;
            containerRef.current.style.left = `${mapSize > 1 ? 0 : undefined}`;
        } 
    };

    const zoomOut = () => {
        if (mapSize > 1) {
            if (containerRef && containerRef.current && containerRef.current.style) {
                containerRef.current.style.transform = `scale(${(mapSize -= 0.5)})`;
                console.log('click -')
            }
        }
    };


    useEffect(()=>{
        if(MOCK){
            dispatch(mockData())
        }else{
            if(web3Context.contract){
                dispatch(getAllMapInfo(web3Context.contract));
            }
        }
      
    }, [web3Context.contract, dispatch])


    return <StadiumComponent
        containerRef={containerRef}
        mapInfo={mapInfo}
        zoomIn={zoomIn}
        zoomOut={zoomOut}
    />
}