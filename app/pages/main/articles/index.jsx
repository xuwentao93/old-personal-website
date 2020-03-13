import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import './pc.less';
import './mobile.less';
// import 'antd/es/button/style/css';
import { getArticleMsgApi } from '@/models/actions/getArticles';
import { getArticleName } from '@/api/article';
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

// eslint-disable-next-line object-curly-newline
function Articles({ typeArticleList, typeArticleApi }) {
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
      // getArticleMsg({
      //   type: types[index].type
      // })
      //   .then((res) => {
      //     setArticleList(res.data.result);
      //   })
      //   .catch((err) => console.log('err comes from getArticleMsg api: ' + err));
      typeArticleApi(types[index].type);
      setArticleList(typeArticleList);
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
    typeArticleApi('all');
    console.log(typeArticleList);
    setArticleList(typeArticleList);
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

const getArticleList = (state) => {
  const { typeArticleList } = state;
  console.log(state);
  return { typeArticleList };
};

const setArticleList = (dispatch) => ({
  typeArticleApi: (type) => dispatch(getArticleMsgApi({ type }))
});

Articles.propTypes = {
  typeArticleList: PropTypes.object.isRequired,
  typeArticleApi: PropTypes.func.isRequired
};

export default (connect(getArticleList, setArticleList))(Articles);
