import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { LoginForm } from './LoginForm';

export default {
  title: 'Example/LoginForm',
  component: LoginForm,
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
