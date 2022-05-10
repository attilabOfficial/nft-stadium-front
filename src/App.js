import { useSelector } from 'react-redux';
import GlobalStyleReset from './components/GlobalStyleReset';
import Header from './components/Header';
import RightPanel from './components/RightPanel';
import StadiumContainer from './components/StadiumContainer';
import { DappContainer } from './container/DappContainer';
import store from './store'
import { Provider } from 'react-redux'

const App = () => {
  const rightPanelIsOpen = useSelector((state) => state.rightPanel.isOpen);


  return (
    <>
      <GlobalStyleReset />
      <Header />
      <Provider store={store}>
      <DappContainer>
          <StadiumContainer/>
      </DappContainer>
      </Provider>
      {rightPanelIsOpen === true ? (<RightPanel />) : ''}
    </>
    
  );
}

export default App;
