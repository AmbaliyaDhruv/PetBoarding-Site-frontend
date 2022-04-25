import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function PaginationForTable({page,count}) {
  
 const handlechange=(num)=>{
   page(num);
 }
  return (
    <Stack spacing={2}>
      <Pagination
        onChange={e=>handlechange(e.target.textContent)}
        count={count}
        renderItem={(item) => (
          <PaginationItem
        
            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}