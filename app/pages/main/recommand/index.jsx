import React from 'react'
import './index.less'
import testImg from '@/assets/main/recommond/test.jpg'

export default function Recommond() {
  return (
    <div className="recommond">
      <h3 className="title">推荐文章</h3>
      <div className="recommond-img-container">
        <img src={testImg} alt="test img can't find." className="recommond-img" />
        <div className="img-shadow">这是一段测试文字</div>
      </div>
    </div>
  )
}
