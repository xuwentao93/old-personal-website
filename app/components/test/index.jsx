/* eslint-disable no-shadow */
import React from 'react';

// eslint-disable-next-line react/prop-types
function Test() {
  return (
    <div>1</div>
  );
}

function HighOC(Component) {
  return (
    <>
      <div>this is a title bar</div>
      <Component />
      <div>this is tab bar</div>
    </>
  );
}

export default () => HighOC(Test);
