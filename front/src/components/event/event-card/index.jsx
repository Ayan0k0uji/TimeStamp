import s from './event-card.module.scss';
import people from './people.png';
import favoriteIconImgActive from './favorite-icon-active.svg'; // это иконка добавления в избранное, если мер-е в него добавлено
import favoriteIconImg from './favorite-icon.svg';

export const EventCard = () => {
    return (
        <div className={s.eventCard}>
            <div className={s.imgBox}>
                <img src={people} alt="" />
                <img src={favoriteIconImg} className={s.favoriteIcon} ></img>
            </div>
            <h6 className={s.eventCardHeader}>Майнкрафт в час ночи</h6>
            <span className={s.eventCardLocation}>Online</span>
            <span className={s.eventCardDate}>1 сентября 20:00</span>
            <div className={s.eventCardButton}>
                <span className={s.eventCardPrice}>Бесплатно</span>
            </div>
        </div>
    );
};

export default EventCard; 