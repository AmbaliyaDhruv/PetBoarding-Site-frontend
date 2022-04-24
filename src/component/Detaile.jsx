import React from 'react'
import DetaileCard from './card'

import { useParams } from 'react-router'
function Detaile() {
 const {id} = useParams()
 
  return (
    <>
    
     <DetaileCard id={id}/>
    </>
   
  )
}

export default Detaile