import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const [URL, setURL] = useState('http://localhost:8000/blogs/' + id)
  const { data: blog, error, isPending } = useFetch(URL);

  return (
    <div className="blog-details">
      {isPending && <div> Loading...</div>}
      {error && <div> {error}</div>}
      {blog && (
        <article>
          <h2> {blog.title}</h2>
          <div>{blog.body}</div>
          <p>Written by {blog.author}</p>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;