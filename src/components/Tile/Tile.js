import React from 'react';
import Card from 'react-bootstrap/Card';


export const Tile = ({ postId, userId, title, onTileClick }) => {
  return (
    <Card style={{ height: '10rem', marginBottom: "10px" }} onClick={() => onTileClick(postId)}>
      <Card.Body>
        <Card.Title style={{ color: "#034EA2" }}>UserId: {userId}</Card.Title>
        <Card.Text>Title: {title}</Card.Text>
      </Card.Body>
    </Card>
  )
};

