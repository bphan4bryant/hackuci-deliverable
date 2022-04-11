import petr from './petr.png';
import './App.css';
import MyForm from './MyForm/MyForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col xs={12} lg={6} className="d-flex justify-content-center align-items-center">
              <MyForm />              
            </Col>
            <Col xs={12} lg={6} className="d-flex justify-content-center align-items-center">
              <div className="x">
                <div className="y">
                  <img src={petr} className="App-logo xy" alt="logo" style={{height: 200 , width: 'auto'}}/>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
