
import React, { useRef } from 'react';

import {useContext, useEffect} from 'react';
import { Web3Context } from './DappContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMapInfo, mockData, mapSelector, nftImgMap } from '../store/mapInfoSlice';
import { StadiumComponent } from '../components/StadiumComponent';
import { MOCK } from '../index';

export const StadiumContainer =()=>{
    const web3Context = useContext(Web3Context);
    const dispatch = useDispatch();

    let mapSize = 1;

    const containerRef = useRef(null);

    const zoomIn = () => {
        if (containerRef && containerRef.current && containerRef.current.style) {
            containerRef.current.style.transform = `scale(${(mapSize += 0.5)})`;
            containerRef.current.style.transformOrigin = `top left`;
            containerRef.current.style.position = `${mapSize > 1 ? "absolute" : undefined}`;
            containerRef.current.style.top = `${mapSize > 1 ? 0 : undefined}`;
            containerRef.current.style.left = `${mapSize > 1 ? 0 : undefined}`;
        } // else ?
    };

    const zoomOut = () => {
        if (mapSize > 1) {
            containerRef.current.style.transform = `scale(${(mapSize -= 0.5)})`;
            console.log('click -')
        }
    };

    const nftImg = useSelector((state) => mapSelector(state));

    useEffect(()=>{
        if(MOCK){
            dispatch(mockData())
        }else{
            if(web3Context.contract){
                // dispatch(getAllMapInfo(web3Context.contract));
                dispatch(nftImgMap())
            }
        }
      
    }, [web3Context.contract, dispatch])


    return <StadiumComponent
        containerRef={containerRef}
        nftImg={nftImg}
        zoomIn={zoomIn}
        zoomOut={zoomOut}
    />
}