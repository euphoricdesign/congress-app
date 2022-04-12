// import React from "react";
import { useEffect, useState } from 'react'
import axios from '../axios'


const useMembers = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)


  const fetchMembers = async () => {
    try {
      const res = await axios.get(`/congress/v1/117/senate/members.json`)
      const {data} = res
      const members = data.results[0]
      setData([...members.members]);
      setLoading(false)
    } catch(err) {
      console.log(err)
    }
  }  

  useEffect(()=>{
    fetchMembers()
  }, [])
  
  return {data, loading}

}



export default useMembers