import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState} from 'react'
import Grid from '@mui/material/Grid';

const blue = {
  50: 'transparent',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#001e3c',
  500: '#001e3c',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color:transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    outline: 2px solid ${blue[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  background-color: ${blue[500]};
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  position:relative;
`;

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  }
};

export default function UnstyledTabsCustomized() {

  const NavBarItem = {
    '/home': 0,
    '/perfil': 1,
    '/proyectos': 2,
  }
   
   const navigate = useNavigate();
   const location = useLocation();
   const [value, setValue] = useState(NavBarItem[location.pathname])

	const handleChange = (newValue, event) => {
		setValue(newValue)
	}

	const navigateTo = pathname => {
    console.log(":"+ pathname)
		navigate.push(pathname)
		handleChange(NavBarItem[pathname])
	}

  return (
    <TabsUnstyled defaultValue={0}>
        <Grid 
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            mt={5}
        >
       <TabsList 
            value={value}
            onChange={handleChange}
            className={classes.tabs}
            variant='scrollable'
            scrollButtons='on'
            indicatorColor='secondary'
            textColor='inherit'
            aria-label='scrollable force tabs example'
       sx={{ border: 1, borderColor: 'primary.main' }} elevation={24} p={5}> 
          <Tab {...a11yProps(0)}
						onClick={() => navigateTo('/perfil')}>perfil</Tab>
          <Tab {...a11yProps(1)}
						onClick={() => navigateTo('/proyectos')}>Proyectos</Tab>
          <Tab {...a11yProps(2)}
						onClick={() => navigateTo('/home')}>Home</Tab> 
       </TabsList> 
      </Grid>
    </TabsUnstyled> 
  );
}
