import { useState } from "react";

const Home = () => {

    const [name, setName] = useState('Jane');
    const [age, setAge] = useState(20);

    const handleClick = () => {
        setName('Joe');
        setAge(29);
    }

    return ( 
        <div className="home">
            <h2>Welcome to the Blog!</h2>
            <p>{ name } is { age } years old.</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;