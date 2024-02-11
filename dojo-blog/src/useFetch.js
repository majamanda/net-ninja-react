import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const useFetch = (url) => {
  
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    // for simulating a 1 sec fetch wait
    setTimeout(() => {
      fetch(url)
        .then(res => {
          if (!res.ok) {
            throw Error('Could not fetch the data');
          }
          return res.json();
        })
        .then(data => {
          setData(data);
          setIsPending(false);
          setFetchError(null);
          console.log(data);
        })
        .catch(err => {
          console.log(err);
          setData(null);
          setIsPending(false);
          setFetchError(err.message);
        });
    }, 1000);
  }, [url]);

  return {data, isPending, fetchError}

}

export default useFetch;