// // //  npm install react-router-dom
// // import axios from 'axios'
// // import React, { useState } from 'react'

// // const CreateBook = () => {
// //     const formFieldSet = {
// //         width : "300px" ,
// //         padding : "10px",
// //         margin : "auto",
// //         borderRadius : "10px",
// //         marginTop : "20px"
// //     }

// //     // if we wants to make cchanges in input field at that time we use this type code and call handleInputChange on each input filed by onchange
// //     const [bookData,setBookData] = useState({
// //         book_name: '',
// //         book_author: '',
// //         book_price: '',
// //     })

// //     const handleInputChange = (e) => {
// //             const {name , value} = e.target
// //             setBookData({
// //                 ...bookData,
// //                 [name] : value
// //             })
// //     }
    

// //     // npm install axios for call api from backend
// //     const handleFormSubmit = async(e) => {
// //          e.preventDefault() 
// //          try {
// //              const response = await axios.post("http://localhost:5000/api/addbook",bookData)
// //             //  console.log(response.data)
// //              console.log(response.data)
// //              setBookData({
// //                 book_name: '',
// //                 book_author: '',
// //                 book_price: '',
// //              })
// //          } catch (error) {
// //             console.error(error);
// //          }
// //     }
    


// //         return (
// //             <div>
// //                 <fieldset style={formFieldSet}>
// //                     <legend>Add Book</legend>
// //                         <tr>
// //                             <td>Book Name</td>
// //                             <td>
// //                                 <input type='text' name='book_name' value={bookData.book_name} onChange={handleInputChange}/>
// //                             </td>
// //                         </tr>
// //                         <tr>
// //                             <td>Book Author</td>
// //                             <td>
// //                                 <input type='text' name='book_author' value={bookData.book_author} onChange={handleInputChange}/>
// //                             </td>
// //                         </tr>
// //                         <tr>
// //                             <td>Book Price</td>
// //                             <td>
// //                                 <input type='text' name='book_price' value={bookData.book_price} onChange={handleInputChange}/>
// //                             </td>
// //                         </tr>
// //                         <tr>
// //                             <td colSpan={2} align='center'>
// //                                 <input type='button' value={"Add Book"} name='Addbook' onClick={handleFormSubmit}/>
// //                             </td>
// //                         </tr>
// //                 </fieldset>
// //             </div>
// //         )
// // }

// // export default CreateBook




// // import axios from 'axios';
// // import React, { useState } from 'react';

// // const CreateBook = () => {
// //   const formTable = {
// //     width: '300px',
// //     padding: '10px',
// //     margin: 'auto',
// //     borderRadius: '10px',
// //     marginTop: '20px',
// //   };

// //   const [bookData, setBookData] = useState({
// //     book_name: '',
// //     book_author: '',
// //     book_price: '',
// //   });

// //   const handleInputChange = (e) => {
   
// //     const { name, value } = e.target;
// //     setBookData({
// //       ...bookData,
// //       [name]: value,
// //     });
// //   };

// // //   const handleFormSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const response = await axios.post('http://localhost:5000/api/addbook', bookData);
// // //       console.log(response.data);
// // //       console.log("working")
// // //       setBookData({
// // //         book_name: '',
// // //         book_author: '',
// // //         book_price: '',
// // //       });
      
// // //     } catch (error) {
// // //       console.error(error);
// // //     }
// // //   };









// // const handleFormSubmit = async (e) => {
// //   e.preventDefault();
// //   try {
// //     console.log('Submitting form with data:', bookData);
// //     const response = await axios.post('http://localhost:5000/api/addbook', bookData);
// //     console.log('Response:', response.data);
// //     setBookData({
// //       book_name: '',
// //       book_author: '',
// //       book_price: '',
// //     });
// //   } catch (error) {
// //     console.error('Error submitting form:', error);
// //   }
// // };

// // return (
// //     <div>
// //       <fieldset style={formTable}>
// //         <legend>Add Book</legend>
// //         <table>
// //           <tbody>
// //             <tr>
// //               <td>Book Name</td>
// //               <td>
// //                 <input type="text" name="book_name" value={bookData.book_name} onChange={handleInputChange} />
// //               </td>
// //             </tr>
// //             <tr>
// //               <td>Book Author</td>
// //               <td>
// //                 <input type="text" name="book_author" value={bookData.book_author} onChange={handleInputChange} />
// //               </td>
// //             </tr>
// //             <tr>
// //               <td>Book Price</td>
// //               <td>
// //                 <input type="text" name="book_price" value={bookData.book_price} onChange={handleInputChange} />
// //               </td>
// //             </tr>
// //             <tr>
// //               <td colSpan={2} align="center">
// //                 <input type="button" value={'Add Book'} name="Addbook" onClick={handleFormSubmit} />
// //               </td>
// //             </tr>
// //           </tbody>
// //         </table>
// //       </fieldset>
// //     </div>
// //   );
// // };

