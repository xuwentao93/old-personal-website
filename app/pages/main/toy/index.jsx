import React from 'react';
import './index.less';
import { Link } from 'react-router-dom';
import editorImg from '@/assets/main/toy/editor.jpg';

const toys = [
  {
    link: '/editor',
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
            <Link className="toy-link" to={toy.link} target="_blank">{ toy.title }</Link>
            <img className="toy-img" src={toy.img} alt="where is the img?" />
          </div>
        ))
      }
    </div>
  );
}
