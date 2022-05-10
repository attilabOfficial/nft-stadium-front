import { useSelector } from 'react-redux';
import GlobalStyleReset from './components/GlobalStyleReset';
import Header from './components/Header';
import RightPanel from './components/RightPanel';
import { DappContainer } from './container/DappContainer';
import { StadiumContainer } from './container/StadiumContainer';


const App = () => {
  const rightPanelIsOpen = useSelector((state) => state.rightPanel.isOpen);


  return (
    <>
      <GlobalStyleReset />
      <Header />
      <DappContainer>
          <StadiumContainer/>
      </DappContainer>
      {rightPanelIsOpen === true ? (<RightPanel />) : ''}
    </>
    
  );
}

export default App;
