import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextField = ({
  field, value, error, type, onChange, id, placeholder
}) => (
  <div className={classnames({ 'text-danger': error })}>
    <input 
      className="form-control"
      type={type}
      name={field}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      id={id}
      required
      />
    { error && <p className="text-danger">{error}</p>}
  </div>
);

TextField.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.array,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

TextField.defaultProps = {
  type: 'text'
};


export default TextField;
