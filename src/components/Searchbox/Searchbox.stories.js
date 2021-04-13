import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Searchbox } from './Searchbox';

export default {
  title: 'Example/Searchbox',
  component: Searchbox,
  argTypes: { onSearchboxChange: { action: 'clicked' } },
};

const Template = (args) => <Searchbox {...args} />;

export const Default = Template.bind({});
Default.args = {};