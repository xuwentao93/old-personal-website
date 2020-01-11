import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../pages/home'

const routes = [
  {
    component: Home,
    name: 'home',
    path: '/',
    exact: true
  }
]
export default function App() {
  return (
    <Router>
      <Switch>
        {
          routes.map((route) => (
            <Route exact={route.exact} component={route.component} key={route.name} />
          ))
        }
      </Switch>
    </Router>
  )
}
