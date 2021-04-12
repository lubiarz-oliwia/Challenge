import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { MainPage } from './MainPage';

export default {
  title: 'Example/MainPage',
  component: MainPage,
};

const Template = (args) => <MainPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
