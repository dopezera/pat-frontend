import { useState } from "react";
import Events from "../Components/EventsScreen/Events";
import EventsPresentationBox from "../Components/EventsScreen/EventsPresentationBox";
import EventsScreenContainer from "../Components/EventsScreen/EventsScreenContainer";



function EventsScreen() {

  const [events, setEvents] = useState([
    {
      id: 1,
      name: 'mix cs go 1'
    },
    {
      id: 2,
      name: 'mix cs go 2'
    }
  ])

  return (
    <EventsScreenContainer>
      <EventsPresentationBox events={events}>
        <Events></Events>
      </EventsPresentationBox>
    </EventsScreenContainer>
  )
}

export default EventsScreen;
