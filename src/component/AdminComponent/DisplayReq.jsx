import * as React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';
export default function DisplayReq({ data }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const acceptreq=(id)=>{
       axios.patch(`https://patboarding.herokuapp.com/booking/${id}`,{status:"approved"}).then(res=>{
            alert("Request Accepted")
            return(
                <div>
                    <h1>Loading</h1>
                </div>
            )
          }).catch(err=>{
     alert("Request Not Accepted")
     
 }) 
    }

    return (
        <div>
            <Accordion sx={{ marginTop: "20px" }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        User Name <b>{data.userId.username}</b>
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Care House <b>{data.centerId.name}</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>

                        OnBording Date <b>{data.OnBording}</b> <br />
                        OffBording Date <b>{data.offBording}</b> <br />
                        Address <b>{data.centerId.address}</b><b>{data.centerId.city}</b>  <br />
                        Pat Nick Name <b>{data.name}</b> <br />
                        Clint Number <b>{data.userId.number}</b> <br />
                    </Typography>
                 <br />
                    {data.status==="pending" ? <Link style={{textDecoration:"none"}} to={"/"}><Button variant="contained" onClick={()=>{acceptreq(data._id)}} sx={{marginBottom:"20px"}} color="success">
                 Accept
               </Button></Link>:<Button variant="contained" onClick={()=>{acceptreq(data._id)}} sx={{marginBottom:"20px"}} disabled color="success">
                 Accept
               </Button>  }
                    
                    {data.status === "pending" ? <Alert severity="error">Booking is Pending Not Approve by Care House</Alert> : <Alert severity="success">Booking is Done Approve by Care House</Alert>}


                </AccordionDetails>
            </Accordion>

        </div>
    );
}