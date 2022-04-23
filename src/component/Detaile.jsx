import React from 'react'
import DetaileCard from './card'
import Navbar from './Navbar'
import { useParams } from 'react-router'
function Detaile() {
 const {id} = useParams()
 
  return (
    <>
     <Navbar/>
     <DetaileCard id={id}/>
    </>
   
  )
}

export default Detaile