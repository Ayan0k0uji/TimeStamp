import { Header } from './header';
import { SearchBar } from '../../components/search';
import { Price } from '../../components/price';
import { Date } from '../../components/date';
import Events from '../../components/events';
import {React, useEffect, useState} from 'react';
import axios from 'axios';
import { useMemo } from 'react';

const divStyle = {
  backgroundColor: '#ECDFFA',
  height: '1024px',
};

const Layout = () => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const searchedEvents = useMemo(() => {
    return events.filter(event => event.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery, events])

  useEffect(() => {
    getEvents();
  }, []);

  async function getEvents() {
    const response = await axios.get("http://localhost:3001/events/search?city=Samara");
    setEvents(response.data.data);
  }

  return (
    <div style={divStyle}>
      <Header />
      <div className={"container"}>
        <div className={' row'} style={{ marginTop: '30px' }}>
          <div className={'col-2'}>
            <Date />
          </div>
          <div className={'col-2'}>
            <Price />
          </div>
          <div className={'col-6'}>
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
  );
};

export default Layout;