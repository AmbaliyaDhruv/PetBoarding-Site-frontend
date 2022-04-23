import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';




export default function DetaileCard({id}) {
    const [data,setData] = useState({})
    
    useEffect(()=>{
        axios.get(`http://localhost:8080/create/${id}`).then(res=>{
            setData(res.data)
        })
    },[])
    const card = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
             {data.city}
            </Typography>
            <Typography variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Cost Per Day:- {data.costPerDay}
              <br/>
              Capacity:-{data.capacity}
            </Typography>
            <Typography variant="body2">
              Address:- {data.address}
            </Typography>
          </CardContent>
      
        </React.Fragment>
      );
      
  return (
    <Box sx={{ minWidth: 275, width:"30%" , textAlign:"center",margin:"auto", marginTop:"50px",borderRadius:"40px"}}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}