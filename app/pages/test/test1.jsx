/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './common.less';

let a = localStorage.getItem('a');
console.log(a);

export default function Testa() {
  const [test, setTest] = useState('initial');
  // eslint-disable-next-line func-names
  window.onstorage = function (e) {
    console.log(e);
    setTest('changed!');
  };
  return (
    <>
      <Link to="/testb" target="_blank" className="testa">1233</Link>
      <div>{ a }</div>
      <div>{ test }</div>
      <button onClick={() => localStorage.clear()}>clear localStorage</button>
    </>
  );
}
