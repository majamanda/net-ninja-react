import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

  const URL = 'http://localhost:8000/blogs';
  const {data: blogs, isPending, error} = useFetch(URL);
  
  return (
    <div className="home">
      {error && <div>{ error }</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs!"} />}
    </div>
  );
}

export default Home;