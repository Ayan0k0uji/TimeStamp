import { React } from 'react';
import EventCard from '../event-card';
import s from './event-list.module.scss';

function EventList(props) {
    return (
        <div className='d-flex justify-content-center'>

            <div className={s.eventList}>
                <div className={'row'}>
                    {props.events.map((event) =>
                        <div className='col-4'>
                            <EventCard event={event} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default EventList;
