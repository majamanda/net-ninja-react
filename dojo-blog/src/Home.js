import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    // for simulating a 1 sec fetch wait
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          if (!res.ok) {
            throw Error('Could not fetch the data');
          }
          return res.json();
        })
        .then(data => {
          setBlogs(data);
          setIsPending(false);
          setFetchError(null);
          console.log(data);
        })
        .catch(err => {
          console.log(err);
          setBlogs(null);
          setIsPending(false);
          setFetchError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {fetchError && <div>{ fetchError }</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs!"} />}
    </div>
  );
}

export default Home;