import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './Filters.module.css';

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}



function Filters({filters, selectedFilterIndex, setSelectedFilterIndex}) {
   

  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <div>
         <Tabs value={selectedFilterIndex} onChange={handleChange} aria-label="basic tabs example"
         TabIndicatorProps={{
            style:{
                backgroundColor:'var(--color-primary)'
            },
         }}>
            {filters.map((element,index)=>(
                <Tab 
                key={index}
                className={styles.tab}
                label={element.label}
                {...a11yProps(index)}
                />
            ))}
            
            </Tabs>
           {
             filters.map((element,index)=>(
                <TabPanel
                key={index} value={element.label} index={index}/>
            ))
           }
    </div>
  );
}

export default Filters;