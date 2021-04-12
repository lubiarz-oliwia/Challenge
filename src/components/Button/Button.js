import React from 'react';
import { string, oneOf } from 'prop-types';
import Button from 'react-bootstrap/Button';

export const ButtonComponent = ({ children, variant, ...props }) => (
    <Button variant={variant} {...props}>{children}</Button>
);

ButtonComponent.propTypes = {
  children: string.isRequired,
  variant: oneOf(['primary', 'info', 'dark', 'success']),
};

ButtonComponent.defaultProps = {
  variant: 'primary',
};
