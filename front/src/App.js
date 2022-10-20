import {React, useEffect, useState} from 'react';
import axios from 'axios';
import EventCard from './components/event/event-card';
import EventList from './components/event/event-list';

function App() {
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
    <div className="App">
      <EventList events={events}/>
    </div>
  );
}

export default App;
