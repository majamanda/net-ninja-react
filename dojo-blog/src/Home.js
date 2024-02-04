const Home = () => {

    const handleClick = () => {
        console.log('Hello Ninjas');
    }

    const handleClickAgain = (name, e) => {
        console.log('Hello ' + name, e.target, e);
    }

    return ( 
        <div className="home">
            <h2>Welcome to the Blog!</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={ (e) => {
                handleClickAgain('Ntha', e)
            } }>Click me again</button>
        </div>
     );
}
 
export default Home;