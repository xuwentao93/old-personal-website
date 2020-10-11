import React from 'react';
import { Link } from 'react-router-dom';
import './pc.less';
import './mobile.less';
import mouse from '@/assets/main/mouse.png';

const list = [
  {
    label: '首页',
    to: '/main'
  },
  {
    label: '个人简介',
    to: '/brief'
  },
  {
    label: '日记',
    to: '/dict'
  },
  {
    label: '算法统计',
    to: '/algorithm'
  },
  {
    label: '文本编辑器',
    to: '/editor'
  }
];

export default function Navigator() {
  return (
    <header className="navigator">
      <img src={mouse} alt="no img" className="avatar" />
      <ul className="list">
        {
          list.map((item) => (
            <li key={item.label}><Link to={item.to} className="item">{item.label}</Link></li>
          ))
        }
      </ul>
    </header>
  );
}
