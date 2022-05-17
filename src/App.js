import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import GlobalStyleReset from './components/GlobalStyleReset';
import Header from './components/Header';
import { Loading } from './components/Loading';
import RightPanel from './components/RightPanel';
import { DappContainer } from './container/DappContainer';
import { StadiumContainer } from './container/StadiumContainer';
import {isRightPanelOpenSelector} from './store/NFTDetailSlice'


const App = () => {
  const rightPanelIsOpen = useSelector((state) => isRightPanelOpenSelector(state));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <GlobalStyleReset />
      
      {loading ? <Loading /> :
      <>
        <GlobalStyleReset />
        <Header />
        <DappContainer>
            <StadiumContainer/>
        </DappContainer>
        {rightPanelIsOpen === true ? (<RightPanel />) : ''}
      </>}
      
    </>
    
  );
}

export default App;
