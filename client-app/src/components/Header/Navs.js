import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom'

import {navsArr} from '../../Routes';

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
        {
          navsArr && navsArr.map(item => <Tab key={item.name} label={<Link to={item.path} label="Events" >{item.name}</Link>}></Tab>)
        }
      </Tabs>
    // </Paper>
  );
}