/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import './pc.less';
import './mobile.less';
import 'antd/es/button/style/css';
import { getArticleMsg, getArticleName } from '@/api/article';
// eslint-disable-next-line import/no-unresolved
import Input from '@/components/Input';

const articleTypeHover = 'article-type-hover';
const types = [
  {
    type: 'all',
    label: '全部',
    hover: articleTypeHover
  },
  {
    type: 'tech',
    label: '技术',
    hover: undefined
  },
  {
    type: 'game',
    label: '游戏',
    hover: undefined
  },
  {
    type: 'life',
    label: '生活',
    hover: undefined
  }
];

export default function Articles() {
  const [articleList, setArticleList] = useState([]);
  const [articleTypeHoverList, setArticleTypeHoverList] = useState(types.map((type, index) => {
    if (index === 0) return articleTypeHover;
    return undefined;
  }));
  const [articleNameValue, setArticleNameValue] = useState('');
  const methods = {
    setType(index) { // 根据类型选择文章列表.
      const copyList = types.map(() => undefined);
      copyList[index] = articleTypeHover;
      setArticleTypeHoverList(copyList);
      getArticleMsg({
        type: types[index].type
      })
        .then((res) => {
          setArticleList(res.data.result);
        })
        .catch((err) => console.log('err comes from getArticleMsg api: ' + err));
    },
    setArticleNameValue(event) {
      setArticleNameValue(event.target.value);
      getArticleName({
        name: event.target.value
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log('err comes from getArticleName api:' + err));
    }
  };
  useEffect(() => {
    getArticleMsg({
      type: 'all'
    })
      .then((res) => {
        setArticleList(res.data.result);
      })
      .catch((err) => console.log('err comes from getArticleMsg api: ' + err));
  }, []);

  return (
    <div className="articles">
      <div className="menu-list">
        <ul className="type-list">
          {
            types.map((type, index) => (
              <li
                key={type.type}
                type={type.type}
                className={`article-type ${articleTypeHoverList[index]}`}
                onClick={() => methods.setType(index)}
              >
                { type.label }
              </li>
            ))
          }
        </ul>
        <div className="search">
          <Input
            value={articleNameValue}
            onChange={methods.setArticleNameValue}
          />
        </div>
      </div>
      <ul className="article-list">
        {
          articleList.map((article) => (
            <li className="article" key={`${article.title}${article.time}`}>
              { article.img && <img src={article.img} alt="can't find img" className="article-img" /> }
              <h3>
                <span className="type">{ article.label }</span>
                <span className="title">{ article.title }</span>
              </h3>
              <div className="text">{ article.text }</div>
              <div className="brief">
                <span className="time">{ article.time }</span>
                <span className="article-evaluate">
                  <Button>
                    <i className="fa fa-eye" aria-hidden="true"></i>
                    <span className="number">{ article.views }</span>
                  </Button>
                  <Button>
                    <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                    <span className="number">{ article.thumbsUp }</span>
                  </Button>
                </span>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
