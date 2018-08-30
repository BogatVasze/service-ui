import { Component } from 'react';
import { oneOf } from 'prop-types';
import {
  STATS_FAILED,
  STATS_SKIPPED,
  STATS_PASSED,
  STATS_TOTAL,
} from 'common/constants/statistics';

const PTIssueType = oneOf([STATS_FAILED, STATS_SKIPPED, STATS_PASSED, STATS_TOTAL]);

class Passing extends Component {
  static propTypes = {
    issueType: PTIssueType.isRequired,
  };

  state = {
    chartType: 'bar',
  };

  render() {
    return <div style={{ backgroundColor: 'green', width: '400px', height: '200px' }} />;
  }
}

export default Passing;
