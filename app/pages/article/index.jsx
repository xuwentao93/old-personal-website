import React, { useState, useEffect } from 'react';
import './index.less';
import { useParams } from 'react-router-dom';
import { readArticle } from '@/api/article';
// eslint-disable-next-line import/no-unresolved
import View from '@/components/view';

export default function Article() {
  const [article, setArticle] = useState('');
  const [title, setTitle] = useState('');
  let { id } = useParams();
  const methods = {
    readArticle() {
      readArticle({
        article: id
      })
        .then((res) => {
          console.log(res);
          setArticle(res.data.article);
          setTitle(res.data.title);
        })
        .catch((err) => console.log('err comes from readArticle api:' + err));
    }
  };
  useEffect(() => {
    methods.readArticle();
  }, []);

  return (
    <div className="article-page">
      <div className="article-left"></div>
      <article className="article-center">
        <h1 className="article-title">{ title }</h1>
        <View text={article} />
      </article>
    </div>
  );
}
