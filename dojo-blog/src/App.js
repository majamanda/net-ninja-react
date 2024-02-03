// import logo from './logo.svg';
import './App.css';

function App() {

  const title = "Welcome to the new blog";
  const likes = 58;
  const link = "https://www.google.com";


  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times </p>
        <p> { [1,2,3,4,7] } </p>
        <p>Rondom num X 10: {Math.random()*10} </p>

        <a href={link}>Visit Google</a>

      </div>
    </div>
  );

}

export default App;
