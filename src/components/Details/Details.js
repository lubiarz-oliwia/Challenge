import React, { useState, useEffect } from 'react';
//import Card from 'react-bootstrap/Card';
import { getDetails } from "../API/constants";
import { ButtonComponent } from '../Button/Button';
import { Error } from '../Error/Error';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


export const Details = ({ userId, id, title, body, handleBack }) => {

  const [details, setDetails] = useState({ userId: '', title: '', id: ''});
  const [isErrorPresent, failCallback] = useState(false)

  useEffect(() => {
    getDetails(id, setDetails, failCallback);
  }, []);


  return (
    <Container>
      {console.log(details)}
      <Row>
        <Col lg={12}>
          <ButtonComponent variant='dark' children="Go back" onClick={handleBack} style={{ marginBottom: "20px" }}></ButtonComponent>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Title style={{ marginTop: "10px", color: "#034EA2" }}>Details</Card.Title>
            <div style={{ textAlign: "left", marginLeft: "10px" }}>
              <Card.Text>UserId: {details.userId}</Card.Text>
              <Card.Text>Id: {details.id}</Card.Text>
              <Card.Text>Title: {details.title}</Card.Text>
              <Card.Text style={{ marginBottom: "10px" }}>Body: {details.body}</Card.Text>
            </div>
          </Card>
        </Col>
      </Row>
      {isErrorPresent ? <Error></Error> : null}
    </Container>
  )
};

