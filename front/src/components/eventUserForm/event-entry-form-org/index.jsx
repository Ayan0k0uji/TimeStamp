import s from './s.module.scss';
import Button from '../button';
import checkIcon from '../event-entry-form/check.svg';
import cross from "../event-entry-form/cross.svg"; 

export const EventEntryFormOrg = () => {
    return (
        <div className={s.EventEntryForm}>
            <img className={s.EventEntryForm__cross} src={cross}alt="" />
            <h1 className={s.EventEntryForm__header}>
                Создание мероприятия
            </h1>

            <input type='text' className={s.EventEntryForm__input} placeholder="Название*"></input>
            <input type='text' className={s.EventEntryForm__input} placeholder="Дата*"></input>
            <input type='text' className={s.EventEntryForm__input} placeholder="Время*"></input>
            <input type='text' className={s.EventEntryForm__input} placeholder="Страна*"></input>
            <input type='text' className={s.EventEntryForm__input} placeholder="Город*"></input>
            <input type='text' className={s.EventEntryForm__input} placeholder="Место проведения*"></input>
            <input type='text' className={s.EventEntryForm__input} placeholder="Возрастные ограничения"></input>
            <input type='text' className={s.EventEntryForm__input} placeholder="Цена"></input>
            <input type='text' className={s.EventEntryForm__input} placeholder="Описание"></input>
            <input type='text' className={s.EventEntryForm__input} placeholder="Категория*"></input>

            <div className={s.EventEntryForm__submitBox}>
                <div className={s.EventEntryForm__agreement}>
                <div className={s.EventEntryForm__checkBox}>
                    <img src={checkIcon} alt="" />
                </div>
                <span>Я согласен с <a href='#!'>условиями передачи информации</a></span>
                </div>
                <Button>Отправить</Button>
            </div>
        </div>
    );
};
