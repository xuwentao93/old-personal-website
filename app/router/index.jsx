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
<<<<<<< HEAD
        { renderRoutes(routes) }
=======
        {
          routes.map((route) => (
            <Route path={route.path} exact={route.exact} key={route.name}>
              <route.component routes={route.routes} />
            </Route>
          ))
        }
>>>>>>> adaaa175825da830c4a9ca866c48ef0169608f9e
      </Switch>
    </Router>
  )
}
