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
    console.log(userData);
    console.log(sessionStorage)
  }

  const [postId, setPostId] = useState([]);

  const getDetails = (id) => {
    setPostId(id);
    history.push('/details');
  }

  const toMain = () => {
    history.goBack('0');
  }

  const logOut = () => {
    history.push('/');
    sessionStorage.clear();
    console.log(sessionStorage);
  }

  return (
    <div className="App" style={{ marginTop: "20px" }}>
      <Switch>
        <Route exact path="/">
          <Container>
            <Row className="justify-content-md-center">
              <Col lg={4}> <LoginForm onSubmit={onLoginFormSubmit} /> </Col>
            </Row>
          </Container>
        </Route>
        <Route exact path="/main">
          <MainPage setPostId={getDetails} handleLogout={logOut} />
        </Route>
        <Route exact path="/details">
          <Details id={postId} handleBack={toMain} />
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
