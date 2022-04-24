import React from 'react'
import Form from './Form'
import {useSelector} from 'react-redux';
import Alert from '@mui/material/Alert';

function create() {
  const {AdminSatatus}=useSelector(state=>state.adminData)
  
  return (
      <>
      {AdminSatatus?<Form/>: <Alert variant="filled" severity="error">Only Admin Create a Data</Alert>}
     </>
    
  )
}

export default create