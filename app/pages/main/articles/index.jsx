import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import './pc.less';
import './mobile.less';
// import 'antd/es/button/style/css';
import { getArticleMsgApi } from '@/models/actions/getArticles';
// import { getArticleName } from '@/api/article';
// eslint-disable-next-line import/no-unresolved
// import Input from '@/components/Input';
import { ARTICLETYPEHOVER, TYPES, TYPE_TOGGLE } from './constant';

// eslint-disable-next-line object-curly-newline
function Articles({ typeArticleList, typeArticleApi }) {
  let history = useHistory();
  const [articleList, setArticleList] = useState([]);
  const [articleTypeHoverList, setArticleTypeHoverList] = useState(TYPES.map((type, index) => {
    if (index === 0) return ARTICLETYPEHOVER;
    return undefined;
  }));

  // const [articleNameValue, setArticleNameValue] = useState('');
  const methods = {
    setType(index) { // 根据类型选择文章列表.
      const copyList = TYPES.map(() => undefined);
      copyList[index] = ARTICLETYPEHOVER;
      setArticleTypeHoverList(copyList);
      // eslint-disable-next-line func-names
      (async function () {
        await typeArticleApi(TYPES[index].type);
        await setArticleList(typeArticleList.data);
        // console.log(typeArticleList);
      }());
      // typeArticleApi(TYPES[index].type);
      // setArticleList(typeArticleList.data);
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
      history.push(`/article${url}`);
    },
    test() {
      setArticleList(typeArticleList.data);
    }
  };
  useEffect(() => {
    typeArticleApi('all');
    // setTimeout(() => setArticleList(typeArticleList.data), 2000);
  }, []);

  return (
    <div className="articles">
      <li className="test" onClick={methods.test}>123123123</li>
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
              <h3>
                <span className="type">{ TYPE_TOGGLE(article.type) }</span>
                <span className="title">{ article.title }</span>
              </h3>
              <div className="text">{ article.text }</div>
              <div className="brief">
                <span className="time">{ article.time.slice(0, 10) }</span>
                <span className="article-evaluate">
                  <Button onClick={methods.test}>
                    <i className="fa fa-eye" aria-hidden="true"></i>
                    <span className="number">{ article.watch }</span>
                  </Button>
                  <Button>
                    <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                    <span className="number">{ article.thumbsup }</span>
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
  // console.log(state);
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
