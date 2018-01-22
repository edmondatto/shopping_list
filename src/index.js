import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ItemReducer from "./reducers/reducer";
import {createStore} from "redux";
import Provider from "react-redux/es/components/Provider";

const store = createStore(
  ItemReducer,
  window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
