import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextArea = ({
  field, value, error, onChange
}) => (
  <div className={classnames({ 'text-danger': error })}>
    <textarea
      name={field}
      value={value}
      onChange={onChange}
      className="form-control"
    />
    { error && <p className="text-danger">{error}</p>}
  </div>
);

TextArea.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.shape({
  }),
  onChange: PropTypes.func.isRequired,
};


export default TextArea;
