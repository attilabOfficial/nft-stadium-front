import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import close from '../../images/x_icon.svg';
import { isRightPanelOpenSelector,closeRightPanel } from '../../store/appStateSlice';

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

const RightPanel = ({children}) => {
  const dispatch = useDispatch();
  const rightPanelIsOpen = useSelector((state) => isRightPanelOpenSelector(state));


  const clickOnClose = () => {
    dispatch(closeRightPanel());
  }

  return (
      <>
        { rightPanelIsOpen && <Panel>
          <ClosePanel src={close} alt='close' onClick={(clickOnClose)} />
          {children}
        </Panel>}
      </>
  )
}

export default RightPanel;