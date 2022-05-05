import {StadiumContainer} from './container/StadiumContainer'
import { DappContainer } from './container/DappContainer';
import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      Hello
      <DappContainer>
          <StadiumContainer/>
      </DappContainer>
    </Provider>
  );
}

export default App;
