import React from 'react'
import { useState } from 'react'
import { axiosGet } from '../helper/axiosInstance';
import { useEffect } from 'react';

const GetComments = () => {
  const [data, setdata] = useState([]);
  
  const fetchData = async() =>{
    let result  =  await axiosGet.get()
    setdata(result.data)
    console.log(data);
  }

  useEffect(() => {
     fetchData() 
  },[]);

  return (
    <div>
       {data.map((x)=>{
        return(
          <>
          <h2>{x.name}</h2>
          <p>{x.email}</p>
          <br/>
          <br/>
          </>
        )
       })}

    </div>
  )
}

export default GetComments