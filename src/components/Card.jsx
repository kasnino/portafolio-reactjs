import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import TecnologiasGroup from './Tecnologias'
import Grid from '@mui/material/Grid';
import { Add } from '@mui/icons-material';
import '../App.css'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

export default function ActionAreaCard(props) {

  return (
    //    style={{
    //   border: '2px solid #0072E5'
    // }}
    <Card 
     className="prueba"
     elevation={12} sx={{ maxWidth: 305 }}
     style={{backgroundColor: "#0a1929"}}
    >
      <CardActionArea>
      
        <CardMedia
        
          component="img"
          height="150"
          image={props.projects.ruta}
          alt="green iguana"
        />
       
        <CardContent style={{backgroundColor: "#0a1929"}} >
          <Typography gutterBottom variant="h5" color="lightgray" component="div">
          {props.projects.empresa}  
          </Typography>
        
          <Typography variant="body2" color="gray">
          {props.projects.subtitle}  
          </Typography>
          <Typography variant="body1" color="gray">
        
          </Typography>
           <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={0}
              mt={1}
              p={1}
             
          >
          <Stack direction="row" spacing={2}>
      <Chip   style={{color: "gray"}} variant="outlined" avatar={<Avatar><Add/></Avatar>} label="Demo" />
      <Chip
        avatar={<Avatar alt="Natacha" src="./src/icon/GitHub-Logo.wine.svg" />}
        label="Github"
        variant="outlined"
        style={{color: "gray"}}
      />
    </Stack>
    </Grid>
          <Grid
              container
              direction="row"
              justifyContent="right"
              alignItems="right"
              spacing={2}
              mt={1}
              p={1}
          >
          <TecnologiasGroup tecnologias={props.projects.tecnologiaImg}/>
          
        
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
