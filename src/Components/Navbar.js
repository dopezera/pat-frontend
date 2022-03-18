import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Grid, Tabs, useMediaQuery, useTheme } from '@material-ui/core';
import Tab from '@mui/material/Tab';

import NumberRed from '../Images/number1-red.png'

import { useState } from 'react';
import DrawerComp from './DrawerComp';
import { Link } from 'react-router-dom';

const pages = [
  {
      name: 'Perfil',
      path: '/profile'
  },
  {
      name: 'Eventos',
      path: '/events'
  },
  {
      name: 'Histórico',
      path: '/matches'
  },
]



const ResponsiveAppBar = (params) => {
  const [value, setValue] = useState(0)
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <AppBar position="static" sx={{background: '#333'}}>
      <Toolbar>
        { 
          isMatch? (
            <>
            <Grid direction='row' alignItems='center' justifyContent='space-between' container spacing={2}>
              <Grid item >
                <img width='25px' height='50px' src={NumberRed} alt='1'/>
              </Grid>
               <Grid item>
                 <Typography>MIX CS GO</Typography>
               </Grid>
                <Grid item>
                  <DrawerComp></DrawerComp>
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <Tabs textColor='white' value={value} >
              <img width='25px' height='50px' src={NumberRed} alt='1'/>
              
              { 
                pages.map((page, index) => {
                  return <Tab label={page.name} href={page.path}/>
                }) 
              
              }

            </Tabs>
            
            <Box sx={{marginLeft: 'auto'}}>
              <Button variant='contained'>Logout</Button>
            </Box>
            </>
          )
        
        }
        
      </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;
