import React from 'react'
import { HashRouter as Router, Switch } from 'react-router-dom'
import Home from '../pages/home'
import Main from '../pages/main'
import Article from '../pages/article'
import NotFind from '../pages/404'
import { renderRoutes } from '../utils/route'

console.log(process)

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
