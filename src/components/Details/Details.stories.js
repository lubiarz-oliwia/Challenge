import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Details } from './Details';

export default {
  title: 'Example/Details',
  component: Details,
};

const Template = (args) => <Details {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  userId: "userId",
  id: "Id",
  title: "title",
  body: "body"
};
