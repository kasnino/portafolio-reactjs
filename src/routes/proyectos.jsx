import Box  from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Cards from '../components/Card';
import SkeletonLoading from '../components/SkeletonLoading'
import { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';


export default function Proyectos() {
    const [proyectos, setProyectos] = useState([])
    const [isLoading, setLoading] = useState(true)
    const  BASE_URL = './proyectos.json'

    
   useEffect(()=>{
    setLoading(true)
     const fetchProjects = async () => {
        try {
          await fetch(`${BASE_URL}`)
          .then((res)=>res.json())
          .then((data)=>{
             setProyectos(data.projects)
             setLoading(false)
             })
        } catch (err) {
          console.error(err);
        }
    };
    fetchProjects();
      },[]);


       if (!proyectos) return null;
    return (
      <main style={{ padding: "0rem 0" }}>
           <Typography variant="h3" component="h3"  color="gray" >
            {`<`} Proyectos {`/>`}
         </Typography>
        <Box sx={{ borderRadius: 4 }} elevation={24} style={{height:'100%', backgroundColor: "" }}>
             <Grid 
                container
                direction="row"
                justifyContent="center"
                alignItems="left"
                spacing={4}
                mt={5}
                p={2}
             >
               { isLoading ? <SkeletonLoading/> : '' }
                  {proyectos.map((projects, key) => ( 
                      <Grid 
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
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