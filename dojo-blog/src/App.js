// import logo from './logo.svg';
// import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
 
  // const title = "Welcome to the new blog";
  // const likes = 58;
  const link = "https://www.google.com";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        {/* <a href={link}>Visit Google</a> */}

      </div>
    </div>
  );

}

export default App;
