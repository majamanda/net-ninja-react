// import logo from './logo.svg';
// import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  const link = "https://www.google.com";

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" >
              <Home />
            </Route>
            <Route path="/ekhaya">
              <Home />
            </Route>
          </Switch>
        </div>
        {/* <div className="content">
          <Home />
        </div> */}
      </div>
    </Router>
  );

}

export default App;
