import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';

import { ButtonComponent as Button } from '../Button/Button';

const validationSchema = yup.object({
    username: yup
    .string('Enter your username')
    .required('Username is required'),
  password: yup
    .string('Enter your password')
    .required('Password is required'),
});

export const LoginForm = () => (
  <Formik
    initialValues={{
      username: '',
      password: '',
    }}
    validationSchema={validationSchema}
    onSubmit={() => {}}
  >
    {({ errors, touched, values }) => (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            id="username"
            name="username"
            values={values.username}
          />
          {errors.username && touched.username ? (
              <div>{errors.username}</div>
            ) : null}
          <ErrorMessage name="username" />
        </Form.Group>
        <label htmlFor="password">Password</label>
        <Form.Control
          id="password"
          name="password"
          values={values.password}
        />
        {errors.password && touched.password ? (
             <div>{errors.password}</div>
           ) : null}
        <ErrorMessage name="password" />
        <Button type="submit">
          Submit
        </Button>
      </Form>
    )}
    </Formik>
);

