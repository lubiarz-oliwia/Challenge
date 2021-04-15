import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Error } from './Error';

export default {
  title: 'Example/Error',
  component: Error,
};

const Template = (args) => <Error {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
