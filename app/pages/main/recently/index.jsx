import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.less';
import { getArticleMsg } from '@/api/article';

function toggleType(type) {
  switch (type) {
    case 'frontend':
      return '前端';
    case 'network':
      return '网络';
    case 'algorithm':
      return '算法';
    case 'life':
      return '生活';
    case 'other':
      return '其他';
    default:
      throw new Error('you get a wrong error from toggleType function');
  }
}

export default function Recently() {
  const [articleList, setArticleList] = useState([]);
  useEffect(() => {
    getArticleMsg({
      current: true
    })
      .then((res) => {
        setArticleList(res.data.articleList);
      })
      .catch((err) => console.log('err comes from getArticleMsg api: ' + err));
  }, []);
  return (
    <div className="recently">
      <h3 className="title">近期文章</h3>
      <ul className="article-list">
        {
          articleList.map((article) => (
            <li className="recently-article-link" key={article.url}>
              <h3><Link to={`article${article.url}`} className="recently-article-title">{ article.title }</Link></h3>
              <div className="recently-article-text">{ article.text }</div>
              <div className="recently-article-brief">
                <span className="recently-article-type">{ toggleType(article.type) }</span>
                <span className="recently-article-time">{ article.time }</span>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
