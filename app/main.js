import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import Editor from 'wt-personal-editor'
import './styles/index.css';
import 'antd/dist/antd.css';
import App from './router';
import configureStore from './models';

let store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
