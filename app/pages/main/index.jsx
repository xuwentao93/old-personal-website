import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import './index.less'
import Navigator from './navigator'
import Footer from './footer'
import Toy from './toy'
import Situation from './situation'
import Articles from './articles'
import Recommond from './recommand'
import Recently from './recently'
import { renderRoutes } from '../../utils/route'

export default function Container({ routes }) {
  console.log(routes)
  return (
    <>
      <Navigator />
      <div className="block" />
      <Switch>
<<<<<<< HEAD
        <Route path="/main" exact component={Main} />
        { renderRoutes(routes) }
      </Switch>
      <Footer />
=======
        {/* {
          routes.map((route) => (
            <Route path={route.path} exact={route.exact} key={route.name}>
              <route.component routes={route.routes} />
            </Route>
          ))
        } */}
        <Route path="/main/article" component={Article} />
      </Switch>
>>>>>>> adaaa175825da830c4a9ca866c48ef0169608f9e
    </>
  )
}

<<<<<<< HEAD
function Main() {
  return (
    <div className="main">
      <div className="left">
        <Toy />
      </div>
      <div className="center">
        <Situation />
        <Articles />
      </div>
      <div className="right">
        <Recommond />
        <Recently />
      </div>
    </div>
  )
}

Container.propTypes = {
=======
Main.propTypes = {
>>>>>>> adaaa175825da830c4a9ca866c48ef0169608f9e
  routes: PropTypes.array.isRequired
}
