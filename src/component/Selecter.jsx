import React,{useEffect} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import { useSelector, useDispatch} from 'react-redux';
import { getData } from '../action/getData';

export default function SelectLabels() {
  const [age, setAge] = React.useState('');
  const [num,setNum]=React.useState('');
    const [data, setdata] = React.useState([]);
//   const row = useSelector(state=>state.dataForTable)
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setAge(event.target.value);
    if(event.target.value===''){
        axios.get("http://localhost:8080/create").then(res=>{
             dispatch(getData(res.data))
         }).catch(err=>{
             console.log(err)
         } )
    }
    else{
    axios.get(`http://localhost:8080/create/?city=${event.target.value}`).then(res=>{
        
        dispatch(getData(res.data))
    }).catch(err=>{
        console.log(err)
    })
    }
  };

  const getdata=()=>{
    axios.get("http://localhost:8080/create").then(res=>{
       setdata(res.data)
        
    }).catch(err=>{
        console.log(err)
    } )
 }


 const handleChangeforSort=(event)=>{
     console.log(event.target.value)
    setNum(event.target.value);
    if(event.target.value===''){
        axios.get(`http://localhost:8080/create/?city=${age}`).then(res=>{
             dispatch(getData(res.data))
         }).catch(err=>{
             console.log(err)
         } )
    }
    else{
    axios.get(`http://localhost:8080/create/?city=${age}&costPerDay=${event.target.value}`).then(res=>{
        
        dispatch(getData(res.data))
    }).catch(err=>{
        console.log(err)
    })
    }
  
 }

 useEffect(()=>{
     getdata();
   
 },[])

  return (
    <div style={{display:"flex",gap:"20px"}}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {data.map((item,index)=>{
            return(
              <MenuItem key={index} value={item.city}>{item.city}</MenuItem>
            )
          })}
         </Select>
        <FormHelperText>Filter by city</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={num}
          label="num"
          onChange={handleChangeforSort}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="-1">High to Low</MenuItem>
          <MenuItem value="1">Low to High</MenuItem>
         </Select>
        <FormHelperText>Sort by Price</FormHelperText>
      </FormControl>
     
    </div>
  );
}