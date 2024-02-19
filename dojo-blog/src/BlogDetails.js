import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
  const { id } = useParams();
  const [URL, setURL] = useState('http://localhost:8000/blogs/' + id)
  const { data: blog, error, isPending } = useFetch(URL);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    });
  }

  return (
    <div className="blog-details">
      {isPending && <div> Loading...</div>}
      {error && <div> {error}</div>}
      {blog && (
        <article>
          <h2> {blog.title}</h2>
          <div>{blog.body}</div>
          <p>Written by {blog.author}</p>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;