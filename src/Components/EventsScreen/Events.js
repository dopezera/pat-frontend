import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import FavoriteIcon from '@mui/icons-material/Favorite';
import Badge from '@mui/material/Badge';
import { Button, CardActionArea, Grid } from '@mui/material';

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

import { Box } from '@mui/system';

import { useNavigate } from "react-router-dom";

import Axios from 'axios';
import config from '../../config'

export default function Events(props) {

  let navigate = useNavigate()

  const [checkedIn, setCheckedIn] = React.useState(false)  
  const [allCheckins, setAllCheckins] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  const handleCheckIn = () => {
    if (checkedIn) {
      return
    }
    Axios.get(`${config.BACKEND_URL}/api/events/checkin/${props.events.id}`, { withCredentials: true })
    .then(response => {
      if (response.data.id) {
        return setCheckedIn(true)
      }
      alert(response.data)
      return
    })
  }

  const handleCheckOut = () => {
    const isUserCheckedIn = allCheckins.find(checkIfCheckedIn)
    console.log(isUserCheckedIn.id)
    if(isUserCheckedIn) {
      Axios.get(`${config.BACKEND_URL}/api/events/checkin/delete/${isUserCheckedIn.id}`, { withCredentials: true })
      .then(response => {
        if (response.data.id) {
          setCheckedIn(false)
          return alert('Checkin cancelado!!')
        }
        alert(response.data)
        return
      })
    }
  }

  const checkIfCheckedIn = (checkin) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo')) 
    return (checkin.userSteamId === userInfo.steamid)
  }
  
  React.useEffect(() => {
    Axios.get(`${config.BACKEND_URL}/api/events/checkins/${props.events.id}`, { withCredentials: true })
    .then((response) => {
      setAllCheckins(response.data)
      const isUserCheckedIn = response.data.find(checkIfCheckedIn)
      if(isUserCheckedIn) {
        setCheckedIn(true)
      } else {
        setCheckedIn(false)
      }
      setLoading(false)
    }).catch(err => {
      if(err.response.status === 401) {
        navigate('/login')
      } 
    })
  }, [props.events.id, checkedIn])

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[100] }} aria-label="recipe" alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx3NRpWq875XdnYw285UobozdDDvWd1m91kw&usqp=CAU" />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.events.description}
        subheader={"Março 16, 2022"+" Status: "+props.events.status}
      />
      <CardMedia
        component="img"
        height="194"
        image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.zonared.com%2Fimages%2Fjuegos%2Fportada%2F1000%2F1595-h.jpg&f=1&nofb=1"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" align='center'>
          Uma guerra milenar entre os Oldschool e os choro preso acontecerá mais uma vez.
        </Typography>
      </CardContent>

        <CardActionArea>
        <Typography variant="body2">
        Jogadores confirmados
      </Typography>
        </CardActionArea>
      

        <Grid container padding={2} justifyContent={'center'}>

          {
            loading ? <h1>Loading</h1> : props.events === undefined ? <h1>Nenhum evento encontrado</h1> : 
            allCheckins.map(checkin => {  
              return (
                <Grid item padding={1.5}>
                  <Badge badgeContent={checkin.userlvl} color="primary">
                    <Avatar alt="Travis Howard" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffiverr-res.cloudinary.com%2Fimages%2Ft_main1%2Cq_auto%2Cf_auto%2Cq_auto%2Cf_auto%2Fgigs2%2F131460353%2Foriginal%2Ff024197fe2791e33340746aef8607ec117748759%2Fdo-a-gaming-avatar.png&f=1&nofb=1"/>
                  </Badge>
                </Grid>
              )
            }) 
          }

        </Grid>

        { checkedIn ? 
        <Grid container justifyContent='center' padding={2}> 
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            paddingRight: 2.5,
            }} 
            justifyContent='center'>
          <Button onClick={() => {
          handleCheckOut()
        }}><CheckBoxIcon color='success'></CheckBoxIcon></Button> 
          <Typography variant='subtitle' align='center'>Checkin realizado!</Typography>
        </Box>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: 2.5,
            }} 
            justifyContent='center'>
          <Button variant='contained' href='/teams'>JOGAR<PlayCircleIcon sx={{paddingLeft: 1}}></PlayCircleIcon></Button>
        </Box>
        </Grid> 
        :
        <Box sx={{
          display: 'flex',
          paddingBottom: 2
          }} 
          justifyContent='center'>
        <Button variant='contained' onClick={() => {
          handleCheckIn()
        }}>Check-in</Button> 
        </Box>
        }
    </Card>
  );
}
