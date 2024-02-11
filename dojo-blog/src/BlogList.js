import { useState } from "react";

const BlogList = ({blogs, title, handleDelete}) => {

    return ( 
        <div className="home">
            <h2>{ title }</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2 className="blog-title">{blog.title}</h2>
                    <p className="author">{blog.author}</p>
                    <button onClick={()=> handleDelete(blog.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;