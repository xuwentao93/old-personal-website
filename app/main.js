import React from 'react';
import { render } from 'react-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'antd/dist/antd.css';
import './styles/index.css';
import App from './router';

render(
  <App />,
  document.getElementById('root')
);
