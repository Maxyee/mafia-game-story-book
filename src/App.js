import Home from './pages/home/Home';
import Header from './constants/Header';
import Footer from './constants/Footer';
import Mafia2 from './pages/mafia/Mafia2';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/mafia2" component={Mafia2} />
            </Switch>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
