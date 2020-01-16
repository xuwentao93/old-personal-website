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
        <Route path="/main" exact component={Main} />
        { renderRoutes(routes) }
      </Switch>
      <Footer />
    </>
  )
}

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
  routes: PropTypes.array.isRequired
}
