
import React, { useState, useRef } from 'react';

import {useContext, useEffect} from 'react';
import { Web3Context } from './DappContainer';
import { useDispatch } from 'react-redux';
import { getAllMapInfo, mockData } from '../store/mapInfoSlice';
import { StadiumComponent } from '../components/StadiumComponent';
import { MOCK } from '../index';


export const StadiumContainer =()=>{
    const web3Context = useContext(Web3Context);
    const dispatch = useDispatch();
    // eslint-disable-next-line no-unused-vars
    let [mapSize, setMapSize] = useState(1);

    // todo ajouter un useSelector pour récupérer les images du store 

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
        if(MOCK){
            dispatch(mockData())
            // TODO dispatch getMockMap
        }else{
            if(web3Context.contract){
                dispatch(getAllMapInfo(web3Context.contract));
            }
        }
      
    }, [web3Context.contract, dispatch])


    return <StadiumComponent containerRef={containerRef} zoomIn={zoomIn} zoomOut={zoomOut}/>
}