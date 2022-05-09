import styled from 'styled-components';

const ZoomButtonsContainer = styled.div`
  position: fixed;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
`

const ZoomIn = styled.button`
  background-color: #ca180b;
  border: none;
  border-radius: 5px;
  margin-right: 1rem;
  padding: 0.5rem;
  font-family: "Open Sans",sans-serif;
  font-size: 1.5rem
`

const ZoomOut = styled.button`
  background-color: #ca180b;
  border: none;
  border-radius: 5px;
  margin-left: 1rem;
  padding: 0.5rem;
  font-family: "Open Sans",sans-serif;
  font-size: 1.5rem
`

const ZoomButtons = () => {
  return (
    <ZoomButtonsContainer>
      <ZoomIn>Zoom +</ZoomIn>
      <ZoomOut>Zoom -</ZoomOut>
    </ZoomButtonsContainer>
  )
}

export default ZoomButtons;