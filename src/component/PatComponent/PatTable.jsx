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
import { patAdd } from "../../action/PatAdd";
import { Link } from 'react-router-dom';

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


export default function PatTable() {
    
    const row = useSelector(state=>state.dataForPat)
    const {Id}=useSelector(state=>state.adminData)

    const dispatch = useDispatch();
    const getdata=()=>{
       axios.get(`https://patboarding.herokuapp.com/pats?userId=${Id}`).then(res=>{
          
           dispatch(patAdd(res.data))
       }).catch(err=>{
           console.log(err)
       } )
    }

    useEffect(()=>{
        getdata();
      
    },[])

   const deleteData=(id)=>{
        axios.delete(`https://patboarding.herokuapp.com/pats/${id}`).then(res=>{
            getdata();
        }).catch(err=>{
            console.log(err)
        })
   }


  return (
    
    <TableContainer style={{width:"70%",margin:"auto",marginTop:"80px"}} component={Paper}>
     
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">ID</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Type</StyledTableCell>
            <StyledTableCell align="center">Weight</StyledTableCell>
            <StyledTableCell align="center">Age</StyledTableCell>
            <StyledTableCell align="center">More</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
            
           
          </TableRow>
        </TableHead>
        <TableBody>
          {row.length>0?row.map((e,i)=>{
              return  <StyledTableRow key={e._id} sx={{cursor:"pointer"}}>
              <StyledTableCell align="left">{i+1}</StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {e.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{e.type}</StyledTableCell>
                  <StyledTableCell align="center">{e.weight}</StyledTableCell>
                  <StyledTableCell align="center">{e.age}</StyledTableCell>
                  <StyledTableCell align="center"><Link to={`/listing/pats/${e._id}`}>More</Link></StyledTableCell>
                  <StyledTableCell align="center" onClick={()=>{deleteData(e._id)}}>Delete</StyledTableCell>
                  
                  
                </StyledTableRow>
          }):<StyledTableRow>No Data</StyledTableRow>}
         
            
        </TableBody>
      </Table>
    </TableContainer>
  );
}
