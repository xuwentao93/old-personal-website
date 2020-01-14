import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './index.less'
import koala from '../../assets/home/koala.jpg'
import panda from '../../assets/home/panda.jpg'
import puppy from '../../assets/home/puppy.jpg'
import kitty from '../../assets/home/kitty.jpg'
import sheeps from '../../assets/home/sheeps.jpg'
import alpaca from '../../assets/home/alpaca.jpg'

let index = 1
const imgList = [alpaca, koala, panda, puppy, sheeps, kitty]

export default function Home() {
  const home = useRef()
  useEffect(() => {
    const { style } = home.current
    style.backgroundImage = `url(${imgList[0]})`
    setInterval(() => {
      style.backgroundImage = `url(${imgList[index++]})`
      if (index === 6) index = 0 // pay attention there! Index is not 5!!!
    }, 5000)
  })
  return (
    <div className="home" ref={home}>
      <div className="personal-profile">
        <h2 className="title">徐文韬的个人网站</h2>
        <h3 className="title-en">Xu Wentao's personal website</h3>
        <p className="column"><Link to="/main">个人博客 (personal blog)</Link></p>
        <p className="column"><Link to="/brief">个人简介 (personal profile)</Link></p>
        <p className="column">
          <a
            href="https://www.github.com/xuwentao93"
            target="_blank"
            rel="noreferrer noopener"
            title="www.github.com/xuwentao93"
          >
            <img src="https://github.githubassets.com/pinned-octocat.svg" alt="my github" className="icon" />
          </a>
          <a
            href="mailto:a15157756529@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
            title="a15157756529@gmail.com"
          >
            <img
              src="https://ssl.gstatic.com/ui/v1/icons/mail/images/favicon5.ico"
              alt="my gmail"
              className="icon"
            />
          </a>
          <a
            href="https://juejin.im/user/5da17f266fb9a04dde146c5d"
            target="_blank"
            rel="noreferrer noopener"
            title="juejin/piedaochuan1234"
          >
            <img
              src="https://b-gold-cdn.xitu.io/favicons/v2/apple-touch-icon.png"
              alt="my juejin homepage"
              className="icon"
            />
          </a>
          <a
            href="https://weibo.com/u/6208673764/home?wvr=5&sudaref=graph.qq.com"
            target="_blank"
            rel="noreferrer noopener"
            title="sina/文韬武略"
          >
            <img
              src="https://www.weibo.com/favicon.ico"
              alt="my sina homepage"
              className="icon"
            />
          </a>
        </p>
      </div>
    </div>
  )
}
