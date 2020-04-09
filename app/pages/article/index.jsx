import React, { useState, useEffect } from 'react';
import './index.less';
import { useParams } from 'react-router-dom';
import { readArticle } from '@/api/article';
// eslint-disable-next-line import/no-unresolved
import View from '@/components/view';

export default function Article() {
  const [article, setArticle] = useState();
  let { id } = useParams();
  const methods = {
    readArticle() {
      readArticle({
        article: id
      })
        .then((res) => {
          console.log(res);
          setArticle(res.data.article);
        })
        .catch((err) => console.log('err comes from readArticle api:' + err));
    }
  };
  useEffect(() => {
    methods.readArticle();
  }, []);

  return (
    <View text={article} />
  );
}
