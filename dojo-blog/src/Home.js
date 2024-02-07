import { useState } from "react";

const Home = () => {

    // const [name, setName] = useState('Jane');
    // const [age, setAge] = useState(20);

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    return ( 
        <div className="home">
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2 className="blog-title">
                        {blog.title}
                    </h2>
                    <p className="author">
                        {blog.author}
                    </p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;