/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './index.less';

export default function Carousel(props) {
  const [index, setIndex] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [autoPlay, setAutoPlay] = useState(null);
  const { imgList } = props;
  // eslint-disable-next-line no-unused-vars
  const [showImg, setShowImg] = useState(Array(imgList.length).fill(-1));
  showImg[0] = 99;
  const methods = {
    next() {
      console.log(index);
      if (index === imgList.length - 1) {
        setIndex(0);
        showImg[showImg.length - 1] = -1;
        showImg[0] = 99;
      } else {
        showImg[index] = -1;
        showImg[index + 1] = 99;
        setIndex(index + 1);
      }
    },
    last() {
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
      setAutoPlay(setInterval(() => methods.next(), 2000));
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
