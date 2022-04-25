
import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import Statuscard from './Statuscard'

function BookingStatus() {
   const [data,setData]=useState([])
   const Id=useSelector(state=>state.adminData.Id)
    useEffect(()=>{
        axios.get(`http://localhost:8080/booking?userId=${Id}`).then(res=>{
            setData(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    console.log(data)
  return (
    <>
    {data.length>0?data.map((item,i)=>{
          return <Statuscard key={i} data={item}/>
    }):<h1>No Booking</h1>}
  
    </>
  )
}

export default BookingStatus