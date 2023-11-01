/* eslint-disable no-unused-vars */
import { useState } from 'react'
import React from 'react'
import axios from 'axios'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const DeleteBooks = () => {

  const [loading,setLoading] = useState(true);
  const navigate = useNavigate();
  const {id} = useParams();

  const handleDeleteBooks = () => {
    setLoading(true);
    axios.delete(`http://localhost:5555/books/${id}`)
    .then(() => {
      setLoading(false);
      navigate('/');
    })
    .catch((error) => {
      setLoading(false);
      alert(error.message);
      console.log(error);
    })
  }

  return (
    <div>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {
        loading ? <Spinner /> : ''

      }
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className='text-2xl'>Are You sure that you want to delete this book?</h3>
        <button className='p-4 bg-red-600 m-8 w-full' onClick={handleDeleteBooks}>
          I agree to delete
        </button>
      </div>
    </div>
  )
}

export default DeleteBooks