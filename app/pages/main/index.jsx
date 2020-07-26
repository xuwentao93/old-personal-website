import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { renderRoutes } from '@/utils/route';
import './pc.less';
import './mobile.less';
import Navigator from './navigator';
import Footer from './footer';
import Toy from './toy';
import Situation from './situation';
import Articles from './articles';
import Recommond from './recommand';
import Recently from './recently';

export default function Container({ routes }) {
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
  );
}

function Main() {
  const width = window.innerWidth;
  if (width > 700) {
    return (
      <div className="main">
        <div className="left">
          <Toy />
        </div>
        <div className="right">
          <Recommond />
          <Recently />
        </div>
        <div className="center">
          <Situation />
          <Articles />
        </div>
      </div>
    );
  }
  return (
    <div className="main">
      <Situation />
      <Recommond />
      <Recently />
      <Articles />
    </div>
  );
}

Container.propTypes = {
  routes: PropTypes.array.isRequired
};
