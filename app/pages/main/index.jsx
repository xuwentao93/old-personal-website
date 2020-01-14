import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import './index.less'
import Navigator from './navigator'
import Article from '../article'

export default function Main({ routes }) {
  console.log(routes)
  return (
    <>
      <Navigator />
      <div className="block" />
      <Switch>
        {/* {
          routes.map((route) => (
            <Route path={route.path} exact={route.exact} key={route.name}>
              <route.component routes={route.routes} />
            </Route>
          ))
        } */}
        <Route path="/main/article" component={Article} />
      </Switch>
    </>
  )
}

Main.propTypes = {
  routes: PropTypes.array.isRequired
}