// // export default CreateBook;



// // CreateBook.js

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const CreateBook = () => {
//   const navigate = useNavigate();
   


//   const formTable = {
//     width: '300px',
//     padding: '10px',
//     margin: 'auto',
//     borderRadius: '10px',
//     marginTop: '20px',
//   };

//   const view_result = {
//     position: "absolute",
//   top: "0",
//   right: "0",
//   marginTop: "150px" /* Adjust the margin as needed */
//   }

//   const [bookData, setBookData] = useState({
//     book_name: '',
//     book_author: '',
//     book_price: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setBookData({
//       ...bookData,
//       [name]: value,
//     });
//   };

//   // const handleFormSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     console.log('Submitting form with data:', bookData);
//   //     const response = await axios.post('http://localhost:5000/api/addbook', bookData);
//   //     console.log('Response:', response.data);
//   //     setBookData({
//   //       book_name: '',
//   //       book_author: '',
//   //       book_price: '',
//   //     });
//   //     navigate('/books'); // Navigate to /books after submitting the form
//   //     alert('Book added successfully!'); // You can show a modal or use a notification library
//   //   } catch (error) {
//   //     // console.error('Error submitting form:', error);
//   //     if (error.response && error.response.status === 400) {
//   //       alert('Error: ' + error.response.data.error); // Show the error from the backend
//   //     } else {
//   //         console.error('Error submitting form:', error);
//   //         alert('Error submitting form. Please try again.');
//   //     }
//   //   }
//   // };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log('Submitting form with data:', bookData);
//       const response = await axios.post('http://localhost:5000/api/addbook', bookData);
//       console.log('Response:', response.data);
//       setBookData({
//         book_name: '',
//         book_author: '',
//         book_price: '',
//       });
//       navigate('/books'); // Navigate to /books after submitting the form
//       alert('Book added successfully!');
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         alert('Error: ' + error.response.data.error); // Show the error from the backend
//       } else {
//         console.error('Error submitting form:', error);
//         alert('Error submitting form. Please try again.');
//       }
//     }
//   };
  
  



//   return (
//     <div>
//       <fieldset style={formTable}>
//         <legend>Add Book</legend>
//         <table>
//           <tbody>
//             <tr>
//               <td>Book Name</td>
//               <td>
//                 <input type="text" name="book_name" value={bookData.book_name} onChange={handleInputChange} />
//               </td>
//             </tr>
//             <tr>
//               <td>Book Author</td>
//               <td>
//                 <input type="text" name="book_author" value={bookData.book_author} onChange={handleInputChange} />
//               </td>
//             </tr>
//             <tr>
//               <td>Book Price</td>
//               <td>
//                 <input type="text" name="book_price" value={bookData.book_price} onChange={handleInputChange} />
//               </td>
//             </tr>
//             <tr>
//               <td colSpan={2} align="center">
//                 <input type="button" value={'Add Book'} name="Addbook" onClick={handleFormSubmit} />
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </fieldset>
//       {/* Add the View All Books button here */}
//       <button style={view_result} onClick={() => navigate('/books')}>View All Books</button>
//     </div>
//   );
// };

// export default CreateBook;








import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBook = () => {
  const navigate = useNavigate();

  const formTable = {
    width: '300px',
    padding: '10px',
    margin: 'auto',
    borderRadius: '10px',
    marginTop: '20px',
  };

  const view_result = {
        position: "absolute",
      top: "0",
      right: "0",
      marginTop: "150px" /* Adjust the margin as needed */
      }

  const [bookData, setBookData] = useState({
    book_name: '',
    book_author: '',
    book_price: '',
  });

  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    // Fetch the list of all books when the component mounts
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/viewbook');
        setAllBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Check if the book with the same name already exists
    const existingBook = allBooks.find((book) => book.book_name === bookData.book_name);

    if (existingBook) {
      alert('Error: Book with the same name already exists.');
    } else {
      try {
        console.log('Submitting form with data:', bookData);
        const response = await axios.post('http://localhost:5000/api/addbook', bookData);
        console.log('Response:', response.data);
        setBookData({
          book_name: '',
          book_author: '',
          book_price: '',
        });
        navigate('/books'); // Navigate to /books after submitting the form
        alert('Book added successfully!');
      } catch (error) {
        if (error.response && error.response.status === 400) {
          alert('Error: ' + error.response.data.error);
        } else {
          console.error('Error submitting form:', error);
          alert('Error submitting form. Please try again.');
        }
      }
    }
  };

  return (
    <div>
      <fieldset style={formTable}>
        <legend>Add Book</legend>
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
                <input type="button" value={'Add Book'} name="Addbook" onClick={handleFormSubmit} />
              </td>
            </tr>
          </tbody>
        </table>
      </fieldset>
      {/* Add the View All Books button here */}
      <button style={ view_result} onClick={() => navigate('/books')}>View All Books</button>
    </div>
  );
};

export default CreateBook;


