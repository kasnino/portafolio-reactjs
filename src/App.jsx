import * as React from 'react';
import { useState} from 'react'
import './App.css'
import { FaBeer } from 'react-icons/fa';
import  Tabs  from './components/Tabs'
import  Products  from './components/Products'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export default function App() {
  const [count, SetCount] = useState(2)

  return (
    <React.Fragment>
    <Container fixed p={0} m={0}>
    <div className="App">
      <Grid 
        mt={5}
        >
      <Tabs/>
      </Grid>
      {/* <Products count={count}/> */}
    </div>
    </Container>
    </React.Fragment>
  );
}

