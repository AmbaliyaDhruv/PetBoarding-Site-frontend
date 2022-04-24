
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useParams} from 'react-router-dom'


function Edit() {
    const [check,setdata]=useState({})
    const {id}=useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8080/create/${id}`).then(res=>{
            setdata(res.data)
        }).catch(err=>{ console.log(err)}   )
    },[])
    const hendleSubmit=(e)=>{
        e.preventDefault()
        axios.patch(`http://localhost:8080/create/${id}`,check).then(res=>{
            alert("Data updated successfully")
        }).catch(err=>{
            alert("Data not updated")
            console.log(err.meassage)
        })
    }

     
    const hendleChangesforData=(e)=>{
        const {id,value}=e.target
        setdata({
            ...check,
            [id]:value
        })
   

    }
    let check1=Object.keys(check).length
    if(check1===0){
        return(
            <div>
                <h1>Loading</h1>
            </div>
        )
    }
   
  return (
      <>
       <Typography gutterBottom variant="h3" align="center">
        Edit PateCare center Details
       </Typography>
       <Card style={{border:"2px solid black" ,width:"60%",margin:"auto"}}>
           <CardContent >
         <form onSubmit={hendleSubmit}>
            <Grid xs={12} sm={6} item>
                <TextField id='name' value={check.name}  style={{marginTop:"20px"}} onChange={hendleChangesforData} label="Center Name" placeholder="Enter center Name" fullWidth variant="outlined" required/>
                 </Grid>
                 <Grid xs={12} sm={6} item>
                <TextField id='city' value={check.city} style={{marginTop:"20px"}}  onChange={hendleChangesforData} label="City" placeholder="Enter city name" fullWidth variant="outlined" required/>
                 </Grid>
                 <Grid xs={12} sm={6}  item>
                <TextField id='address' value={check.address}  style={{marginTop:"20px"}} onChange={hendleChangesforData} label="Address" placeholder="Enter Address" fullWidth variant="outlined" required/>
                 </Grid>
                 <Grid xs={12} sm={6}  item>
                <TextField type="number"  value={check.capacity}  style={{marginTop:"20px"}} onChange={hendleChangesforData} id='capacity'  label="Capacity" placeholder="Capacity of center" fullWidth variant="outlined" required/>
                 </Grid>
                 <Grid xs={12} sm={6}  item>
                <TextField type="number"  value={check.costPerDay}  style={{marginTop:"20px"}} onChange={hendleChangesforData}  id='costPerDay'  label="Cost per day" placeholder="Enter Cost per day" fullWidth variant="outlined" required/>
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

export default Edit