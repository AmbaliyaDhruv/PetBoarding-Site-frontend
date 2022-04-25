import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Alert from '@mui/material/Alert';
export default function Statuscard({data}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion sx={{marginTop:"20px"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Pat Name <b>{data.name}</b>
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
             Care House <b>{data.centerId.name}</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          OnBording Date <b>{data.OnBording}</b> <br/>
          OffBording Date <b>{data.offBording}</b> <br/>
          Address <b>{data.centerId.address}</b> <br/>
          </Typography>
          {data.status==="pending"? <Alert severity="error">Booking is Pending Not Approve by Care House</Alert>:<Alert severity="success">Booking is Done Approve by Care House</Alert>}
         
          
        </AccordionDetails>
      </Accordion>
    
    </div>
  );
}