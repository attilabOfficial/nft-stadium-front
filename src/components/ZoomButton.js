import styled from 'styled-components';

const Zoom = styled.button`
  background-color: #ca180b;
  border: none;
  border-radius: 5px;
  margin: 1rem;
  padding: 0.5rem;
  font-family: "Open Sans",sans-serif;
  font-size: 1.5rem
`

const ZoomButton = ({ buttonLabel, fctOnClick }) => {
  return (
      <Zoom onClick={fctOnClick} >{buttonLabel}</Zoom>
  )
}

export default ZoomButton;