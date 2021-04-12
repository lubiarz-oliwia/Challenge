import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";

import { ButtonComponent as Button } from './components/Button/Button';
import { LoginForm } from './components/LoginForm/LoginForm';
import { MainPage } from './components/MainPage/MainPage';
import { Details } from './components/Details/Details';

function MyApp() {
  let history = useHistory();

  const onLoginFormSubmit = (userData) => {
    sessionStorage.setItem('user', JSON.stringify(userData));
    const user = sessionStorage.getItem('user');
    history.push('/main');
  }

  const [postId, setPostId] = useState([]);

  const kk = (id) => {
    setPostId(id);
    history.push('/details');
  }

  return (
    <div className="App">
        <Switch>
          <Route exact path="/">
            <Container>
              <Row>
                <Col lg={4}> <LoginForm onSubmit={onLoginFormSubmit} /> </Col>
              </Row>
            </Container>
          </Route>
          <Route exact path="/main">
            <Container>
              <Row>
                <Col lg={4}> <MainPage setPostId={kk} /> </Col>
              </Row>
            </Container>
          </Route>
          <Route exact path="/details">
            <Container>
              <Row>
                <Col lg={4}> <Details id={postId} /> </Col>
              </Row>
            </Container>
          </Route>
        </Switch>
    </div>
  );
}

const MyAppWrapped = withRouter(MyApp);


const App = () => (
  <Router>
    <MyAppWrapped />
  </Router>
)

export default App;
