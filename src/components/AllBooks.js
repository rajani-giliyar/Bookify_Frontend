import React, { useEffect, useState } from 'react'
import axios from 'axios';

const AllBooks = () => {
    const [bookData,setBookData] = useState([])
    useEffect(() => {
       getbook()
    },[])

    const getbook =async() => {
        axios.get("http://localhost:5000/api/viewbook").then(response => {
            setBookData(response.data)
        }).then(error => {
            console.error(error);
        })
    }

    const deletebook =async(id) => {
        axios.delete(`http://localhost:5000/api/deletebook/${id}`)
        getbook()
    }

  return (
    <div>
         <h1>AllBooks</h1>
         <table border={1} width={"600px"}>
            <tr>
                <td>Book Name</td>
                <td>Book Author</td>
                <td>Book Price</td>
                <td colSpan={2}>Action</td>
            </tr>
            {
                bookData.map((books => (
                    <tr>
                        <td>{books.book_name}</td>
                        <td>{books.book_author}</td>
                        <td>{books.book_price}</td>
                        <td>
                            <a href={`updatebook/${books._id}`}>Edit</a>
                        </td>
                        <td>
                            <a href='#' onClick={() => deletebook(books._id)}>Delete</a>
                        </td>
                    </tr>
                )))
            }
         </table>
    </div>
    
  )
}

export default AllBooks