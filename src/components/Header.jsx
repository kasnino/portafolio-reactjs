import * as React from 'react';
import { Component, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';


export default function Header() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

        return (
            <div className="Header-app">
                 <Tabs 
                 value={value} 
                 onChange={handleChange} 
                 aria-label="icon label tabs example "
                 textColor="secondary"
                 indicatorColor="secondary"
                 >
                <Tab icon={<PhoneIcon color="secondary"/>} label="RECENTS" />
                <Tab icon={<FavoriteIcon color="secondary"/>} label="FAVORITES" />
                <Tab icon={<PersonPinIcon color="secondary"/>} label="NEARBY" />
                </Tabs>
            </div>
        );
    
}

