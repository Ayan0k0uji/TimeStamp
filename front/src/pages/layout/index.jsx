import { Header } from './header';
import { SearchBar } from '../../components/search';
import { Category } from '../../components/category';
import { Date } from '../../components/date';
import Events from '../../components/events';
import {React, useContext, useEffect, useState} from 'react';
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

  const {
    searchDate,
    setSearchDate,
    searchPlace,
    setSearchPlace,
  } = useContext((EventsSearchContext));

  const searchedEvents = useMemo(() => {
    return events.filter(event => event.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery, events])

  const fetchedEvents = useMemo(() => {
    let fetchQuery = `http://${serverHost}/events/search`;
    let dateParameters = null;
    let placeParameter = null;

    if(searchDate[0] && searchDate[1]) {
      dateParameters = `date_from=" + ${searchDate[0]} + "&date_to=" + ${searchDate[1]}`;
    }

    if(searchPlace) {
      placeParameter = `city=${searchPlace}`;
    }

    if(dateParameters && placeParameter) {
      fetchQuery += '?' + dateParameters + "&" + placeParameter;
    } else if(dateParameters){
      fetchQuery += '?' + dateParameters;
    } else if(placeParameter) {
      fetchQuery += '?' + placeParameter;
    }

    getEvents(fetchQuery);
  },[searchDate, searchPlace]);

  useEffect(() => {
    getEvents();
    setSearchPlace('');
  }, []);

  async function getEvents(query) {
    //const response = await axios.get(query);
    const response = {
      "status": true,
      "data": [
        {
          "id": "78b6d9e7-c782-47d9-9686-45dbbd086a57",
          "name": "Python",
          "date": "2022-12-11",
          "time": "1970-01-01T03:25:45.654Z",
          "country": "Russia",
          "city": "Samara",
          "venue": "some place",
          "ageLimit": 18,
          "availablePlaces": 1000,
          "description": "aaaa",
          "shortDescription": "dcfvghbjnkml",
          "price": 200,
          "category": "IT",
          "poster": "poster-url",
          "createdAt": "2022-12-12T17:29:11.495Z",
          "updatedAt": "2022-12-12T17:29:11.495Z"
        },
        {
          "id": "61fa00db-2177-4b9c-8a3d-8445d2f7ff9a",
          "name": "Pythondtfagkhlgknfjbdhvghfsdfasgdhfjgkhkjhk,mlsfgdfsagdhfjghj ",
          "date": "2022-12-11",
          "time": "1970-01-01T03:25:45.654Z",
          "country": "Russia",
          "city": "Samara",
          "venue": "some place",
          "ageLimit": 18,
          "availablePlaces": 1000,
          "description": "aaaa",
          "shortDescription": "dcfvghbjnkml",
          "price": 200,
          "category": "IT",
          "poster": "poster-url",
          "createdAt": "2022-12-12T18:24:28.985Z",
          "updatedAt": "2022-12-12T18:24:28.985Z"
        },
        {
          "id": "1d73ff38-0dbd-4a12-9f83-4de347e633fa",
          "name": "Pythondtfagkhlgk nfjbdhvghfsdfasgdh fjgkhkjhk,ml sfgdfsagdhfjghj ",
          "date": "2022-12-11",
          "time": "1970-01-01T03:25:45.654Z",
          "country": "Russia",
          "city": "Samara",
          "venue": "some place",
          "ageLimit": 18,
          "availablePlaces": 1000,
          "description": "aaaa",
          "shortDescription": "dcfvghbjnkml",
          "price": 200,
          "category": "IT",
          "poster": "poster-url",
          "createdAt": "2022-12-12T18:25:00.708Z",
          "updatedAt": "2022-12-12T18:25:00.708Z"
        },
        {
          "id": "1d73ff38-0dbd-4a12-9f83-4de347e633fa",
          "name": "Pythondtfagkhlgk nfjbdhvghfsdfasgdh fjgkhkjhk,ml sfgdfsagdhfjghj ",
          "date": "2022-12-11",
          "time": "1970-01-01T03:25:45.654Z",
          "country": "Russia",
          "city": "Samara",
          "venue": "some place",
          "ageLimit": 18,
          "category": "Медицина",
          "availablePlaces": 1000,
          "description": "aaaa",
          "shortDescription": "dcfvghbjnkml",
          "price": 200,
          "poster": "poster-url",
          "createdAt": "2022-12-12T18:25:00.708Z",
          "updatedAt": "2022-12-12T18:25:00.708Z"
        },
        {
          "id": "1d73ff38-0dbd-4a12-9f83-4de347e633fa",
          "name": "Pythondtfagkhlgk nfjbdhvghfsdfasgdh fjgkhkjhk,ml sfgdfsagdhfjghj ",
          "date": "2022-12-11",
          "time": "1970-01-01T03:25:45.654Z",
          "country": "Russia",
          "city": "Samara",
          "venue": "some place",
          "ageLimit": 18,
          "category": "Строительство",
          "availablePlaces": 1000,
          "description": "aaaa",
          "shortDescription": "Pythondtfagkhlgk nfjbdhvghfsdfasgdh fjgkhkjhk,ml",
          "price": 200,
          "poster": "poster-url",
          "createdAt": "2022-12-12T18:25:00.708Z",
          "updatedAt": "2022-12-12T18:25:00.708Z"
        }
      ]
    }
    setEvents(response.data); // при реальной работе заменить на response.data.data
  }

  return (
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
  );
};

export default Layout;