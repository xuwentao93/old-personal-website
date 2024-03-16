import React from 'react';
import { createRoot } from 'react-dom/client';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'antd/dist/antd.css';
import './styles/index.css';
import App from './router';

if (module.hot) {
  module.hot.accept();
}

const root = createRoot(document.getElementById('root'));

root.render(<App />);
