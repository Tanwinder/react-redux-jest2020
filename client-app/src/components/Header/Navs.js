import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom'

export default function Navs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // <Paper>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="inherit"
        className='navs'
        onChange={handleChange}
        aria-label=""
      >
        <Tab label={<Link to="/events" label="Events" >Events</Link>}></Tab>
        <Tab label={<Link to="/ab" label="AB" >AB</Link>} />
        <Tab label={<Link to="/bc" label="BC" >BC</Link>} />
      </Tabs>
    // </Paper>
  );
}