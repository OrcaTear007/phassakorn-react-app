import { useState,useEffect } from "react";
import { useParams } from "@remix-run/react";
import { Link } from "@remix-run/react";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
    const [inputId, setInputId] = useState(0);
    const [inputTitle, setInputTitle] = useState('');
    const [inputAuthor, setInputAuthor] = useState('');
    const navigate = useNavigate();

    const { bookId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resBook = await fetch(`http://localhost:3000/api/getOnebook/${bookId}`);
                if(resBook.ok){
                    const result = await resBook.json();
                    setInputId(result.id);
                    setInputTitle(result.bookTitle);
                    setInputAuthor(result.bookAuthor);
                }else{
                    alert('APIs is wrong.');
                }
            }catch (error) {
                alert ('Error fetching Data():' + error);
            }
        }
        fetchData();
    },[]);

    const handleSubmit =  async (e:any) => {
        e.preventDefault();
        try {
            //Add a new book APIs
            const resAddBook = await fetch(`http://localhost:3000/api/updateBook`, 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ bookId: inputId , bookTitle: inputTitle, bookAuthor: inputAuthor })
                }
            );
            const result = await resAddBook.json();
            alert ('Update book ID: ' + result.message); 
        navigate('/books/home')

        }catch (error) {
            alert ('Error submitting data:' + error);
        }
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="hidden" value={inputId}/>
            <label>ชื่อหนังสือ:</label>
            <input type="text" value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)} />

            <label>ชื่อผู้แต่ง:</label>
            <input type="text" value={inputAuthor}
            onChange={(e) => setInputAuthor(e.target.value)} />

            <button type="submit" className="border p-2 bg-blue-300">Update Book</button>
            </form>
        <Link to="/books/home" className="bg-yellow-100 p-2 ms-2">Back</Link>
            </>
        );
}