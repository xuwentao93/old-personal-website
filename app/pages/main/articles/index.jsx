import React from 'react'
import './index.less'
import test from '@/assets/main/recommond/test.jpg'

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

const articleList = [
  {
    title: '这是一篇关于技术的文章',
    img: test,
    text: '积分卡死啦荆防颗粒时代峻峰考虑到时间啊 const hello world abs what where when... fdasfd fdfd asd f',
    type: '技术',
    watch: 1,
    thumbsUp: 0,
    time: '2019-01-01'
  },
  {
    title: '这是一篇关于生活的文章',
    img: undefined,
    text: '积分卡死啦荆防颗粒时代峻峰考虑到时间啊 const hello world abs what where when... fdasfd fdfd asd f',
    type: '生活',
    watch: 1,
    thumbsUp: 0,
    time: '2019-05-02'
  },
  {
    title: '这是一篇关于游戏的文章',
    img: undefined,
    text: '积分卡死啦荆防颗粒时代峻峰考虑到时间啊 const hello world abs what where when... fdasfd fdfd asd f',
    type: '游戏',
    watch: 1,
    thumbsUp: 0,
    time: '2019-02-01'
  },
  {
    title: '这是一篇关于技术的文章',
    img: undefined,
    text: '积分卡死啦荆防颗粒时代峻峰考虑到时间啊 const hello world abs what where when... fdasfd fdfd asd f',
    type: '技术',
    watch: 1,
    thumbsUp: 0,
    time: '2019-01-05'
  },
  {
    title: '这是一篇关于技术的文章',
    img: undefined,
    text: '积分卡死啦荆防颗粒时代峻峰考虑到时间啊 const hello world abs what where when... fdasfd fdfd asd f',
    type: '技术',
    watch: 1,
    thumbsUp: 0,
    time: '2019-01-06'
  }
]

export default function Articles() {
  return (
    <div className="articles">
      <div className="menu-list">
        <ul className="type-list">
          {
            types.map((type) => (
              <li key={type.type} type={type.type} className="article-type">{ type.label }</li>
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
              <h3>
                <span className="type">{ article.type }</span>
                <span className="title">{ article.title }</span>
              </h3>
              { article.img && <img src={article.img} alt="can't find img" className="article-img" /> }
              <div className="text">{ article.text }</div>
              <div className="brief">
                <span>{ article.time }</span>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
