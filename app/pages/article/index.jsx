/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import './index.less';
import { useParams } from 'react-router-dom';
import { readArticle, likeArticle } from '@/api/article';
// eslint-disable-next-line import/no-unresolved
import View from '@/components/view';
// eslint-disable-next-line import/no-unresolved
import { IF_LIKE } from '@/config/localStorage';

export default function Article() {
  const [articleMsg, setArticleMsg] = useState({
    article: '',
    thumbsup: '',
    title: '',
    time: '',
    type: '',
    subtype: ''
  });
  const [ifDark, setIfDark] = useState(false);
  const [ifLike, setIfLike] = useState(localStorage.getItem(IF_LIKE) === 'like');
  console.log(localStorage.getItem(IF_LIKE));
  // const [article, setArticle] = useState('');
  // const [title, setTitle] = useState('');
  // const [thumbsup, setThumbsup] = useState('');
  // const [isLiked, setIsLiked] = useState(false);
  let { id } = useParams();
  const methods = {
    readArticle() {
      readArticle({
        article: id
      })
        .then((res) => {
          console.log(res);
          const { data } = res;
          setArticleMsg({
            ...articleMsg,
            ...data
          });
        })
        .catch((err) => console.log('err comes from readArticle api:' + err));
    },
    likeArticle() {
      const curType = localStorage.getItem(IF_LIKE);
      if (ifLike) setArticleMsg({ ...articleMsg, thumbsup: articleMsg.thumbsup + 1 });
      else setArticleMsg({ ...articleMsg, thumbsup: articleMsg.thumbsup - 1 });
      likeArticle({
        type: curType || 'like',
        url: id
      }).then(() => {
        console.log(curType);
        localStorage.setItem(IF_LIKE, curType === 'like' ? 'dislike' : 'like');
        setIfLike(curType !== 'like');
      });
    }
  };
  useEffect(() => {
    methods.readArticle();
  }, []);

  return (
    <div
      className="personal-article-container"
      style={{ backgroundColor: ifDark ? '#333' : '#f4f5f5', color: ifDark ? '#ccc' : '#333' }}
    >
      <div className="article-left">
        <div className="operate-list">
          <div className="icon-container" onClick={methods.likeArticle}>
            <img
              src={ifLike
                ? 'https://b-gold-cdn.xitu.io/v3/static/img/zan-active.337b9a0.svg'
                : 'https://b-gold-cdn.xitu.io/v3/static/img/zan.b4bb964.svg'}
              alt="can't find img"
              className="image"
            />
            <div className={`like-num ${ifLike ? 'like' : ''}`}>
              {articleMsg.thumbsup}
            </div>
          </div>
          <div
            className="icon-container"
            onClick={() => { setIfDark(!ifDark); }}
            style={{ color: ifDark ? '#333' : '#ffd700' }}
          >
            <i className="fa fa-sun-o" aria-hidden="true" />
          </div>
        </div>
      </div>
      <article
        className="article-center"
        style={{ backgroundColor: ifDark ? '#222' : '#fff', color: ifDark ? '#ccc' : '#333' }}
      >
        <h1 className="article-title" style={{ color: ifDark ? '#ccc' : '#333' }}>
          { articleMsg.title }
        </h1>
        <View
          text={articleMsg.article}
          style={{ backgroundColor: ifDark ? '#222' : '#fff', color: ifDark ? '#ccc' : '#333' }}
        />
      </article>
    </div>
  );
}
