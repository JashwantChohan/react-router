import React, { useState, useEffect } from 'react'

function Github() {
    const [data, setdata] = useState([])
    useEffect(() => {
      fetch ('https://api.github.com/users/JashwantChohan')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setdata(data)
      })
    }, [])
    
  return (
    <div className='text-center m-4 rounded bg-gray-500 text-white flex justify-center items-center p-4 '>
      <img src={data.avatar_url} alt="Git picture" width={100} className='rounded mx-4'  />
      Github Followers : {data.followers}
    </div>
  )
}

export default Github
