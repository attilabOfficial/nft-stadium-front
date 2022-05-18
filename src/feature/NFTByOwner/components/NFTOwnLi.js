import { useDispatch } from "react-redux";
import styled from 'styled-components';
import { openRightPanel, setCurrentNFT } from "../../../feature/NFTDetail/store/NFTDetailSlice";

const LiElement = styled.li`
  cursor: pointer;

  :hover {
    background-color: black;
  }
`

export const NFTOwnLi = ({ nft }) => {
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