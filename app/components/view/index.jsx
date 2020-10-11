/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

export default function View(props) {
  const { text, style = {} } = props;
  return (
    <div className="personal-view-container" dangerouslySetInnerHTML={{ __html: text }} style={style} />
  );
}

View.propTypes = {
  text: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  style: PropTypes.object
};
