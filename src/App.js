import { useSelector } from 'react-redux';
import GlobalStyleReset from './components/GlobalStyleReset';
import Header from './components/Header';
import LeftPanel from './components/LeftPanel';
import { Loading } from './components/Loading';
import RightPanel from './components/RightPanel';
import { DappContainer } from './container/DappContainer';
import { StadiumContainer } from './container/StadiumContainer';
import { isMapLoadingSelector } from './store/mapInfoSlice';
import { isLeftPanelOpenSelector } from './store/NFTByOwnerSlice';
import { isRightPanelOpenSelector } from './store/NFTDetailSlice';


const App = () => {
  const leftPanelIsOpen = useSelector((state) => isLeftPanelOpenSelector(state));
  const loading = useSelector((state) => isMapLoadingSelector(state));
  const rightPanelIsOpen = useSelector((state) => isRightPanelOpenSelector(state));
  
  return (
    <>
      <GlobalStyleReset />
      <DappContainer>
        <Header />
        <StadiumContainer />
        {loading === 'loading' && <Loading />}
        {rightPanelIsOpen === true ? (<RightPanel />) : ''}
        {leftPanelIsOpen === true ? (<LeftPanel />) : ''}
      </DappContainer>
    </>
    
  );
}

export default App;
