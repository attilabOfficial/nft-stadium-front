import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { NFTByOwnerContainer } from '../container/NFTByOwnerContainer';
import close from '../images/x_icon.svg';
import { closeLeftPanel } from '../store/NFTByOwnerSlice';

const Panel = styled.div`
  background-color: #ca180b;
  font-family: "Open Sans",sans-serif;
  color: white;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 9999;
  min-width: 20vw;
  min-height: calc(100vh - 150px);
  max-width: 20vw;
  max-height: calc(100vh - 150px);
  padding: 1rem;
  border-radius: 0 5px 0 0;
`

const ClosePanel = styled.img`
  position: absolute;
  right: 1rem;
  width: 30px;
`

const LeftPanel = () => {
  const dispatch = useDispatch();

  const clickOnClose = () => {
    dispatch(closeLeftPanel())
  }

  return (
      <Panel>
        <ClosePanel src={close} alt='close' onClick={(clickOnClose)} />
        <NFTByOwnerContainer />
      </Panel>
  )
}

export default LeftPanel;