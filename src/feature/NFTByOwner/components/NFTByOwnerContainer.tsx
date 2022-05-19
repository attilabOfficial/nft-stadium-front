import React from 'react'
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NFTByOwnerComponent } from "./NFTByOwnerComponent";
import { nftsByOwner } from "../../../common/store/nftSlice";
import { setCurrentOwner } from "../store/NFTByOwnerSlice";
import { Web3Context } from '../../../common/components/web3/DappContainer';
import { RootState } from '../../../store';

export const NFTByOwnerContainer = () => {
    const dispatch = useDispatch();

    const web3Context = useContext(Web3Context);
    const currentOwner = web3Context.selectedAddress;

    // All NFTs one owner
    const { NFTsOwn } = useSelector((state: RootState) =>({
        NFTsOwn: nftsByOwner(state),
    }));

    useEffect(() => {
        const setCurOwner = () => {
            dispatch(setCurrentOwner(currentOwner))
          }
        setCurOwner()
    }, [currentOwner, dispatch]);

    return (
        <>
            <div>
                <NFTByOwnerComponent currentOwner={currentOwner} NFTsOwn={NFTsOwn} />
            </div>
        </>
    )
}