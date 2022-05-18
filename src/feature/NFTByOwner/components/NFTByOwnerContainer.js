import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NFTByOwnerComponent } from "../components/NFTByOwnerComponent";
import { nftsByOwner, setCurrentOwner } from "../../../common/store/nftSlice";
import { Web3Context } from '../../../common/components/web3/DappContainer';

export const NFTByOwnerContainer = () => {
    const dispatch = useDispatch();

    const web3Context = useContext(Web3Context);
    const currentOwner = web3Context.selectedAddress;

    // All NFTs the owner
    const { NFTsOwn } = useSelector((state) =>({
        NFTsOwn: nftsByOwner(state),
    }));

    useEffect(() => {
        const setCurOwner = () => {
            dispatch(setCurrentOwner(currentOwner));
            
          }
        setCurOwner();
    }, [currentOwner, dispatch]);

    return (
        <>
            <div>
                <NFTByOwnerComponent currentOwner={currentOwner} NFTsOwn={NFTsOwn} />
            </div>
        </>
    )
}