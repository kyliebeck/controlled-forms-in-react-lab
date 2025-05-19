import { useState } from 'react';

const Bookshelf = () => {

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
    })


    const handleInputChange = (event) => {
        setNewBook({ ...newBook, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([...books, newBook]);
        setNewBook({
            title: '',
            author: '',
        })
    }

    console.log("Books", books)
    console.log("new book", newBook)
    return (

        <div className="bookshelfDiv">
            <form onSubmit={handleSubmit}>
                <div className="formDiv">

                    <h3>Add a Book</h3>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={newBook.title}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={newBook.author}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Submit</button>
                </div>
            </form>
            <div className="bookCardsDiv">

                <ul>
                    {books.map((book, idx) => (
                        <div className="bookCard" key={idx}>{book.title} by {book.author}</div>
                    ))}

                </ul>


            </div>

        </div>
    );
};


export default Bookshelf;