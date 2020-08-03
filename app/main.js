import React from 'react';
import { render } from 'react-dom';
// import Editor from 'wt-personal-editor'
import 'antd/dist/antd.css';
import './styles/index.css';
import App from './router';

render(
  <App />,
  document.getElementById('root')
);
