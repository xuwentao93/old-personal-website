import React, { useRef } from 'react';
import './common.less';

export default function Write(props) {
  const text = useRef(null);
  const methods = {
    write() {
      const content = text.current.innerHTML;
      // eslint-disable-next-line react/prop-types
      props.content(content);
    }
  };
  return (
    <div className="editor-write" contentEditable ref={text} onInput={methods.write} />
  );
}
