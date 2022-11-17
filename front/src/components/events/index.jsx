import {React, useEffect, useState} from 'react';
import axios from 'axios';
import EventCard from './event-card';
import EventList from './event-list';

function Events() {
  const [events, setEvents] = useState([]);

  const city = 'Samara';

  useEffect(() => {
    getEvents();
  }, []);

  async function getEvents() {
    const response = await axios.get("http://localhost:3001/events/search?city=Samara");
    console.log(response.data.data);  
    setEvents(response.data.data);
  }

  return (
    <div className="Event">
      <EventList events={events}/>
    </div>
  );
}

export default Events;