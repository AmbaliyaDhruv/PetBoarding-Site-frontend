
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
import FormHelperText from '@mui/material/FormHelperText';
import {Link} from 'react-router-dom'
function SignUpform() {
    // const check = useSelector(state=>state.createCenter)
    // const dispatch = useDispatch()

    const [data,setdata]=useState({
        username:"",
        firstname:"",
        email:"",
        number:"",
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
            <Grid xs={12} sm={6} item>
                <TextField id='username' value={data.username} style={{marginTop:"20px"}} onChange={hendleChangesforData} label="Username" placeholder="Enter username" fullWidth variant="outlined" required/>
                 </Grid>
                 <Grid xs={12} sm={6} item>
                <TextField id='firstname' value={data.firstname} style={{marginTop:"20px"}}  onChange={hendleChangesforData} label="First Name" placeholder="Enter firstname" fullWidth variant="outlined" required/>
                 </Grid>
                 <Grid xs={12} sm={6}  item>
                <TextField id='email' type="email" value={data.email}  style={{marginTop:"20px"}}  onChange={hendleChangesforData} label="Email" placeholder="Enter Your Email" fullWidth variant="outlined" required/>
                 </Grid>
                 <Grid xs={12} sm={6}  item>
                <TextField type="number"  value={data.number}  style={{marginTop:"20px"}}  id='number' onChange={hendleChangesforData} label="number" placeholder="Enter you Phone Number" fullWidth variant="outlined" required/>
                 </Grid>
                 <Grid xs={12} sm={6}  item>
                <TextField type="password" value={data.password}  style={{marginTop:"20px"}}  id='password' onChange={hendleChangesforData} label="Password" placeholder="Enter your Password" fullWidth variant="outlined"  required/>
                 </Grid>
                 <Grid xs={12} sm={6} item>
                  <Button type="submit" style={{marginTop:"20px"}}  variant="contained" color="primary" fullWidth>Submit</Button>
                 </Grid>
                 </form>
           </CardContent>
           <Link to="/login">
           <FormHelperText style={{marginLeft:"3%",fontSize:"1em",color:"red",cursor:"pointer"}}>You Have already account</FormHelperText>
           </Link>
           
       </Card>
      
      </>
   
  )
}

export default SignUpform