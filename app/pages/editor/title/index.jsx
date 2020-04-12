/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import './index.less';
import { message, Select } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { writeArticle } from '@/api/article';
import { dateFormat } from '@/utils';
import { typeList } from './constant';
import { articleSubType } from '@/models/actions/getArticleSubType';

function Title(props) {
  const { Option } = Select;
  const { text } = props;
  const [title, setTitle] = useState('');
  const [type, setType] = useState();
  const [subtypeList, setSubtypeList] = useState([]);
  const [subtype, setSubtype] = useState();
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
        return;
      }
      if (!type) {
        message.warn('文章类型不能为空!');
        return;
      }
      if (type !== 'life' && !subtype) {
        message.warn('除其它类型外, 文章子类型不能为空!');
      }
      writeArticle({
        text,
        title,
        type,
        subtype,
        time: dateFormat()
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log('err comes from writeArticle api:' + err));
    },
    async changeTypeValue(value) {
      setType(value);
      let getsubtype = await props.typeArticleApi(value);
      setSubtypeList(getsubtype);
    },
    setConfirmSubtype(confirmSubtype) {
      setSubtype(confirmSubtype);
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
          value={type}
          onChange={methods.changeTypeValue}
        >
          {
            typeList.map((item) => (
              <Option className="editor-title-type-select" value={item.value} key={item.value}>{ item.label }</Option>
            ))
          }
        </Select>
        <div className="editor-title-subtype-container">
          <input
            className="editor-title-subtype"
            placeholder="根据类型选择子类型"
            value={subtype}
            onChange={(e) => setSubtype(e.target.value)}
          />
          <i className="fa fa-search"></i>
          <div className="editor-title-subtype-list">
            {
              subtypeList.map((_subtype) => (
                <div key={_subtype.subtype} onClick={() => methods.setConfirmSubtype(_subtype.subtype)}>
                  { _subtype.subtype }
                </div>
              ))
            }
          </div>
        </div>
        <div className="editor-title-onload" onClick={methods.upload}>上传</div>
      </div>
    </div>
  );
}

const subTypeList = (state) => {
  const { selectSubtype } = state;
  // console.log(state);
  return { selectSubtype };
};

const getSubType = (dispatch) => ({
  typeArticleApi: (type) => dispatch(articleSubType({ type }))
});

Title.propTypes = {
  text: PropTypes.string.isRequired,
  typeArticleApi: PropTypes.func.isRequired
};

export default (connect(subTypeList, getSubType))(Title);
