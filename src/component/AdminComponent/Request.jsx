import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import axios from 'axios'
import DisplayReq from './DisplayReq';

export default function Request() {
  const [value, setValue] = React.useState('1');
  const [data,setData]=useState([])
  
   useEffect(()=>{
       axios.get("http://localhost:8080/booking/?status=pending").then(res=>{
           setData(res.data)
       }).catch(err=>{
           console.log(err)
       })
   },[])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(data)
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Request" value="1" />
          
          </TabList>
        </Box>
        <TabPanel value="1">
            {data.length>0?data.map((item,i)=>{
                return <DisplayReq key={i} data={item}/>
            }):<h1>No Any Pending Request</h1>}
            </TabPanel>
       
      </TabContext>
    </Box>
  );
}