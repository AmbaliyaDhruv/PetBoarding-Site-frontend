import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PatAdd from './PatAdd';
import PatTable from './PatTable';

export default function Pats() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="All Pats" value="1" />
            <Tab label="Add more" value="2" />
            <Tab label="Booking Status" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><PatTable/></TabPanel>
        <TabPanel value="2"><PatAdd/></TabPanel>
        <TabPanel value="3">Booking Status</TabPanel>
      </TabContext>
    </Box>
  );
}