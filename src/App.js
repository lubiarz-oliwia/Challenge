import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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

function MyApp() {
  let history = useHistory();

  const onLoginFormSubmit = (userData) => {
    sessionStorage.setItem('user', JSON.stringify(userData));
    const user = sessionStorage.getItem('user');
    history.push('/main');
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
                <Col lg={4}> <MainPage /> </Col>
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
