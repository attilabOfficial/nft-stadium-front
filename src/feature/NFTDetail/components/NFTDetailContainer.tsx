import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import {useContext} from "react"
import { NFTDetailComponent } from "./NFTDetailComponent";
import { curNftSelector, isNFTDetailLoading } from "../../../common/store/nftSlice";
import { Web3Context } from '../../../common/components/web3/DappContainer';
import { mint,changeImg} from "../../../common/store/nftSlice";
import { AppDispatch, RootState } from "../../../store";


export const NFTDetailContainer = () =>{

    const web3Context = useContext(Web3Context);
    const dispatch = useDispatch<AppDispatch>();

    const { currentNFT, loading } = useSelector((state: RootState) =>({
        currentNFT : curNftSelector(state),
        loading : isNFTDetailLoading(state),
    }));

    const mintNFT = ()=> {
        // A transfert event will be fired after the transaction. DappContainer listen to this event
        if(currentNFT && web3Context.contract){
            dispatch(
                mint({contract:web3Context.contract, to:web3Context.selectedAddress, id: currentNFT.id})
            )
        }
    
    }
    const changeNFTImg = (newImg: string)=> {
        if(currentNFT && web3Context.contract){
            dispatch(
                changeImg({contract: web3Context.contract, url:newImg, id: currentNFT.id})
            )
        }
    }

    if(loading==='loading'){
        return <h1>Transaction en cours</h1>
    }
    return (
        <>
            <div>
                {currentNFT && <NFTDetailComponent currentNFT={currentNFT} changeImgFct={changeNFTImg} mintFct={mintNFT}/>}
            </div>
        </>
    )
}