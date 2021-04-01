import Home from './pages/home/Home';
import Header from './constants/Header';
import Footer from './constants/Footer';
import {Container, Row} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
        <Container>
          <Row>
            <Header/>
          </Row>
          <Row>
            <Home/>
          </Row>
          <Row>
            <Footer/>
          </Row>
        </Container>
    </div>
  );
}

export default App;
