import { storiesOf } from '@storybook/react';
import Passing from './passing';
import { passing } from './data';

storiesOf('Pages/inside/dashboardPage/passing', module).add('default state', () => (
  <Passing issueType={passing.issueType} />
));
