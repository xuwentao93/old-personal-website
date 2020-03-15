import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import './pc.less';
import './mobile.less';
// import 'antd/es/button/style/css';
import { getArticleMsgApi } from '@/models/actions/getArticles';
// import { getArticleName } from '@/api/article';
// eslint-disable-next-line import/no-unresolved
// import Input from '@/components/Input';


const articleTypeHover = 'article-type-hover';
const types = [
  {
    type: 'all',
    label: '全部',
    hover: articleTypeHover
  },
  {
    type: 'frontend',
    label: '前端',
    hover: undefined
  },
  {
    type: 'algorithm',
    label: '算法',
    hover: undefined
  },
  {
    type: 'network',
    label: '网络',
    hover: undefined
  },
  {
    type: 'life',
    label: '生活',
    hover: undefined
  },
  {
    type: 'other',
    label: '其它',
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
  // const [articleNameValue, setArticleNameValue] = useState('');
  const methods = {
    setType(index) { // 根据类型选择文章列表.
      const copyList = types.map(() => undefined);
      copyList[index] = articleTypeHover;
      setArticleTypeHoverList(copyList);
      // eslint-disable-next-line func-names
      (async function () {
        await typeArticleApi(types[index].type);
        await setArticleList(typeArticleList.data);
        console.log(typeArticleList);
      }());
      // typeArticleApi(types[index].type);
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
                  <Button onClick={methods.test}>
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
