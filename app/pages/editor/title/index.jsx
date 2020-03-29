import React from 'react';
import './common.less';

export default function Title() {
  return (
    <div className="editor-title">
      <input type="text" className="editor-title-title" placeholder="输入文章标题..." />
    </div>
  );
}
