import { useState } from "react";

const Create = () => {

  const [title, setTitle] = useState('title');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author};
    console.log(e, 'logging at submit', blog);
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

        <button>Add blog</button>
        <p>{ title }</p>
        <p>{ body }</p>
        <p>{ author }</p>
      </form>
    </div>
  );
}

export default Create;