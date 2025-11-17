import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";

export default function MyTermProject (){

    const [book,setbook]=useState({
        bookTitle:"web Programmiing",
        bookDesc:"React & Tailwind css",
        bookPrice: 299,
        bookAuthor:"Patsakorn",
        bookCover:"/imges/9786164871069.jpg"
    });
     const [nextId,setNextId]= useState(0);
     const [books,setBooks] = useState([]);

    const myPage = "Phassakorn Term Project"
    const myName = "Phassakorn Makpun"
    const myStudID = "026730491005-7"

    const addBook = (e) => {
        setBooks([
            ...books,
            {
                id:nextId,
                bookTitle: book.bookTitle,
                bookDesc:book.bookDesc,
                bookPrice:book.bookPrice,
                bookAuthor:book.bookAuthor,
                bookCover:book.bookCover
             }
        ]);
        setNextId(nextId+1);
    }

    const bookItems = books.map((bObj,index)=>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
           <a href="#">
             <img className="rounded-t-lg" src={bObj.bookCover} title={bObj.bookTitle} />
           </a>
           <div className="p-5">
             <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{bObj.bookTitle}({bObj.bookPrice}THB)
                
              </h5>
             </a>
             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{bObj.bookDesc}</p>
             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{bObj.bookAuthor}</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              [D] delets
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
              </a>
            </div>
          </div>
          

    );
    

    const handleTitleChange =(e) =>{
        setbook({
            ...book,
            bookTitle: e.target.value
        });
        }
        const handleDescChange =(e) => {
        setbook({
            ...book,
            bookDesc: e.target.value
        });
        }
        
        const handlePriceChange =(e) => {
        setbook({
            ...book,
            bookPrice: e.target.value
        });

        }
        const handleAuthorChange =(e) => {
        setbook({
            ...book,
            bookAuthor: e.target.value
        });
        
        }
        const handleCoverChange =(e) => {
        setbook({
            ...book,
            bookCover: e.target.value
        });
    }
        const resetForm =(e) => {
            setbook({
                bookTitle:"",bookDesc:"",bookCover:"",bookPrice:0.0,bookAuthor:"",
            });
        }

    return (
        <>
        <Header title ={myPage} />
        <p className="text-large  text-center ">
           --<br/>
           Name : {myName}<br/> 
           stud ID : {myStudID}<br/>
           --
        </p> 
     

     <div className="flex justify-center  w-full grid mx-auto h-100 overflow-auto rounded-2xl border border-gray-300">
       
       <form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อหนังสือ(Title):</label>
            <input
              value={book.bookTitle}
              onChange={handleTitleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

           <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รายละเอียด(description):</label>
            <input
              value={book.bookDesc}
              onChange={handleDescChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ราคา(Price):</label>
            <input
              value={book.bookPrice}
              onChange={ handlePriceChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ผู้แต่ง(Author):</label>
            <input
              value={book.bookAuthor}
              onChange={ handleAuthorChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
           


          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รูปหนังสือ(Cover):</label>
            <input
              value={book.bookCover}
              onChange={ handleCoverChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
           <div className="mb-5">
                <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
                focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"onClick={addBook}>Add 

                </button>

                <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
                focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={resetForm}
                >Clear
                </button>
            </div>

        </form>
        Display form:
--
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
           <a href="#">
             <img className="rounded-t-lg" src={book.bookCover} title={book.bookTitle} />
           </a>
           <div className="p-5">
             <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.bookTitle}({book.bookPrice}THB)
                
              </h5>
             </a>
             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.bookDesc}</p>
             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.bookAuthor}</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
              </a>
            </div>
            <div className="w-full mx-auto grid overflow-hide">
        <div className="flex justify-center  w-full grid mx-auto h-100 overflow-auto rounded-2xl border border-gray-300">
          {bookItems}
        </div>
      </div>
          
          </div>
    
     </div>
     <Footer title = "  © 2025 Phassakorn. 026730491005-7"/>
        </>
    );
        
}
