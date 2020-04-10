/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

export default function View(props) {
  const { text } = props;
  return (
    <>
      <div className="personal-view" dangerouslySetInnerHTML={{ __html: text }} />
    </>
  );
}

View.propTypes = {
  text: PropTypes.string.isRequired
};
