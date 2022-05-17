import { useSelector,useDispatch } from "react-redux";
import {useContext} from "react"
import { NFTDetailComponent } from "../components/NFTDetailComponent";
import { curNftSelector } from '../store/NFTDetailSlice';
import { Web3Context } from './DappContainer';
import { mint,changeImg} from '../store/mapInfoSlice';




export const NFTDetailContainer = () =>{

    const web3Context = useContext(Web3Context);
    const dispatch = useDispatch();

    const { currentNFT } = useSelector((state) =>({
        currentNFT : curNftSelector(state),
    }));

    const mintNFT = ()=> {
        dispatch(
            mint({contract:web3Context.contract, to:web3Context.selectedAddress, id: currentNFT.id})
        )
    }
    const changeNFTImg = (newImg)=> {
        dispatch(
            changeImg({contract:web3Context.contract, url:newImg, id: currentNFT.id, img:newImg})
        )
    }

    return (
        <>
            <div>
                {(currentNFT && currentNFT.owner !== "0x0000000000000000000000000000000000000000") ?
                     <NFTDetailComponent currentNFT={currentNFT} changeImgFct={changeNFTImg}/>: 
                     <div>
                        <h1>{currentNFT.id}</h1>
                        <button onClick={mintNFT}>Mint</button>
                     </div>}
                
            </div>
        </>
    )
}