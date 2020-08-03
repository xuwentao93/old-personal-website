/* eslint-disable func-names */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Pagination } from 'antd';
import './index.less';
import { getTypeArticle } from '@/api/article';
// eslint-disable-next-line import/no-unresolved
// import Input from '@/components/Input';
import { ARTICLE_TYPE_HOVER, TYPES, TYPE_TOGGLE } from './constant';

// eslint-disable-next-line object-curly-newline
function Articles() {
  let history = useHistory();
  const [articleList, setArticleList] = useState([]);
  const [count, setCount] = useState(0);
  const [articleType, setArticleType] = useState('all');
  const [articleTypeHoverList, setArticleTypeHoverList] = useState(TYPES.map((type, index) => {
    if (index === 0) return ARTICLE_TYPE_HOVER;
    return undefined;
  }));

  // const [articleNameValue, setArticleNameValue] = useState('');
  const methods = {
    setType(index) { // 根据类型选择文章列表.
      const copyList = TYPES.map(() => undefined);
      copyList[index] = ARTICLE_TYPE_HOVER;
      setArticleTypeHoverList(copyList);
      methods.getTypeArticle(TYPES[index].type, 1);
      setArticleType(TYPES[index].type);
    },
    // setArticleNameValue(event) { // input search function.
    //   setArticleNameValue(event.target.value);
    //   getArticleName({
    //     name: event.target.value
    //   })
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => console.log('err comes from getArticleName api:' + err));
    // },
    toArticle(url) {
      history.push(`/main/article/${url}`);
    },
    getTypeArticle(type, curPageIndex) {
      getTypeArticle({
        type,
        pageSize: 5,
        pageIndex: curPageIndex
      }).then((res) => {
        setArticleList(res.data.articleList);
        setCount(res.data.count);
      });
    },
    changePage(page) {
      methods.getTypeArticle(articleType, page);
    }
  };
  useEffect(() => {
    methods.getTypeArticle('all', 1);
  }, []);

  return (
    <div className="personal-articles-container">
      <div className="menu-list">
        <ul className="type-list">
          {
            TYPES.map((type, index) => (
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
        {/* <div className="search">
          <Input
            value={articleNameValue}
            onChange={methods.setArticleNameValue}
          />
        </div> */}
      </div>
      <ul className="article-list">
        {
          articleList.map((article) => (
            <li
              className="article"
              key={`${article.title}${article.time}`}
              onClick={() => methods.toArticle(article.url)}
            >
              { article.img && <img src={article.img} alt="can't find img" className="article-img" /> }
              <h3 className="article-navigator">
                <span className="type">{ TYPE_TOGGLE(article.type) }</span>
                <span className="type-circle">{ (article.subtype === 'undefined') ? '' : '·' }</span>
                <span className="subtype">{ (article.subtype === 'undefined') ? '' : article.subtype }</span>
                <span className="title">{ article.title }</span>
              </h3>
              <div className="text">{ article.text }</div>
              <div className="brief">
                <span className="time">
                  <i className="fa fa-clock-o"></i>
                  { article.time.slice(0, 10) }
                </span>
                <span className="article-evaluate">
                  <div className="comment">
                    <i className="fa fa-eye"></i>
                    <span className="number">{ article.watch }</span>
                  </div>
                  <div className="comment">
                    <img src="https://b-gold-cdn.xitu.io/v3/static/img/comment.4d5744f.svg" alt="can't find img" />
                    <span className="number">{ article.comment }</span>
                  </div>
                  <div className="comment">
                    <img src="https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg" alt="can't find img" />
                    <span className="number">{ article.thumbsup }</span>
                  </div>
                </span>
              </div>
            </li>
          ))
        }
      </ul>
      <Pagination total={count} pageSize={5} onChange={(page) => methods.changePage(page)} />
    </div>
  );
}

export default Articles;
