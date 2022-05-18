import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { openRightPanel } from '../../../common/store/appStateSlice';
import { setCurrentNFT } from '../../../common/store/nftSlice';

const CellContainer = styled.div`
  background-color: rgba(255, 255, 0, 0.4)  ;
  aspect-ratio: 1;
  display: grid;
  place-items: center;

  ::before {
    content: "";
    padding-bottom: 100%;
    display: block;
    grid-area: 1 / 1 / 2 / 2;
  }
`

const Cell = styled.img`
  max-width: 100%;
  max-heigth: 100%;
  grid-area: 1 / 1 / 2 / 2;
`

const OneCell = ({ id, img, owner }) => {
  const dispatch = useDispatch();

  const clickOnCell = () => {
    dispatch(openRightPanel());
    dispatch(setCurrentNFT(id));
  }
  
  return (
    <CellContainer onClick={(clickOnCell)} >
      {img !=='' && <Cell src={img} alt="" />}
    </CellContainer>
  )
}

export default OneCell;