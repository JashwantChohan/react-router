import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams()
  return (
    <div className='bg-gray-500 m-4 rounded text-white p-4 flex justify-center'>
      <h1>user: {userid}</h1>
    </div>
  )
}

export default User
