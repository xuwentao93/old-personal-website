
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './index.less';

export default function Carousel(props) {
  const { imgList } = props;
  const [index, setIndex] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [autoPlay, setAutoPlay] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [showImg, setShowImg] = useState(Array(imgList.length).fill(-1));
  const play = useRef();
  const pause = useRef();
  showImg[0] = 99;
  const methods = {
    next() {
      play.current.style.display = 'inline-block';
      pause.current.style.display = 'none';
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
      play.current.style.display = 'inline-block';
      pause.current.style.display = 'none';
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
      // showImg[index] = -1;
      play.current.style.display = 'none';
      pause.current.style.display = 'inline-block';
      setAutoPlay(setInterval(() => { // autoPlay 需要解决 setInterval 闭包引起的 state 无法实时更新.
        let indexState = -1;
        setIndex((currentIndex) => {
          indexState = currentIndex;
          return currentIndex;
        });
        if (indexState === imgList.length - 1) {
          setIndex(0);
          const arr = Array.from(Array(imgList.length).fill(-1));
          arr[0] = 99;
          setShowImg(arr);
        } else {
          let currentImgNumber = NaN;
          setIndex((currentIndex) => {
            currentImgNumber = currentIndex + 1;
            return currentIndex + 1;
          });
          const arr = Array.from(Array(imgList.length).fill(-1));
          arr[currentImgNumber] = 99;
          setShowImg(arr);
        }
      }, 2000));
    },
    stop() {
      clearInterval(autoPlay);
      setAutoPlay(null);
      play.current.style.display = 'inline-block';
      pause.current.style.display = 'none';
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
        <i className="fa fa-play" ref={play} aria-hidden="true" onClick={methods.autoPlay}></i>
        <i className="fa fa-pause" ref={pause} aria-hidden="true" onClick={methods.stop}></i>
        <i className="fa fa-step-backward" aria-hidden="true" onClick={methods.last}></i>
        <span className="personal-carousel-img-number">{`${index + 1} / ${imgList.length}`}</span>
        <i className="fa fa-step-forward" aria-hidden="true" onClick={methods.next}></i>
      </div>
    </>
  );
}

Carousel.propTypes = {
  imgList: PropTypes.array.isRequired
};
