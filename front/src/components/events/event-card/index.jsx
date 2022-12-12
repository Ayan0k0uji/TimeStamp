import s from './event-card.module.scss';
import people from './people.png';
import favoriteIconImgActive from './favorite-icon-active.svg'; // это иконка добавления в избранное, если мер-е в него добавлено
import favoriteIconImg from './favorite-icon.svg';
import {formatDate} from '../../../helpers/date';

export const EventCard = (props) => {
    let eventName;

    if(props.event.name !== undefined) {
        eventName = String(props.event.name);
        eventName = eventName.length > 32 ? eventName.substring(0, 32) + "..." : eventName ;
    }

    return (
        <div className={s.eventCard}>
            <div className={s.imgBox}>
                <img src={people} alt="" />
                <img src={favoriteIconImg} className={s.favoriteIcon} ></img>
            </div>
            <h6 className={s.eventCardHeader}>{eventName}</h6>
            <span className={s.eventCardLocation}>Online</span>
            <span className={s.eventCardDate}>{formatDate(props.event.date)}</span>
            {/* <div className={s.eventCardButton}>
                <span className={s.eventCardPrice}>{props.event.price}</span>
            </div> */}
        </div>
    );
};

export default EventCard; 