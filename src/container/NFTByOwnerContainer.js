import { useContext } from "react";
import { NFTByOwnerComponent } from "../components/NFTByOwnerComponent";
import { Web3Context } from './DappContainer';

export const NFTByOwnerContainer = () =>{

    const web3Context = useContext(Web3Context);
    const currentOwner = web3Context.selectedAddress;
    console.log(web3Context);

    return (
        <>
            <div>
                <NFTByOwnerComponent currentOwner={currentOwner} />
            </div>
        </>
    )
}