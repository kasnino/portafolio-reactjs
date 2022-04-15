import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function GroupAvatars(props) {
  return (
    <AvatarGroup max={7}   md={{ width:20, height:20, border: 1, borderColor: 'gray'}}>
         {props.tecnologias.map((tecnologo, key) => ( 
             <Avatar  
             style={{
                border: '0.1px solid #80BFFF',
                background: '#0a1929'
             }}
             md={{ width:20, height:20, border: 0.1, borderColor: 'secundary'}}
             sx={{ width:20, height:20, border: 0.1, borderColor: 'secundary'}}
             alt={tecnologo} key={key} src={`./icon/${tecnologo}`} />
         ))}
    </AvatarGroup>
  );
}
