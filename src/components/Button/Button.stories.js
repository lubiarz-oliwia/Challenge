import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ButtonComponent } from './Button';

export default {
  title: 'Example/Button',
  component: ButtonComponent,
};

const Template = (args) => <ButtonComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Button',
  variant: 'dark'
};

export const Info = Template.bind({});
Info.args = {
  children: 'Button',
  variant: 'info'
};

export const Success = Template.bind({});
Success.args = {
  children: 'Button',
  variant: 'success'
};