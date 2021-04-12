import React from 'react';
import Card from 'react-bootstrap/Card';


export const Tile = ({userId, title}) => (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>UserId: {userId}</Card.Title>
      {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
      <Card.Text>Title: {title}</Card.Text>
      {/* <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link> */}
    </Card.Body>
  </Card>
);

