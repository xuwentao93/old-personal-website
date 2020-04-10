import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from '../pages/home';
import Main from '../pages/main';
import Article from '../pages/article';
import NotFind from '../pages/404';
// eslint-disable-next-line import/no-unresolved
import Test from '@/components/test';
// eslint-disable-next-line import/no-unresolved
import Editor from '@/pages/editor';
import { renderRoutes } from '@/utils/route';
import './index.less';

const routes = [
  {
    component: Home,
    path: '/',
    name: 'home',
    exact: true
  },
  {
    component: Main,
    path: '/main',
    name: 'main',
    routes: [
      {
        component: Article,
        name: 'article',
        path: '/main/article/:id'
      }
    ]
  },
  {
    component: Test,
    path: '/test',
    name: 'test'
  },
  {
    component: Editor,
    name: 'editor',
    path: '/editor'
  },
  {
    component: NotFind,
    path: '*',
    name: '404'
  }
];

export default function App() {
  return (
    <Router>
      <Switch>
        { renderRoutes(routes) }
      </Switch>
    </Router>
  );
}
