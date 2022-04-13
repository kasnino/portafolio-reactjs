import Box  from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Cards from '../components/Card';
import { useState, useEffect } from "react";

export default function Proyectos() {
    const [proyectos, setProyectos] = useState([])
    const  BASE_URL = './proyectos.json'

    
   useEffect(()=>{
     const fetchProjects = async () => {
        try {
          await fetch(`${BASE_URL}`)
          .then((res)=>res.json())
          .then((data)=>{
             setProyectos(data.projects)
             })
        } catch (err) {
          console.error(err);
        }
    };
    fetchProjects();
      },[]);


       if (!proyectos) return null;
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>proyectos</h2>
        <Box sx={{ borderRadius: 4 }} elevation={24} style={{height:'100%', backgroundColor: "#001e3c" }}>
             <Grid 
                container
                direction="row"
                justifyContent="left"
                alignItems="left"
                spacing={4}
                mt={5}
                p={5}
             >
                  {proyectos.map((projects, key) => ( 
                      <Grid 
                        key={key}
                        xs={12}
                        md={3}
                        lg={3}
                        item
                      >  
                      <Cards projects={projects}/>
                    </Grid>
                 ))}  
            </Grid>
        </Box>
      </main>
    );
  }