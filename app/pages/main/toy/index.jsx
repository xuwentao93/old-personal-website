import React from 'react';
import './index.less';
import { Link } from 'react-router-dom';
import editorImg from '@/assets/main/toy/editor.jpg';
import algorithmImg from '@/assets/main/toy/algorithm.jpg';

const toys = [
  {
    link: '/editor',
    img: editorImg,
    title: '文本编辑器'
  },
  {
    link: '/algorithm',
    img: algorithmImg,
    title: '算法统计'
  }
];

export default function Toy() {
  return (
    <div className="toy">
      {
        toys.map((toy) => (
          <div className="toy-container" key={toy.title}>
            <Link className="toy-link" to={toy.link} target="_blank">
              <span className="toy-title">{ toy.title }</span>
              <img className="toy-img" src={toy.img} alt="where is the img?" />
            </Link>
          </div>
        ))
      }
    </div>
  );
}
