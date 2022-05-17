import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import GlobalStyleReset from './components/GlobalStyleReset';
import Header from './components/Header';
import LeftPanel from './components/LeftPanel';
import { Loading } from './components/Loading';
import RightPanel from './components/RightPanel';
import { DappContainer } from './container/DappContainer';
import { StadiumContainer } from './container/StadiumContainer';


const App = () => {
  const rightPanelIsOpen = useSelector((state) => state.rightPanel.isOpen);
  const leftPanelIsOpen = useSelector((state) => state.leftPanel.isOpen)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <GlobalStyleReset />
      <Header />
      <DappContainer>
          <StadiumContainer/>
      </DappContainer>
      {rightPanelIsOpen === true ? (<RightPanel />) : ''}
      {leftPanelIsOpen === true ? (<LeftPanel />) : ''}
    </>
    
  );
}

export default App;
