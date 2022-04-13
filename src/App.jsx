import * as React from 'react';
import './App.css'
import Tabs  from './components/Tabs';
import Box  from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Perfil from "./routes/perfil";
import Proyectos from "./routes/proyectos";
import Home from "./routes/home";
import { Routes, Route, } from "react-router-dom";

export default function App() {

  return (
    <React.Fragment>
    <Container fixed p={0} m={0}>
          <div className="App">
                <Grid mt={5}>
                <Tabs/>
                    <div className="pruebita">
                    <Box  sx={{ borderRadius: 4 }} elevation={24} style={{height:'100%', backgroundColor: "#001e3c" }}>
                      <Grid container
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          spacing={2}
                          mt={5}
                          p={1}
                      >
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="perfil" element={<Perfil />} />
                            <Route path="proyectos" element={<Proyectos />} />
                        </Routes>
                        </Grid>
                        </Box>
                      </div>
                </Grid>
          </div>
    </Container>
    </React.Fragment>
  );
}

