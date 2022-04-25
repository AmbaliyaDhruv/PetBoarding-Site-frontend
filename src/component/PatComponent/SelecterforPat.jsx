import React,{useEffect} from 'react';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';



export default function SelecterforPat({centerId}) {
  const userId=useSelector(state=>state.adminData.Id)
  const [pat,setpat]=React.useState([]);
  const [data,setdata]=React.useState({
        name:"",
        OnBording:"",
        offBording:"",
 })

 
 
 useEffect(()=>{
     axios.get(`https://patboarding.herokuapp.com/pats?userId=${userId}`).then(res=>{
        setpat(res.data)
         
     }).catch(err=>{
         console.log(err)
     } )
 },[])
  const handleChange = (event) => {
      
    let {id,value}=event.target
    if(id===undefined){
        id="name"
        setdata({
            ...data,
            [id]:value,
            centerId:centerId,
            userId:userId
        })
    }
    else{
        setdata({
            ...data,
            [id]:value
        })
      
    }
   
  };
  const handleSubmit=(event)=>{
    event.preventDefault();
   
    axios.post("https://patboarding.herokuapp.com/booking",data).then(res=>{
        alert("Booking Successfully")

    }).catch(err=>{
        alert("Booking Failed Try Again")
    })
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
      <FormControl  sx={{  width:"100%"}}>
    
        <InputLabel id="demo-multiple-name-label">Pat</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          name="name"
          value={data.name}
          label="Age"
          onChange={handleChange}
          required
          
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        
          {pat.length>0?pat.map((item,index)=>{
                return(
                    <MenuItem key={item._id} value={item.name}>{item.name}</MenuItem>
                )
          }):<MenuItem value="">No Pat</MenuItem>}
          
          
         </Select>
        <TextField
          id="OnBording"
          label="Onbording Date"
          type="date"
          onChange={handleChange}
          sx={{width:"100%", marginTop:"20px"}}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
       <TextField
          id="offBording"
          label="Offbording Date"
          type="date"
          onChange={handleChange}
          sx={{width:"100%", marginTop:"20px"}}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
          <Button type="submit" style={{marginTop:"20px"}}  variant="contained" color="primary" fullWidth>Submit</Button>
      </FormControl>
      </form>
    </div>
  );
}