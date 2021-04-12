import React from 'react';
//import Card from 'react-bootstrap/Card';

const style1 = {
textAlign: "center"
};

export const Details = ({userId, id, title, body}) => (
  

    <div>
      <h1 style={style1}>Details</h1>
      {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
      <h4>UserId: {userId}</h4>
      <h4>Id: {id}</h4>
      <h4>Title: {title}</h4>
      <h4>Body: {body}</h4>
  </div>
);

