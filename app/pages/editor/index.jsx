/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import Title from './title';
import Write from './write';
// eslint-disable-next-line import/no-unresolved
import View from '@/components/view';
// eslint-disable-next-line import/no-unresolved
import './common.less';


export default function Editor() {
  const [content, setContent] = useState('');
  return (
    <>
      <Title text={content} />
      <div className="editor-center">
        <Write content={setContent} />
        <View text={content} />
      </div>
    </>
  );
}
