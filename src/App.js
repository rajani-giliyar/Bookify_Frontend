
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateBook from './components/CreateBook';
import AllBooks from './components/AllBooks';
import UpdateBook from './components/UpdateBook';


function App() {
  return (
    <div >
      <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<CreateBook/>} />
                <Route exact path="/books" element={<AllBooks/>}/>
                <Route exact path="/updatebook/:bid" element={<UpdateBook/>}/>
            </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;




