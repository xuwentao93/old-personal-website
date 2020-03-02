import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

export default function Input(props) {
  const { value, onChange } = props;
  return (
    <input
      className="unique-input"
      value={value}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
