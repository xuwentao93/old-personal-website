/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './common.less';

export default function View(props) {
  return (
    <div className="editor-view" dangerouslySetInnerHTML={{ __html: props.text }} />
  );
}
