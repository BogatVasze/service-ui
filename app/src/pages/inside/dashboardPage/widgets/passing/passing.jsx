import { Component } from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames/bind';

import C3Chart from 'react-c3js';
import styles from './passing.scss';
import { LaunchInfoBlock } from '../components/testsTableWidget/launchInfoBlock';
import { ChartLegend } from '../components/chartLegend';
import { Labels } from '../components/labels';

const cx = classNames.bind(styles);
const legends = {
  colors: ['#8db677', '#ed6c49'],
  labels: ['Passing', 'Failed'],
};

class Passing extends Component {
  static propTypes = {
    launch: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
  };

  constructor() {
    super();
    this.chartData = {
      columns: [],
    };
    this.passedPercentage = 0;
    this.failedPercentage = 0;
  }
  state = {
    chartType: 'bar',
  };

  componentWillMount() {
    this.chartData = this.getChartData();
  }

  getPercentage = (a, b) => Math.round(a / b * 100);

  getProcessedData = (data) => {
    this.passedPercentage = this.getPercentage(data[0].values.passed, data[0].values.total);
    this.failedPercentage = this.getPercentage(
      data[0].values.total - data[0].values.passed,
      data[0].values.total,
    );

    return [[legends.labels[0], this.passedPercentage], [legends.labels[1], this.failedPercentage]];
  };

  getChartData = () => ({
    columns: this.getProcessedData(this.props.data),
    type: this.state.chartType,
    groups: [[legends.labels[0], legends.labels[1]]],
    colors: {
      Passing: legends.colors[0],
      Failed: legends.colors[1],
    },
    labels: this.state.chartType !== 'bar',
    order: null,
  });

  render() {
    return (
      <div className={cx('passing')}>
        <header>
          <ChartLegend
            legends={legends}
            alignment={this.state.chartType === 'bar' ? 'horizontal' : 'vertical'}
          />
          <LaunchInfoBlock launchName={this.props.launch[0]} />
        </header>
        <section>
          {this.state.chartType === 'bar' ? (
            <Labels
              labels={[this.passedPercentage, this.failedPercentage]}
              widths={[this.passedPercentage, this.failedPercentage]}
            />
          ) : null}
          <C3Chart
            data={this.chartData}
            bar={{ width: 50 }}
            axis={{ rotated: true, x: { show: false, padding: 0 }, y: { show: false, padding: 0 } }}
            legend={{ show: false }}
            size={{ height: 200 }}
            tooltip={{ show: false }}
          />
        </section>
      </div>
    );
  }
}

export default Passing;
