import React from 'react';
import ReactDOM from 'react-dom/client';
import {store} from './store/index';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';

export const MOCK = true;
export const NBR_COL = 25;
export const NBR_ROW = 17;
export const TOTAL_CELLS = NBR_COL * NBR_ROW;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
