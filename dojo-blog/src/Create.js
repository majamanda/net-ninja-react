import { useState } from "react";

const Create = () => {

  const [title, setTitle] = useState('title');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author};
    
    setIsPending(true);

    fetch('http://localhost:8000/blogs', { 
      method: 'POST',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
      setIsPending(false);
    })
    .catch(err => {
      console.log(err);
    });
  }
  
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>

        <label htmlFor="title">Blog title:</label>
        <input type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="title">Blog body:</label>
        <textarea 
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label htmlFor="title">Blog author:</label>
        <select
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}>
          <option value="ben">Ben</option>
          <option value="Joe">Joe</option>
          <option value="Mary">Mary</option>
        </select>

        { !isPending &&<button>Add blog</button> }
        { isPending &&<button disabled>Adding blog...</button> }
        <p>{ title }</p>

      </form>
    </div>
  );
}

export default Create;