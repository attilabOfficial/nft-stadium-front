import styled from 'styled-components'

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
  return (
    <CellContainer>
      <Cell src={`https://picsum.photos/id/${id}/200`} alt="" />
    </CellContainer>
  )
}

export default OneCell;