import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './tooltip.scss';

export const Tooltip = ({ children, label, position, ...props }) => {
  const classes = classnames(styles.tooltip, styles[position]);

  return (
    <span className={classes} data-tooltip={label} {...props}>
      {children}
    </span>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  position: PropTypes.string,
};

Tooltip.defaultProps = {
  children: null,
  label: '',
  position: 'top',
};
