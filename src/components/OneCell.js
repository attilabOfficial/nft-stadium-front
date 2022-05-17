import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setCurrentNFT, openRightPanel } from '../store/NFTDetailSlice'

const CellContainer = styled.div`
  background-color: rgba(202, 24, 11, 0.3);
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

const OneCell = ({ id, img }) => {
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