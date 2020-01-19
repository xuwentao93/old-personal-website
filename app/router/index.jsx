import React from 'react'
import { HashRouter as Router, Switch } from 'react-router-dom'
import Home from '../pages/home'
import Main from '../pages/main'
import Article from '../pages/article'
import NotFind from '../pages/404'
import { renderRoutes } from '@/utils/route'
import './index.less'

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
        path: '/main/article'
      }
    ]
  },
  {
    component: Test,
    path: '/test',
    name: 'test'
  },
  {
    component: NotFind,
    path: '*',
    name: '404'
  }
]
export default function App() {
  return (
    <Router>
      <Switch>
        { renderRoutes(routes) }
      </Switch>
    </Router>
  )
}

const listMap = ['first', 'second', 'third', 'fourth']

function Test() {
  return (
    <div>
      <div className="test">this is a test div.</div>
      <article className="test-article">this is a line about article.</article>
      <div className="father">
        <div className="child">this is child div(has father)</div>
      </div>
      {
        listMap.map((list, index) => (
          <div className={`list-${index}`} key={list}>{ list }</div>
        ))
      }
      <div className="media">test media.</div>
    </div>
  )
}
