import React from 'react'
import { Link } from 'react-router-dom'
import './index.less'

const recentlyArticleList = [
  {
    to: 'first-test',
    title: '前端入门教程',
    text: 'this is a very very very very long text...',
    type: '前端',
    time: '2020-01-01'
  },
  {
    to: 'second-test',
    title: 'javascript 进阶教程',
    text: 'this is a very very very very long text...',
    type: '前端',
    time: '2020-01-01'
  },
  {
    to: 'third-test',
    title: '最新 ES2020 语法!',
    text: 'this is a very very very very very very very very long text...',
    type: '前端',
    time: '2020-01-01'
  },
  {
    to: 'fourth-test',
    title: '最新 ES2020 语法!123',
    text: 'this is a very very very very long text...',
    type: '生活',
    time: '2020-01-01'
  },
  {
    to: 'fifth-test',
    title: '最新 ES2020 语法!333ff',
    text: 'this is a very very very very long text...',
    type: '日记',
    time: '2020-01-01'
  }
]

export default function Recently() {
  return (
    <div className="recently">
      <h3 className="title">近期文章</h3>
      <ul className="article-list">
        {
          recentlyArticleList.map((article) => (
            <li className="recently-article-link" key={article.to}>
              <h3><Link to={article.to} className="recently-article-title">{ article.title }</Link></h3>
              <div className="recently-article-text">{ article.text }</div>
              <div className="recently-article-brief">
                <span className="recently-article-type">{ article.type }</span>
                <span className="recently-article-time">{ article.time }</span>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
