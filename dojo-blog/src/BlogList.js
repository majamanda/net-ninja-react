import { useState } from "react";

const BlogList = ({blogs, title}) => {
    
// const BlogList = (props) => {

//     const blogs = props.blogs;
//     const title = props.title;

    return ( 
        <div className="home">
            <h2>{ title }</h2>
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
 
export default BlogList;