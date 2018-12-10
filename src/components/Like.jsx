import React from 'react';
import PropTypes from 'prop-types';

/**
 * function Like
 * @returns {Object} Like component
 */
const Like = ({
  iconClassName, spanClassName, count, ...rest
}) => (
  <i className={iconClassName} {...rest}>
    <span className={spanClassName}>
      {' '}
      {count}
    </span>
  </i>
);
Like.propTypes = {
  iconClassName: PropTypes.string,
  spanClassName: PropTypes.string,
  count: PropTypes.number
};

Like.defaultProps = {
  iconClassName: '',
  spanClassName: ''
};

export default Like;
