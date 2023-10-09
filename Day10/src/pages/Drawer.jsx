import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom'; // Import React Router Link
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentIcon from '@mui/icons-material/Payment';
import HistoryIcon from '@mui/icons-material/History';
import OverviewIcon from '@mui/icons-material/Receipt';
import '../assets/css/drawer.css';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (
    <Box
      sx={{width: 250,
          backgroundColor: '#e4eded',
          display: 'flex',          
          flexDirection: 'column', 
          alignItems: 'center',    
          justifyContent: 'center',
          height: '100%',     
          color: 'black',
          fontWeight: '900'  
      }}
      role="presentation"
      onClick={toggleDrawer('left', false)}
      onKeyDown={toggleDrawer('left', false)}
    >
      <List>
        <ListItem key="Profile" disablePadding>
          <ListItemButton component={Link} to="/profile"> 
            <ListItemIcon>
              <OverviewIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Account Information" disablePadding>
          <ListItemButton component={Link} to="/account-information"> 
            <ListItemIcon>
              <AccountBalanceIcon />
            </ListItemIcon>
            <ListItemText primary="Account Information" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Transaction History" disablePadding>
          <ListItemButton component={Link} to="/transaction-history"> 
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary="Transaction History" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Loan Overview" disablePadding>
          <ListItemButton component={Link} to="/loan-overview">
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText primary="Loan Overview" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <div onClick={toggleDrawer('left', true)}>
        <img src={require('../assets/img/arrow.png')} alt="Open Left Drawer" className='menu_icon' />
      </div>
      <Drawer
        anchor="left"
        open={state['left']}
        onClose={toggleDrawer('left', false)}
      >
        {list}
      </Drawer>
    </div>
  );
}
