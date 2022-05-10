import { useSelector } from 'react-redux';
import GlobalStyleReset from './components/GlobalStyleReset';
import Header from './components/Header';
import RightPanel from './components/RightPanel';
import StadiumContainer from './components/StadiumContainer';

const App = () => {
  const rightPanelIsOpen = useSelector((state) => state.rightPanel.isOpen);

  return (
    <>
      <GlobalStyleReset />
      <Header />
      <StadiumContainer/>
      {rightPanelIsOpen === true ? (<RightPanel />) : ''}
    </>
  );
}

export default App;
