import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export const Searchbox = () => (
    <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1"></InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Search"
      aria-label="Search"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
);
