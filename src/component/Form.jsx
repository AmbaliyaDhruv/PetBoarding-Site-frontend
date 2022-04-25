
import React,{useState} from 'react'
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useSelector,useDispatch} from 'react-redux'
import {addData} from "../action/addData"


function Form() {
    const check = useSelector(state=>state.createCenter)
    const dispatch = useDispatch()

    // const [data,setdata]=useState({
    //     name:"",
    //     city:"",
    //     address:"",
    //     capacity:"",
    //     costPerDay:"",

    // })

    const hendleChangesforData=(e)=>{
        const {id,value}=e.target
        // setdata({
        //     ...data,
        //     [id]:value
        // })
        dispatch(addData({
            ...check,
            [id]:value
        }))

    }

    const hendleSubmit=(e)=>{
        e.preventDefault()
     dispatch(addData(check))
       axios.post("https://patboarding.herokuapp.com/create",check).then(res=>{
           console.log(res.data)
           alert("Data added successfully")
           dispatch(addData({
            name:"",
            city:"",
            address:"",
            capacity:"",
            costPerDay:"",
        }))
       }).catch(err=>{
           alert("Data not added")
           dispatch(addData({
            name:"",
            city:"",
            address:"",
            capacity:"",
            costPerDay:"",
        }))
       })
   
    }

    
  return (
      <>
       <Typography gutterBottom variant="h3" align="center">
        Create PateCare center
       </Typography>
       <Card style={{border:"2px solid black" ,width:"60%",margin:"auto"}}>
           <CardContent >
         <form onSubmit={hendleSubmit}>
            <Grid xs={12} sm={6} item>
                <TextField id='name' value={check.name} style={{marginTop:"20px"}} onChange={hendleChangesforData} label="Center Name" placeholder="Enter center Name" fullWidth variant="outlined" required/>
                 </Grid>
                 <Grid xs={12} sm={6} item>
                <TextField id='city' value={check.city} style={{marginTop:"20px"}}  onChange={hendleChangesforData} label="City" placeholder="Enter city name" fullWidth variant="outlined" required/>
                 </Grid>
                 <Grid xs={12} sm={6}  item>
                <TextField id='address' value={check.address}  style={{marginTop:"20px"}}  onChange={hendleChangesforData} label="Address" placeholder="Enter Address" fullWidth variant="outlined" required/>
                 </Grid>
                 <Grid xs={12} sm={6}  item>
                <TextField type="number"  value={check.capacity}  style={{marginTop:"20px"}}  id='capacity' onChange={hendleChangesforData} label="Capacity" placeholder="Capacity of center" fullWidth variant="outlined" required/>
                 </Grid>
                 <Grid xs={12} sm={6}  item>
                <TextField type="number"  value={check.costPerDay}  style={{marginTop:"20px"}}  id='costPerDay' onChange={hendleChangesforData} label="Cost per day" placeholder="Enter Cost per day" fullWidth variant="outlined" required/>
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

export default Form