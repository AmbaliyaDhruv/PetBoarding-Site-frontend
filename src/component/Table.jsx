import { useEffect,useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useSelector,useDispatch} from 'react-redux'
import { getData } from '../action/getData';
import SelectLabels from './Selecter';
import axios from 'axios';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function Tables() {
    
    const row = useSelector(state=>state.dataForTable)
   
    const dispatch = useDispatch();
    const getdata=()=>{
       axios.get("http://localhost:8080/create").then(res=>{
          
           dispatch(getData(res.data))
       }).catch(err=>{
           console.log(err)
       } )
    }

    useEffect(()=>{
        getdata();
      
    },[])

    const heandlemove=(id)=>{
        window.location.href=`/listing/${id}`
    }


  return (
    
    <TableContainer style={{width:"70%",margin:"auto",marginTop:"80px"}} component={Paper}>
       <SelectLabels/>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">ID</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">City</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Capacity</StyledTableCell>
            <StyledTableCell align="center">Cost per day</StyledTableCell>
            <StyledTableCell align="center">Verified</StyledTableCell>
            <StyledTableCell align="center">Rating</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map((e,i)=>{
              return  <StyledTableRow key={e._id} sx={{cursor:"pointer"}} onClick={()=>{heandlemove(e._id)}}>
              <StyledTableCell align="left">{i+1}</StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {e.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{e.city}</StyledTableCell>
                  <StyledTableCell align="center">{e.address}</StyledTableCell>
                  <StyledTableCell align="center">{e.capacity}</StyledTableCell>
                  <StyledTableCell align="center">{e.costPerDay}</StyledTableCell>
                  <StyledTableCell align="center">Yes</StyledTableCell>
                  <StyledTableCell align="center">5</StyledTableCell>
                </StyledTableRow>
          })}
         
            
        </TableBody>
      </Table>
    </TableContainer>
  );
}
