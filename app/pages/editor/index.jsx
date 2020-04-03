/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import Title from './title';
import Write from './write';
// eslint-disable-next-line import/no-unresolved
import View from '@/components/view';
// eslint-disable-next-line import/no-unresolved
import Carousel from '@/components/carousel';
import './common.less';
import alpaca from '@/assets/home/alpaca.jpg';
import kitty from '@/assets/home/kitty.jpg';
import koala from '@/assets/home/koala.jpg';
import panda from '@/assets/home/panda.jpg';
import puppy from '@/assets/home/puppy.jpg';

const imgList = [alpaca, kitty, koala, panda, puppy];

export default function Editor() {
  const [content, setContent] = useState('');
  return (
    <>
      <Title text={content} />
      <div className="editor-center">
        <Write content={setContent} />
        <View text={content} />
      </div>
      <Carousel imgList={imgList} />
    </>
  );
}
