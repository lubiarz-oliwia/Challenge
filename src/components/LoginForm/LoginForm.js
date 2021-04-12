import React from 'react';
import { func } from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';

import { ButtonComponent as Button } from '../Button/Button';

const validationSchema = yup.object({
    username: yup
    .string('Enter your username')
    .required('Username is required')
    .min(5, "Username must be at least 5 characters long"),
  password: yup
    .string('Enter your password')
    .required('Password is required')
    .matches(
      /^((?=.*[a-z]){1})((?=.*[A-Z]){1})(?=.*\d)[A-Za-z\d@$!%*#?&]{8}$/,
      "Password must contain 8 characters, at least one small letter, at least one capital letter and at least one number"
    ),
});

export const LoginForm = ({ onSubmit }) => (
  <Formik
    initialValues={{
      username: '',
      password: '',
    }}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {({ values, handleSubmit, handleChange }) => (
      <Form>
        <Form.Group>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            id="username"
            name="username"
            values={values.username}
            onChange={handleChange}
          />
          <ErrorMessage name="username" />
        </Form.Group>
        <label htmlFor="password">Password</label>
        <Form.Control
          id="password"
          name="password"
          values={values.password}
          onChange={handleChange}
        />
        <ErrorMessage name="password" />
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    )}
    </Formik>
);

LoginForm.propTypes = {
  onSubmit: func.isRequired,
}

