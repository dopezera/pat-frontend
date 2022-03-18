import React, { useState } from 'react'
import {Button, Drawer, Grid} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import NumberRed from '../Images/number1-red.png'
import { Box } from '@mui/system';

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

function DrawerComp() {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <>
            <Drawer open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <Grid container direction='column'>
                    <Grid item>
                        <Box container display='flex' justifyContent='center' padding={2}>
                            <img width='25px' height='50px' src={NumberRed} alt='1'/>
                        </Box>
                    </Grid>
                    {pages.map((page, index) => {
                        return <>
                            <Grid item key={index}>
                                <Button href={page.path}>{page.name}</Button>
                            </Grid>
                        </>
                    })}
                </Grid>

            </Drawer>
            <IconButton sx={{ color: 'white'}} onClick={() => { setOpenDrawer(!openDrawer)}}>
                <MenuIcon />
            </IconButton>
        </>
    )
}

export default DrawerComp;