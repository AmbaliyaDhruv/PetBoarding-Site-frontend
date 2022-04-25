
import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import { useParams } from 'react-router'
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import axios from 'axios';


function PatDetails() {
    const {id} = useParams()
    const [data,setData] = useState({})
    useEffect(()=>{
        axios.get(`http://localhost:8080/pats/${id}`).then(res=>{
            setData(res.data)
        })
    },[])
   
    let check=Object.keys(data).length
    if(check===0){
        return(
            <div>
                <h1>Loading</h1>
            </div>
        )
    }
    
    const card = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
             {data.type}
            </Typography>
            <Typography variant="h5" component="div">
             <b>{data.name}</b> 
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Weight:- <b>{data.weight}</b>
              <br/>
              Age:- <b>{data.age}</b>
            </Typography>
          
            
          </CardContent>
      
      
        </React.Fragment>
      );
  return (
      <>
   
    <Box sx={{ minWidth: 275, width:"30%" , textAlign:"center",margin:"auto", marginTop:"50px",borderRadius:"40px"}}>
    <Card variant="outlined">{card}</Card>
    </Box>
      </>
    
  )
}

export default PatDetails