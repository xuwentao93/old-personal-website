import React from 'react';
import './index.less';

const listMap = ['first', 'second', 'third', 'fourth'];

// const ws = new WebSocket('ws://localhost:3000/test')
// // 响应onmessage事件:
// ws.onmessage = (msg) => console.log(msg)
// // 给服务器发送一个字符串:
// if (ws.readyState === 1) {
//   ws.send('Hello!')
// } else {
//   console.log('readyState is: ' + ws.readyState)
// }

export default function Test() {
  return (
    <div>
      <div className="test">this is a test div.</div>
      <article className="test-article">this is a line about article.</article>
      <div className="father">
        <div>this is child div(has father)</div>
      </div>
      {
        listMap.map((list, index) => (
          <div className={`list-${index}`} key={list}>{ list }</div>
        ))
      }
      <div className="media">test media.</div>
    </div>
  );
}
