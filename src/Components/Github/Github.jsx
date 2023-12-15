import React, { useEffect, useState } from 'react'

const Github = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/SattyamSamania')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    })
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl '>Github Followers: {data.followers}
    <img src={data.avatar_url}  alt="Github Picture"   className='w-[200px] rounded-lg'/>
     </div>
  )
}

export default Github