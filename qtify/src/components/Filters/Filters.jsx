import React from 'react';
import { Tab, Tabs } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './Filters.module.css';

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
          <div className="tabpanel-wrapper">
            <Typography>{children}</Typography>
          </div>
        </Box>
      )}
    </div>
  );
}

const Filters = ({ filters, selectedFilterIndex, setSelectedFilterIndex }) => {
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
      <Tabs
        value={selectedFilterIndex}
        onChange={handleChange}
        aria-label="basic tabs example"
        TabIndicatorProps={{
          style: {
            backgroundColor: 'var(--color-primary)',
          },
        }}
      >
        {filters.map((ele, index) => (
          <Tab className={styles.tab} key={index} label={ele.label} {...a11yProps(index)} />
        ))}
      </Tabs>
      {filters.map((ele, index) => (
        <TabPanel key={index} value={selectedFilterIndex} index={index}/>
         
      ))}
    </div>
  );
};

export default Filters;