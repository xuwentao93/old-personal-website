import React from 'react'
import { Link } from 'react-router-dom'
import './index.less'

const recentlyArticleList = [
  {
    to: 'first-test',
    name: 'first'
  },
  {
    to: 'second-test',
    name: 'second'
  },
  {
    to: 'third-test',
    name: 'third'
  }
]

export default function Recently() {
  return (
    <div className="recently">
      <div className="title">近期文章</div>
      <ul className="title-list">
        {
          recentlyArticleList.map((article) => (
            <li><Link to={article.to}>{ article.name }</Link></li>
          ))
        }
      </ul>
    </div>
  )
}
