
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
import { Link } from 'react-router-dom';
import FormHelperText from '@mui/material/FormHelperText';

function Loginform() {
    // const check = useSelector(state=>state.createCenter)
    // const dispatch = useDispatch()

    const [data,setdata]=useState({
         email:"",
        password:"",

    })

    const hendleChangesforData=(e)=>{
        const {id,value}=e.target
        setdata({
            ...data,
            [id]:value
        })
        
          

    }

    const hendleSubmit=(e)=>{
        e.preventDefault()
    console.log(data)
   
    }

    
  return (
      <>
       <Typography gutterBottom variant="h3" align="center">
       Welcom to Patcare
       </Typography>
       <Card style={{border:"2px solid black" ,width:"60%",margin:"auto"}}>
           <CardContent >
         <form onSubmit={hendleSubmit}>
         
                 
                 <Grid xs={12} sm={6}  item>
                <TextField id='email' type="email" value={data.email}  style={{marginTop:"20px"}}  onChange={hendleChangesforData} label="Email" placeholder="Enter Your Email" fullWidth variant="outlined" required/>
                 </Grid>
                  <Grid xs={12} sm={6}  item>
                <TextField type="password" value={data.password}  style={{marginTop:"20px"}}  id='password' onChange={hendleChangesforData} label="Password" placeholder="Enter your Password" fullWidth variant="outlined"  required/>
                 </Grid>
                 <Grid xs={12} sm={6} item>
                  <Button type="submit" style={{marginTop:"20px"}}  variant="contained" color="primary" fullWidth>Submit</Button>
                 </Grid>
                 </form>
           </CardContent>
           <Link to={"/signup"}> <FormHelperText style={{marginLeft:"3%",fontSize:"1em",color:"red",cursor:"pointer"}}>You Have already account</FormHelperText></Link>
       </Card>
      
      </>
   
  )
}

export default Loginform