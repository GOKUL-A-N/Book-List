// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const BackButton = ({destination = '/'}) => {
  return (
    <div>
        <Link to={destination} className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>back</Link>
    </div>
  )
}

export default BackButton