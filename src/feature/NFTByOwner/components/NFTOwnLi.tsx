import React from 'react'
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import { openRightPanel } from "../../NFTDetail/store/NFTDetailSlice";
import {INFT, setCurrentNFT} from "../../../common/store/nftSlice"

const LiElement = styled.li`
  cursor: pointer;

  :hover {
    background-color: black;
  }
`

export const NFTOwnLi = ({ nft }: {nft: INFT}) => {
  const dispatch = useDispatch();

  const clickOnNft = () => {
    dispatch(openRightPanel());
    dispatch(setCurrentNFT(nft.id));
  }

  return (
    <LiElement onClick={clickOnNft}>
      {nft.id}
    </LiElement>
  )
}