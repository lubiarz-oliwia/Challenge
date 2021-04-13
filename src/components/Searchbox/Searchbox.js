import React, { useState, useEffect } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export const Searchbox = ({ onSearchboxChange }) => {
  const [current, setCurrent] = useState("");

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder=""
          aria-label="Search"
          aria-describedby="basic-addon1"
          value={current}
          onChange={e => {
            setCurrent(e.target.value);
            onSearchboxChange(current);
          }}
        />
      </InputGroup>
    </>
  )
};


