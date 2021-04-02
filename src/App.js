import Home from './pages/home/Home';
import Header from './constants/Header';
import Footer from './constants/Footer';
import {Container, Row} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
              <Route exact path="/" component={Home} />
          </Switch>
          
      </div>
    </Router>
  );
}

export default App;
