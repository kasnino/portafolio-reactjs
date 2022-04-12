import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Cards from './Card';
import AvatarPerfil from './AvatarPerfil';
import { Link } from "react-router-dom";


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

export default function UnstyledTabsCustomized() {
  function a11yProps(index) {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    }
  };

  const NavBarItem = {
    '/home': 0,
    '/perfil': 1,
    '/proyectos': 2,
  }

  const [value, setValue] = React.useState(NavBarItem[location.pathname])

	const handleChange = (newValue, event) => {
		setValue(newValue)
	}

	const navigateTo = pathname => {
		history.push(pathname)
		handleChange(NavBarItem[pathname])
	}

    const [isLoading, setIsLoading] = useState(true);         
    const  BASE_URL = './proyectos.json'
    const [page, setPage] = useState(1);
    
    const handleChange = (event, value) => {
    setPage(value);
  };

    useEffect(()=>{
     const fetchProjects = async () => {
        try {
          await fetch(`${BASE_URL}`)
          .then((res)=>res.json())
          .then((data)=>{
            setProyectos(data.projects)
            setIsLoading(false) 
             })
        } catch (err) {
          console.error(err);
        }
    };
    fetchProjects();
      },[]);
       if (!proyectos) return null;

  return (
    <TabsUnstyled defaultValue={0}>
        <Grid 
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            mt={5}
        >
       <TabsList sx={{ border: 1, borderColor: 'primary.main' }} elevation={24} p={5}> 
          {/* <Link to="/perfil">Perfil</Link>
          <Link to="/proyectos">Proyectos</Link> */}
         <Tab>Tecnologias</Tab>
          <Tab>Challenge</Tab>
          <Tab>Ingles</Tab> 
       </TabsList> 
      </Grid>
        <TabPanel variant="fullwidth"  value={0}>
           {/* hacer la animacin */}
             <Box  sx={{ borderRadius: 4 }} elevation={24} style={{height:'100%', backgroundColor: "#001e3c" }}>
             <Grid 
                container
                direction="row"
                justifyContent="center"
                alignItems="top"
                spacing={2}
                mt={5}
                p={0}
             >
                <AvatarPerfil />
            </Grid>
             <Grid 
                container
                direction="row"
                justifyContent="left"
                alignItems="left"
                spacing={2}
                mt={5}
                p={5}
             >
               hola
               </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={1}>
     
      </TabPanel>
      {/* <TabPanel value={2}>Third content</TabPanel>
      <TabPanel value={3}>Second content</TabPanel>
      <TabPanel value={4}>Third content</TabPanel>
    </TabsUnstyled> */}
  );
}
