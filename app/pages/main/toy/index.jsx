import React from 'react';
import './index.less';
import editorImg from '@/assets/main/toy/editor.jpg';

const toys = [
  {
    link: 'https://www.baidu.com',
    img: editorImg,
    title: '文本编辑器'
  }
];


export default function Toy() {
  return (
    <div className="toy">
      {
        toys.map((toy) => (
          <div className="toy-container" key={toy.title}>
            <a className="toy-link" href={toy.link}>{ toy.title }</a>
            <img className="toy-img" src={toy.img} alt="where is the img?" />
          </div>
        ))
      }
    </div>
  );
}
