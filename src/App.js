import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



import { ButtonComponent as Button } from './components/Button/Button';
import { LoginForm } from './components/LoginForm/LoginForm';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
            <Col lg={4}> <LoginForm /> </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
