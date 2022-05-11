import styled from 'styled-components';
import zoom_in from '../images/glass_plus_icon.svg'
import zoom_out from '../images/glass_minus_icon.svg';

const Zoom = styled.button`
  background-color: #ca180b;
  border: none;
  border-radius: 5px;
  margin: 1rem;
  padding: 0.5rem;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  fill: white;
`

const ZoomIcon = styled.img`
  width: 35px;
`

const ZoomButton = ({ buttonLabel, fctOnClick }) => {
  return (
      <Zoom onClick={fctOnClick} >
        {buttonLabel === 'zoom_in' ? <ZoomIcon src={zoom_in} alt={`${buttonLabel}`} /> : <ZoomIcon src={zoom_out} alt={`${buttonLabel}`} />}
      </Zoom>
  )
}

export default ZoomButton;