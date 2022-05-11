import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { NFTDetailContainer } from '../container/NFTDetailContainer';
import close from '../images/x_icon.svg';
import { closeRightPanel } from '../store/rightPannel.slice';

const Panel = styled.div`
  background-color: #ca180b;
  font-family: "Open Sans",sans-serif;
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 9999;
  min-width: 20vw;
  min-height: 75vh;
  max-width: 20vw;
  max-height: 75vh;
  padding: 1rem;
`

const ClosePanel = styled.img`
  width: 30px;
`

const RightPanel = () => {
  const dispatch = useDispatch();

  const clickOnClose = () => {
    dispatch(closeRightPanel());
  }

  return (
      <Panel>
        <ClosePanel src={close} alt='close' onClick={(clickOnClose)} />
        <NFTDetailContainer/>
      </Panel>
  )
}

export default RightPanel;