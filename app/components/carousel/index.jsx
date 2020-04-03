/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './index.less';

export default function Carousel(props) {
  const { imgList } = props;
  const [index, setIndex] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [autoPlay, setAutoPlay] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [showImg, setShowImg] = useState(Array(imgList.length).fill(-1));
  showImg[0] = 99;
  const methods = {
    next() {
      clearInterval(autoPlay);
      setAutoPlay(null);
      if (index === imgList.length - 1) {
        setIndex(0);
        showImg[0] = 99;
        showImg[imgList.length - 1] = -1;
      } else {
        showImg[index] = -1;
        showImg[index + 1] = 99;
        setIndex(index + 1);
      }
    },
    last() {
      clearInterval(autoPlay);
      setAutoPlay(null);
      if (index === 0) {
        setIndex(imgList.length - 1);
        showImg[0] = -1;
        showImg[imgList.length - 1] = 99;
      } else {
        showImg[index] = -1;
        showImg[index - 1] = 99;
        setIndex(index - 1);
      }
    },
    autoPlay() {
      setAutoPlay(setInterval(() => { // autoPlay 需要解决 setInterval 闭包引起的 state 无法实时更新.
        let indexState = -1;
        setIndex((currentIndex) => {
          indexState = currentIndex;
          return currentIndex;
        });
        if (indexState === imgList.length - 1) {
          setIndex(0);
          setShowImg((currentImg) => {
            currentImg[imgList.length - 1] = -1;
            currentImg[0] = 99;
            return currentImg;
          });
        } else {
          let currentImgNumber = NaN;
          setIndex((currentIndex) => {
            currentImgNumber = currentIndex + 1;
            return currentIndex + 1;
          });
          console.log(currentImgNumber);
          setShowImg((currentImg) => {
            console.log(currentImg);
            currentImg[currentImgNumber - 1] = -1;
            currentImg[currentImgNumber] = 99;
            return currentImg;
          });
        }
      }, 2000));
    }
  };
  return (
    <>
      <div className="personal-carousel">
        {
          imgList.map(((img, i) => (
            <img
              src={img}
              className="personal-carousel-img"
              alt="can't find img..."
              key={img}
              style={{ zIndex: showImg[i] }}
            />
          )))
        }
      </div>
      <div className="personal-carousel-player">
        <i className="fa fa-play" aria-hidden="true" onClick={methods.autoPlay}></i>
        <i className="fa fa-step-backward" aria-hidden="true" onClick={methods.last}></i>
        <span className="personal-carousel-img-number">{`${index + 1} / ${imgList.length}`}</span>
        <i className="fa fa-step-forward" aria-hidden="true" onClick={methods.next}></i>
      </div>
    </>
  );
}
