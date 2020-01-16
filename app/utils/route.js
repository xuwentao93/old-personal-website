import React from 'react'
import { Route } from 'react-router-dom'

export function renderRoutes(routes) {
  return routes.map((route) => (
    <Route path={route.path} exact={route.exact} key={route.name}>
      <route.component routes={route.routes} />
    </Route>
  ))
}
