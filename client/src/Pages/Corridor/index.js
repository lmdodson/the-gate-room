import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Hall from '../../components/Hall';
import "./style.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;



  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box div={3}>
          <Typography component={'span'} variant={'body2'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'grey',
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="d-flex flex-column h-100">
      <Hall />
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Life Support" {...a11yProps(0)} />
        <Tab label="Computer Core" {...a11yProps(1)} />
        <Tab label="Elevator" {...a11yProps(2)} />
        <Tab label="" {...a11yProps(3)} />
        <Tab label="Flight Deck" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className="nav-text">
          <p>
            Life Support. The unglamourous side of space travel. "Do I even know how these systems work?"
          </p>
        </div>
        <div>
          <Button className="danger">    
            <Link to="/lifesupport"> Enter </Link>
          </Button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="nav-text">
          <p>
            This room has to be important somehow. 
          </p>
        </div>
        <div>
          <Button className="danger">    
            <Link to="/computercore"> Enter </Link>
          </Button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="nav-text">
          <p>
            Something is off about the elevator. 
          </p>
        </div>
        <div>
          <Button className="danger">    
            <Link to="/elevator"> Enter </Link>
          </Button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="nav-text">
          <p>
            A shimmer at the end of the hall catches your eye. 
          </p><p>
            You approach and notice what appeared to be a wall was different somehow. 
          </p><p>
            You hover your hand just over it and can feel the pulsing energy as your fingers quiver. Maybe this is a trick, maybe it's a clue.
          </p>
        </div>
        <div>
          <Button className="danger">    
            <Link to="/cabin"> Do you dare? </Link>
          </Button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div className="nav-text">
          <p>
           Are you sure you wish to return?
          </p>
        </div>
        <div>
          <Button className="danger">    
            <Link to="/flightdeck"> Enter </Link>
          </Button>
        </div>
      </TabPanel>

    </div>
    </div>
  );
}
