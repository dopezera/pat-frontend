import { useEffect, useState  } from "react";
import Events from "../Components/EventsScreen/Events";
import EventsPresentationBox from "../Components/EventsScreen/EventsPresentationBox";
import EventsScreenContainer from "../Components/EventsScreen/EventsScreenContainer";

import {Button, Box} from "@material-ui/core";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Axios from 'axios';
import config from '../config'
import { useNavigate } from "react-router-dom";

function EventsScreen() {

  let navigate = useNavigate()

  const [allEvents, setAllEvents] = useState([])
  const [loading, setLoading] = useState(true)

  const [current, setCurrent] = useState(0)

  function incrementCurrent() {
      if(current === allEvents.length-1) {
        return
      }
      setCurrent(current => current+1)
    }
  

  function decrementCurrent() {
    if(current === 0) {
      return
    }
    setCurrent(current => current-1)
  }


  useEffect(() => {
    console.log('useEffect nervoso')
    Axios.get(`${config.BACKEND_URL}/api/events`, { withCredentials: true }).then((response) => {
      setAllEvents(response.data)
      setLoading(false)
    }).catch(err => {
      if(err.response.status === 401) {
        navigate('/login')
      } 
    })
  }, [])

  if(loading) {
    return <div>Loading Events</div>
  }

  return (
    <>
       <EventsPresentationBox>
        <Events events={allEvents[current]}></Events>
      </EventsPresentationBox>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        }} 
        justifyContent='center'>
        <Button onClick={() => decrementCurrent()}><ArrowBackIcon/></Button>
        <Button onClick={() => incrementCurrent()}><ArrowForwardIcon/></Button>
        <p>Evento: {current}</p>
        <p>Total: {allEvents.length-1}</p>

      </Box>
    </>
     
  )
}

export default EventsScreen;
