import { useEffect , useContext} from "react";
import { useSelector,useDispatch } from "react-redux";
import { curNftSelector, getOwner, curNftOwnerSelector } from '../store/NFTDetailSlice';
import { Web3Context } from './DappContainer';
import { MOCK } from '../index';
import { NFTDetailComponent } from "../components/NFTDetailComponent";



export const NFTDetailContainer = () =>{

    const { currentNFT, owner } = useSelector((state) =>({
        currentNFT : curNftSelector(state),
        owner : curNftOwnerSelector(state),
    }));

    const web3Context = useContext(Web3Context);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(MOCK){
            // TODO dispatch getMockMap
        }else{
            if(web3Context.contract){
                dispatch(getOwner(web3Context.contract,currentNFT ));
            }
        }
    },[currentNFT,web3Context.contract, dispatch])

    //const onSumbit = ()=>{
       // dispatch(changeImg(web3Context.contract,newImgUrl ));
    //}

    return (
        <>
            <div>
                <NFTDetailComponent currentNFT={currentNFT} owner={owner} />
                <form>
                    <input></input>
                </form>
            </div>
        </>
    )
}