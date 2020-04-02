/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './common.less';
import { writeArticle } from '@/api/article';
import { dateFormat } from '@/utils';

export default function Title(props) {
  const [title, setTitle] = useState('');
  const methods = {
    upload() {
      const { text } = props;
      writeArticle({
        text,
        title,
        type: 'frontend',
        time: dateFormat()
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log('err comes from writeArticle api:' + err));
    }
  };
  return (
    <div className="editor-title">
      <input
        type="text"
        className="editor-title-title"
        placeholder="输入文章标题..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="editor-title-tools">
        <div className="editor-title-onload" onClick={methods.upload}>上传</div>
      </div>
    </div>
  );
}
