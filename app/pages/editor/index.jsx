import React from 'react';
import Title from './title';
import Write from './write';
// eslint-disable-next-line import/no-unresolved
import View from '@/components/view';
import './common.less';

export default function Editor() {
  return (
    <>
      <Title />
      <div className="editor-center">
        <Write />
        <View />
      </div>
    </>
  );
}
