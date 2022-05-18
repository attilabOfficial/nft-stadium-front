import { useSelector,useDispatch } from "react-redux";
import {useContext} from "react"
import { NFTDetailComponent } from "./NFTDetailComponent";
import { curNftSelector, isNFTDetailLoading } from "../../../common/store/nftSlice";
import { Web3Context } from '../../../common/components/web3/DappContainer';
import { mint,changeImg} from "../../../common/store/nftSlice";

export const NFTDetailContainer = () =>{

    const web3Context = useContext(Web3Context);
    const dispatch = useDispatch();

    const { currentNFT,loading } = useSelector((state) =>({
        currentNFT : curNftSelector(state),
        loading : isNFTDetailLoading(state),
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

    if(loading==='loading'){
        return <h1>Transaction en cours</h1>
    }
    return (
        <>
            <div>
                <NFTDetailComponent currentNFT={currentNFT} changeImgFct={changeNFTImg} mintFct={mintNFT}/>:  
            </div>
        </>
    )
}