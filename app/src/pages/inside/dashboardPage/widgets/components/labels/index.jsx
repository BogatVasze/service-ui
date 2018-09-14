import * as React from 'react';
import { array, string } from 'prop-types';
import classNames from 'classnames/bind';
import styles from './labels.scss';

const cx = classNames.bind(styles);
export const Labels = ({ labels, widths, alignment }) => (
  <ul className={cx('labels', alignment)}>
    {labels.map((value, index) => (
      <li key={value} style={{ width: `${widths[index]}%` }}>
        {value}%
      </li>
    ))}
  </ul>
);

Labels.propTypes = {
  labels: array.isRequired,
  widths: array.isRequired,
  alignment: string.isRequired,
};

Labels.defaultProps = {
  alignment: 'top-horizontal-bar-chart',
};
