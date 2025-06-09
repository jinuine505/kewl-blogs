import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setbody] = useState('');
    const [author, setAuthor] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
        .then(() => {
            setIsLoading(false);

            history.push('/');
        })
    };

    return (
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setbody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                >
                    <option value="" disabled>Select author</option>
                    <option value="Timmy" >Timmy</option>
                    <option value="Billy">Billy</option>
                    <option value="John" >John</option>
                </select>
                { !isLoading && <button>Add Blog</button> }
                { isLoading && <button disabled>Adding...</button> }
            </form>
            
        </div>
    );
}
 
export default Create;