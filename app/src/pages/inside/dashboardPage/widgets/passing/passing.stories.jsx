import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import Passing from './passing';
import { passing } from './data';

storiesOf('Pages/inside/dashboardPage/passing', module)
  .addDecorator(
    host({
      title: 'Passing rate per launch',
      align: 'center middle',
      backdrop: 'rgba(70, 69, 71, 0.2)',
      background: '#fff',
      height: 300,
      width: '100%',
    }),
  )
  .add('default state', () => (
    <Passing
      launch={passing.content_parameters.widgetOptions.launchNameFilter}
      data={passing.content.result}
    />
  ));
