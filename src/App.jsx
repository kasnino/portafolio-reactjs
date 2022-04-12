import * as React from 'react';
import { useState} from 'react'
import './App.css'
import Tabs  from './components/Tabs'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Perfil from "./routes/perfil";
import Proyectos from "./routes/proyectos";
import Home from "./routes/home";
import { Routes, Route, } from "react-router-dom";

export default function App() {
  const [count, SetCount] = useState(2)

  return (
    <React.Fragment>
    <Container fixed p={0} m={0}>
          <div className="App">
                <Grid mt={5}>
                <Tabs/>
                   
                    <div>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="perfil" element={<Perfil />} />
                            <Route path="proyectos" element={<Proyectos />} />
                        </Routes>
                      </div>
                    
                </Grid>
          </div>
    </Container>
    </React.Fragment>
  );
}

