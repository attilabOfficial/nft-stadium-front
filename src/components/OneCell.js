import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setCurrentNFT } from '../store/NFTDetailSlice'
import { openRightPanel } from '../store/rightPannel.slice'

const CellContainer = styled.div`
  background-color: cyan;
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

const OneCell = ({ id }) => {
  const dispatch = useDispatch();

  const clickOnCell = () => {
    dispatch(openRightPanel());
    dispatch(setCurrentNFT(id));
    console.log('cell clicked');
  }

  return (
    <CellContainer>
      <Cell onClick={(clickOnCell)} src={`https://picsum.photos/id/${id}/200`} alt="" />
    </CellContainer>
  )
}

export default OneCell;