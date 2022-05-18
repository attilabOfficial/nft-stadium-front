import { useSelector,useDispatch } from "react-redux";
import { useContext } from "react";
import styled from 'styled-components';
import { NFTDetailComponent } from "./NFTDetailComponent";
import { curNftSelector, isNFTDetailLoading } from "../../../common/store/nftSlice";
import { Web3Context } from '../../../common/components/web3/DappContainer';
import { mint, changeImg } from "../../../common/store/nftSlice";

const TransLoading = styled.div`
    background-color: black;
    border-radius: 5px;
    padding: 1rem;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    div {
        border: 13px solid #fff;
        border-top: 13px solid #a9a9a9; 
        border-radius: 50%;
        width: 60px;
        height: 60px;
        animation: spin 2s linear infinite;
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
`

export const NFTDetailContainer = () =>{

    const web3Context = useContext(Web3Context);
    const dispatch = useDispatch();

    const { currentNFT, loading } = useSelector((state) =>({
        currentNFT: curNftSelector(state),
        loading: isNFTDetailLoading(state),
    }));

    const mintNFT = ()=> {
        // A transfert event will be fired after the transaction. DappContainer listen to this event
        dispatch(
            mint({contract:web3Context.contract, to:web3Context.selectedAddress, id: currentNFT.id})
        )
    }
    const changeNFTImg = (newImg)=> {
        dispatch(
            changeImg({contract:web3Context.contract, url:newImg, id: currentNFT.id, img:newImg})
        )
    }

    if (loading === 'loading'){
        return <TransLoading><h2>Transaction en cours</h2><div></div></TransLoading>
    }
    return (
        <>
            <div>
                <NFTDetailComponent currentNFT={currentNFT} changeImgFct={changeNFTImg} mintFct={mintNFT} />:  
            </div>
        </>
    )
}