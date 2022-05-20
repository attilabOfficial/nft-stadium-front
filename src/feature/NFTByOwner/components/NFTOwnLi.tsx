import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { openRightPanel } from '../../../common/store/appStateSlice';
import { INFT } from '../../../common/store/nftSlice';
import { setCurrentNFT } from '../../../common/store/appStateSlice';

const LiElement = styled.li`
    cursor: pointer;

    :hover {
        background-color: black;
    }
`

export const NFTOwnLi = ({ nft }: { nft: INFT }) => {
    const dispatch = useDispatch()

    const clickOnNft = () => {
        dispatch(openRightPanel())
        dispatch(setCurrentNFT(nft.id))
    }

    const liHover = () => {
        dispatch(setCurrentNFT(nft.id))
    }

    return <LiElement onMouseEnter={liHover} onClick={clickOnNft} >{nft.id}</LiElement>
}
