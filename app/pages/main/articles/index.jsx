/* eslint-disable func-names */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import { Button } from 'antd';
import './pc.less';
import './mobile.less';
// import 'antd/es/button/style/css';
import { getArticleMsgApi } from '@/models/actions/getArticles';
// eslint-disable-next-line import/no-unresolved
// import Input from '@/components/Input';
import { ARTICLE_TYPE_HOVER, TYPES, TYPE_TOGGLE } from './constant';

// eslint-disable-next-line object-curly-newline
function Articles({ typeArticleApi }) {
  let history = useHistory();
  const [articleList, setArticleList] = useState([]);
  const [articleTypeHoverList, setArticleTypeHoverList] = useState(TYPES.map((type, index) => {
    if (index === 0) return ARTICLE_TYPE_HOVER;
    return undefined;
  }));

  // const [articleNameValue, setArticleNameValue] = useState('');
  const methods = {
    setType(index) { // 根据类型选择文章列表.
      console.log(articleList);
      const copyList = TYPES.map(() => undefined);
      copyList[index] = ARTICLE_TYPE_HOVER;
      setArticleTypeHoverList(copyList);
      (async function () {
        const currentTypeArticleList = await typeArticleApi(TYPES[index].type);
        await setArticleList(currentTypeArticleList);
        // console.log(typeArticleList);
      }());
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
    }
  };
  useEffect(() => {
    (async function () {
      const renderArticleList = await typeArticleApi('all');
      setArticleList(renderArticleList);
    }());
  }, []);

  return (
    <div className="articles">
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
    </div>
  );
}

const getArticleList = (state) => {
  const { typeArticleList } = state;
  // console.log(state);
  return { typeArticleList };
};

const setArticleList = (dispatch) => ({
  typeArticleApi: (type) => dispatch(getArticleMsgApi({ type }))
});

Articles.propTypes = {
  typeArticleApi: PropTypes.func.isRequired
};

export default (connect(getArticleList, setArticleList))(Articles);
