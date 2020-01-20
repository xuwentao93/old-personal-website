import React from 'react'
import './index.less'

const types = [
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
  },
  {
    type: 'all',
    label: '全部'
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
    </div>
  )
}
