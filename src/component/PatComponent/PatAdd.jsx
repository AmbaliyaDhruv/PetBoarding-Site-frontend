
import React,{useState} from 'react'
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useSelector,useDispatch} from 'react-redux'

import {patData} from "../../action/patData"


function PatAdd() {

const check = useSelector(state=>state.createPatData)
const Id=useSelector(state=>state.adminData.Id)

    const dispatch = useDispatch()

  

    const hendleChangesforData=(e)=>{
        const {id,value}=e.target
    
        dispatch(patData({
            ...check,
            userId:Id,
            [id]:value
        }))

    }

    const hendleSubmit=(e)=>{
        e.preventDefault()
     dispatch(patData(check))
       axios.post("http://localhost:8080/pats",check).then(res=>{
           console.log(res.data)
           alert("Data added successfully")
           dispatch(patData({
            name:"",
            type:"",
            age:"",
            weight:"",
        }))
       }).catch(err=>{
           alert("Data not added")
           dispatch(patData({
            name:"",
            type:"",
            age:"",
            weight:"",
        }))
       })
   
    }

    
  return (
      <>
       <Typography gutterBottom variant="h3" align="center">
        Add Your Pat Details
       </Typography>
       <Card style={{border:"2px solid black" ,width:"60%",margin:"auto"}}>
           <CardContent >
         <form onSubmit={hendleSubmit}>
            <Grid xs={12} sm={6} item>
                <TextField id='name' value={check.name} style={{marginTop:"20px"}} onChange={hendleChangesforData} label="Nick Name" placeholder="Enter Pat Name" fullWidth variant="outlined" required/>
                 </Grid>
                 <Grid xs={12} sm={6} item>
                <TextField id='type' value={check.type} style={{marginTop:"20px"}}  onChange={hendleChangesforData} label="Pat Type" placeholder="Enter Type Pat" fullWidth variant="outlined" required/>
                 </Grid>
                
                 <Grid xs={12} sm={6}  item>
                <TextField type="number"  value={check.weight}  style={{marginTop:"20px"}}  id='weight' onChange={hendleChangesforData} label="Weight" placeholder="Enter Weight Of Pat" fullWidth variant="outlined" required/>
                 </Grid>
                 <Grid xs={12} sm={6}  item>
                <TextField type="number"  value={check.age}  style={{marginTop:"20px"}}  id='age' onChange={hendleChangesforData} label="Age" placeholder="Enter Age of Pat" fullWidth variant="outlined" required/>
                 </Grid>
                 <Grid xs={12} sm={6} item>
                  <Button type="submit" style={{marginTop:"20px"}}  variant="contained" color="primary" fullWidth>Submit</Button>
                 </Grid>
                 </form>
           </CardContent>
       </Card>
      
      </>
   
  )
}

export default PatAdd