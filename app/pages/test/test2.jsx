/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

export default function Testa() {
  const methods = {
    local() {
      localStorage.setItem('a', '1');
      localStorage.setItem('a', 'set successful');
      console.log(localStorage.getItem('a'));
    }
  };
  return (
    <>
      <div className="testa">testb</div>
      <div onClick={methods.local}>change localstorage</div>
    </>
  );
}
