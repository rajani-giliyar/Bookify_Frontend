import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

const UpdateBook = () => {
    const {bid} = useParams();
   
    const navigate = useNavigate();
      
    const formTable = {
        width: '300px',
        padding: '10px',
        margin: 'auto',
        borderRadius: '10px',
        marginTop: '20px',
      };

      const [bookData, setBookData] = useState({
        book_name: '',
        book_author: '',
        book_price: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookData({
          ...bookData,
          [name]: value,
        });
      };

    //   useEffect(() => {
    //     axios.get(`http://localhost:5000/api/viewbook/${bid}`)
    //     .then(response =>{
    //         setBookData({
    //             ...bookData,
    //             book_name: "response.data.book_name",
    //             book_author: "response.data.book_author",
    //             book_price: "response.data.book_price",
    //         })
    //     })
    //     .then(error => {
    //         console.error(error);
    //     })
    //   },[])


    useEffect(() => {
        axios.get(`http://localhost:5000/api/viewbook/${bid}`)
        .then(response =>{
            setBookData({
                ...bookData,
                book_name: response.data.book_name,
                book_author: response.data.book_author,
                book_price: response.data.book_price,
            });
        })
        .catch(error => {
            console.error(error);
        });
    }, [bid]); // Include bid in the dependency array to re-run the effect when bid changes
    
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
          console.log('Submitting form with data:', bookData);
          const response = await axios.put(`http://localhost:5000/api/updatebook/${bid}`, bookData);
          console.log('Response:', response.data);
          setBookData({
            book_name: '',
            book_author: '',
            book_price: '',
          });
          navigate("/books")
        } catch (error) {
          console.error('Error updating form:', error);
        }
      };
      

  return (
    <div>
         <fieldset style={formTable}>
        <legend>Update Book</legend>
        <table>
          <tbody>
            <tr>
              <td>Book Name</td>
              <td>
                <input type="text" name="book_name" value={bookData.book_name} onChange={handleInputChange} />
              </td>
            </tr>
            <tr>
              <td>Book Author</td>
              <td>
                <input type="text" name="book_author" value={bookData.book_author} onChange={handleInputChange} />
              </td>
            </tr>
            <tr>
              <td>Book Price</td>
              <td>
                <input type="text" name="book_price" value={bookData.book_price} onChange={handleInputChange} />
              </td>
            </tr>
            <tr>
              <td colSpan={2} align="center">
                <input type="button" value={'Update Book'} name="Updatebook" onClick={handleFormSubmit} />
              </td>
            </tr>
          </tbody>
        </table>
      </fieldset>
    </div>
  )
}

export default UpdateBook