import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { NFTDetailContainer } from '../container/NFTDetailContainer';
import close from '../images/x_icon.svg';
import { closeRightPanel } from '../store/NFTDetailSlice';

const Panel = styled.div`
  background-color: #ca180b;
  font-family: "Open Sans",sans-serif;
  color: white;
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 9999;
  min-width: 20vw;
  min-height: calc(100vh - 150px);
  max-width: 20vw;
  max-height: calc(100vh - 150px);
  padding: 1rem;
  border-radius: 5px 0 0 0;
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