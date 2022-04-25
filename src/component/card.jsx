import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import PropTypes from 'prop-types';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import SelecterforPat from './PatComponent/SelecterforPat';




const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2}} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function DetaileCard({id}) {
    const [data,setData] = useState({})
    const [open, setOpen] = React.useState(false);
  
    const userId=useSelector(state=>state.adminData.Id)
  
    const handleClickOpen = () => {
   

      userId===""? alert("login First"): setOpen(true)
    
    };
    const handleClose = () => {
      setOpen(false);
    };
 
    useEffect(()=>{
        axios.get(`https://patboarding.herokuapp.com/create/${id}`).then(res=>{
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
        Booking
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
           Booking
        </BootstrapDialogTitle>
        <DialogContent  dividers>
          {/* Booking form */}
       <Box sx={{width:"300px"}}>
       <SelecterforPat centerId={id}/>
       </Box>
      
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
    </Box>
  );
}