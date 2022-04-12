import Box  from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AvatarPerfil from '../components/AvatarPerfil';
export default function Perfil() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>prefil</h2>
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
      </main>
    );
  }