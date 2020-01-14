import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../pages/home'
import Main from '../pages/main'
import Article from '../pages/article'
import NotFind from '../pages/404'


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
        {
          routes.map((route) => (
            <Route path={route.path} exact={route.exact} key={route.name}>
              <route.component routes={route.routes} />
            </Route>
          ))
        }
      </Switch>
    </Router>
  )
}
