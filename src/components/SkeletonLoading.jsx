import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';

const skeletone = ['1','2','3','4','5','6','7','8'];


export default function Variants() {

  return (
  <>
          <Grid
              container
              direction="row"
              justifyContent="left"
              alignItems="left"
              spacing={0}
              mt={1}
              p={1}
          >
         <Typography variant="h6" component="h6"  color="gray" >
            Un momento porfavor, estoy cargando los proyectos...
         </Typography>
        </Grid>
        
        {skeletone.map((items, key) => ( 
                      <Grid 
                        key={key}
                        xs={12}
                        md={3}
                        lg={3}
                        item
                      >  
                      
                <Stack spacing={3}>
                  <Skeleton variant="text" />
                  <Skeleton variant="circular" width={40} height={40} />
                  <Skeleton variant="rectangular" width={240} height={118} />
                </Stack>
              
         </Grid>
       )) }
       
</>
  );
}