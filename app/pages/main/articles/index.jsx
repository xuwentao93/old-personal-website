import React, { useState, useEffect } from 'react'
import './index.less'
import { getArticleMsg } from '@/api/article'
// import test from '@/assets/main/recommond/test.jpg'

const types = [
  {
    type: 'all',
    label: '全部'
  },
  {
    type: 'tech',
    label: '技术'
  },
  {
    type: 'game',
    label: '游戏'
  },
  {
    type: 'life',
    label: '生活'
  }
]

const articleTypeHoverList = new Array(4).fill(undefined)
function tt() {
  console.log(1)
}
articleTypeHoverList[0] = 'article-type-hover'

export default function Articles() {
  const [articleList, setArticleList] = useState([])
  useEffect(() => {
    getArticleMsg()
      .then((res) => {
        setArticleList(res.data.result)
      })
      .catch((err) => console.log('err comes from getArticleMsg api: ' + err))
  }, [])

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
                onClick={tt}
              >
              </li>
            ))
          }
        </ul>
        <div className="search">
          <input type="text" />
        </div>
      </div>
      <ul className="article-list">
        {
          articleList.map((article) => (
            <li className="article" key={`${article.title}${article.time}`}>
              { article.img && <img src={article.img} alt="can't find img" className="article-img" /> }
              <h3>
                <span className="type">{ article.type }</span>
                <span className="title">{ article.title }</span>
              </h3>
              <div className="text">{ article.text }</div>
              <div className="brief">
                <span className="time">{ article.time }</span>
                <span className="article-evaluate">
                  <i className="fa fa-eye"></i>
                  <span className="number">{ article.views }</span>
                  <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                  <span className="number">{ article.thumbsUp }</span>
                </span>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
