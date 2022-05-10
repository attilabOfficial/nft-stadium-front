
import styled from 'styled-components';
import {useContext, useEffect} from 'react';
import { Web3Context } from './DappContainer';
import { useDispatch } from 'react-redux';
import { getAllMapInfo } from '../store/mapInfoSlice';

const Title = styled.h1`
    color:red;
`


export const StadiumContainer =()=>{
    const web3Context = useContext(Web3Context);
    const dispatch = useDispatch();


    useEffect(()=>{
        if(web3Context.contract){
            dispatch(getAllMapInfo(web3Context.contract));
        }
    }, [web3Context.contract, dispatch])


    return <Title>Hello</Title>
}