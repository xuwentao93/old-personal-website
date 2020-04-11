/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './index.less';
import { message, Select } from 'antd';
import { writeArticle } from '@/api/article';
import { dateFormat } from '@/utils';
import { typeList } from './constant';

export default function Title(props) {
  const { Option } = Select;
  const { text } = props;
  const [title, setTitle] = useState('');
  const [typeValue, setTypeValue] = useState();
  const methods = {
    upload() {
      if (title === '') {
        message.warn('标题不能为空!');
        return;
      }
      if (title.length < 4 || title.length > 30) {
        message.warn('标题的长度必须在 4 - 30 之间!');
        return;
      }
      if (text.length < 20) {
        message.warn('文章必须大于 20 个字!');
      }
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
    },
    changeTypeValue(value) {
      console.log(value);
      setTypeValue(value);
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
        <Select
          placeholder="请选择文章类型"
          className="editor-title-type-list"
          value={typeValue}
          onChange={methods.changeTypeValue}
        >
          {
            typeList.map((item) => (
              <Option className="editor-title-type-select" value={item.value} key={item.value}>{ item.label }</Option>
            ))
          }
        </Select>
        <div className="editor-title-onload" onClick={methods.upload}>上传</div>
      </div>
    </div>
  );
}
