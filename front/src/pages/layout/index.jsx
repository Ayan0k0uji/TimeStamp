import { Header } from './header';
import { SearchBar } from '../../components/search';
import { Category } from '../../components/category';
import { Date } from '../../components/date';
import Events from '../../components/events';
import {React, useEffect, useState} from 'react';
import axios from 'axios';
import { useMemo } from 'react';
import s from './s.module.scss';
import serverHost from '../../variables';
import { EventsSearchContext } from '../../context/context';
import e from 'cors';

const divStyle = {
  backgroundColor: '#ECDFFA',
  height: '100%'
};

const Layout = () => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchDate, setSearchDate] = useState('');

  const searchedEvents = useMemo(() => {
    return events.filter(event => event.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery, events])

  const fetchedEvents = useMemo(() => {
    let fetchQuery = `http://${serverHost}/events/search`;
    let dateParameters = null;

    if(searchDate[0] && searchDate[1]) {
      dateParameters = `date_from=" + ${searchDate[0]} + "&date_to=" + ${searchDate[1]}`;
    }

    if(dateParameters) {
      fetchQuery += '?' + dateParameters;
    }

    getEvents(fetchQuery);
  },[searchDate]); 

  useEffect(() => {
    getEvents();
  }, []);

  async function getEvents(query) {
    const response = await axios.get(query);
    setEvents(response.data.data);
  }

  return (
    <EventsSearchContext.Provider value={{
      searchDate,
      setSearchDate
    }}>
    <div style={divStyle}>
      <Header />
      <div className={"container"}>
        <div className={' row' } style={{ marginTop: '30px' }}>
          
          <div className={'col-2'}>
          <Date />
          </div>
          <div className={'col-8'}>
            <SearchBar
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)
            }
            />
          </div>
        </div>
        <Events
          events = {searchedEvents}
        />
      </div>
    </div>
    </EventsSearchContext.Provider>
  );
};

export default Layout;