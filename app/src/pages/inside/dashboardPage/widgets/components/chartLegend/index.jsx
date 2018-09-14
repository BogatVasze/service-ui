import * as React from 'react';
import { object, string } from 'prop-types';
import classNames from 'classnames/bind';
import styles from './chartLegend.scss';

const cx = classNames.bind(styles);
export const ChartLegend = ({ legends, alignment }) => (
  <ul className={cx('chart-legend', alignment)}>
    {legends.labels.map((value, index) => (
      <li key={value}>
        <span style={{ backgroundColor: legends.colors[index] }} /> {value}
      </li>
    ))}
  </ul>
);

ChartLegend.propTypes = {
  legends: object.isRequired,
  alignment: string.isRequired,
};

ChartLegend.defaultProps = {
  alignment: 'horizontal',
};
