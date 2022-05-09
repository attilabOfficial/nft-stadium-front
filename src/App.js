import GlobalStyleReset from './components/GlobalStyleReset';
import Header from './components/Header';
import StadiumContainer from './components/StadiumContainer';
import ZoomButtons from './components/ZoomButtons';

const App = () => {
  return (
    <>
      <GlobalStyleReset />
      <Header />
      <StadiumContainer/>
      <ZoomButtons/>
    </>
  );
}

export default App;
