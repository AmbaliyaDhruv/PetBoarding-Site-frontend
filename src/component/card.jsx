import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DetaileCard({id}) {
    const [data,setData] = useState({})
    
    const [open, setOpen] = React.useState(false);
    
      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
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
      <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Book Now
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Booking
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Done
            </Button>
          </Toolbar>
        </AppBar>
        <Card variant="outlined">{card}</Card>
      </Dialog>
    </div>
    </Box>
  );
}