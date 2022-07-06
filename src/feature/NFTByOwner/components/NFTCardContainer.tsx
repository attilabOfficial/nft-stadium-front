import React from 'react';
import { INFT } from '../../../common/store/nftSlice';
import { closeHeaderPanel, openRightPanel, setCurrentNFT } from '../../../common/store/appStateSlice';
import { useDispatch } from 'react-redux';
import { NFTCard } from './NFTCard';
import { AppDispatch } from '../../../store';

export const NFTCardContainer = ({ nft }: { nft: INFT  }) => {
    const dispatch: AppDispatch = useDispatch()

    const clickOnNft = () => {
        dispatch(closeHeaderPanel())
        dispatch(openRightPanel())
        dispatch(setCurrentNFT(nft.id))
    }

    return (
      <NFTCard nft={nft} clickOnNft={clickOnNft} />
    )
}