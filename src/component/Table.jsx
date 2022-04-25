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
import { Link } from 'react-router-dom';
import SelectLabels from './Selecter';
import axios from 'axios';
import PaginationForTable from './Pagination';
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
    const {AdminSatatus}=useSelector(state=>state.adminData)
    const [page,setPage]=useState(1)
    const [count,setcount]=useState(1)
    console.log(page)
    const dispatch = useDispatch();
    const getdata=()=>{
       axios.get(`https://patboarding.herokuapp.com/create?page=${page}`).then(res=>{
          
           dispatch(getData(res.data))
           
       }).catch(err=>{
           console.log(err)
       } )
       axios.get("https://patboarding.herokuapp.com/create/count").then(res=>{
            setcount(Math.ceil((res.data.count)/4))
       })
    }

    useEffect(()=>{
        getdata();
        
    },[page])
 console.log(count)
   const deleteData=(id)=>{
        axios.delete(`https://patboarding.herokuapp.com/create/${id}`).then(res=>{
            getdata();
        }).catch(err=>{
            console.log(err)
        })
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
            <StyledTableCell align="center">More</StyledTableCell>
            {AdminSatatus?<StyledTableCell align="center">Delete</StyledTableCell>:null}
            {AdminSatatus?<StyledTableCell align="center">Edit</StyledTableCell>:null}
           
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map((e,i)=>{
              return  <StyledTableRow key={e._id} sx={{cursor:"pointer"}}>
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
                  <StyledTableCell align="center"><Link to={`/listing/${e._id}`}>More</Link></StyledTableCell>
                  {AdminSatatus?<StyledTableCell align="center" onClick={()=>{deleteData(e._id)}}>Delete</StyledTableCell>:null}
                  {AdminSatatus?<StyledTableCell align="center"><Link to={`/listing/Edit/${e._id}`}>Edit</Link></StyledTableCell>:null}
                  
                </StyledTableRow>
          })}
         
            
        </TableBody>
      </Table>
      <PaginationForTable page={setPage} count={count}/>
    </TableContainer>
  );
}
