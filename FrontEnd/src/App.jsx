/* eslint-disable no-unused-vars */
import React,{useEffect} from 'react'
// import axios from 'axios';
import { Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBooks from './pages/CreateBooks';
import DeleteBooks from './pages/DeleteBooks';
import EditBooks from './pages/EditBooks';
import ShowBooks from './pages/ShowBooks';

const App = () => {

  

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBooks />} />
      <Route path='/books/delete/:id' element={<DeleteBooks />} />
      <Route path='/books/edit/:id' element={<EditBooks />} />
      <Route path='/books/details/:id' element={<ShowBooks />} />
    </Routes>
  )
}

export default App