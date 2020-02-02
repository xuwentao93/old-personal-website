import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './index.less'
import { getArticleMsg } from '@/api/article'

export default function Recently() {
  const [articleList, setArticleList] = useState([])
  useEffect(() => {
    getArticleMsg({
      type: 'all'
    })
      .then((res) => {
        setArticleList(res.data.result)
      })
      .catch((err) => console.log('err comes from getArticleMsg api: ' + err))
  }, [])
  return (
    <div className="recently">
      <h3 className="title">近期文章</h3>
      <ul className="article-list">
        {
          articleList.map((article) => (
            <li className="recently-article-link" key={article.to}>
              <h3><Link to={article.to} className="recently-article-title">{ article.title }</Link></h3>
              <div className="recently-article-text">{ article.text }</div>
              <div className="recently-article-brief">
                <span className="recently-article-type">{ article.label }</span>
                <span className="recently-article-time">{ article.time }</span>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
