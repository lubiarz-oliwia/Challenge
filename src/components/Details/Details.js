import React, { useState, useEffect } from 'react';
//import Card from 'react-bootstrap/Card';
import { getDetails } from "../API/constants";
import { ButtonComponent } from '../Button/Button';


const style1 = {
textAlign: "center"
};

export const Details = ({userId, id, title, body, handleBack}) => {

  const [details, setDetails] = useState([]);

  useEffect(() => {
      getDetails(id, setDetails);
  }, []);


return (
  <>
    <ButtonComponent variant='dark' children="Go back" onClick={handleBack}></ButtonComponent>
    <div>
      <h1 style={style1}>Details</h1>
      {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
      <h4>UserId: {details.userId}</h4>
      <h4>Id: {details.id}</h4>
      <h4>Title: {details.title}</h4>
      <h4>Body: {details.body}</h4>
  </div>
  </>
)
};

