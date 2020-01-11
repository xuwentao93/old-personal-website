import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './index.less'
import alpaca from '../../assets/home/alpaca.jpg'
import koala from '../../assets/home/koala.jpg'
import panda from '../../assets/home/panda.jpg'
import puppy from '../../assets/home/puppy.jpg'
import sheeps from '../../assets/home/sheeps.jpg'
import kitty from '../../assets/home/kitty.jpg'

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
        <p className="column">个人简介 (personal profile)</p>
        <p className="column">11</p>
      </div>
    </div>
  )
}
