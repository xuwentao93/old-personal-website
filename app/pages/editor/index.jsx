/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import View from '@/components/view';
import Title from './title';
import Write from './write';

import './index.less';

export default function Editor() {
  const [content, setContent] = useState('');
  return (
    <>
      <Title text={content} />
      <div className="editor-center">
        <Write content={setContent} />
        <div className="editor-view">
          <View text={content} />
        </div>
      </div>
    </>
  );
}
