import s from './s.module.scss';
import Button from '../button';
import checkIcon from '../event-entry-form/check.svg';
import cross from "../event-entry-form/cross.svg"; 
import React from 'react';

export const EventEntryFormOrg = () => {
    return (
        <div className={s.EventEntryForm}>
            <img className={s.EventEntryForm__cross} src={cross}alt="" />
            <h1 className={s.EventEntryForm__header}>
                Создание мероприятия
            </h1>

            <form>
            <input type='text' className={s.EventEntryForm__input} placeholder="Название" required/>

            <select className={s.EventEntryForm__select} required>
            <option disabled selected = "Категория"> Категория </option>
                <option>Финансы</option>
                <option> IT</option>
                <option>HR</option>
                <option>Производство</option>
                <option>Торговля</option>
                <option>Образование</option>
                <option>Медицина</option>
            </select>

            <input type='date' className={s.EventEntryForm__date} placeholder="Дата" required/>

            <input type='time' className={s.EventEntryForm__input} placeholder="Время" required/>

            <select className={s.EventEntryForm__select} required>
              <option disabled selected = "Страна"> Страна </option>
              <option>Россия</option>
              <option>Украина</option>
              <option>Белоруссия</option>
              <option>Сербия</option>
              <option>Чехия</option>
            </select>

            
            <select className={s.EventEntryForm__select} required>
              <option disabled selected = "Город"> Гоpод </option>
              <option>Тольятти</option>
              <option>Самара</option>
              <option>Тольятти</option>
              <option>Самара</option>
              <option>Тольятти</option>
              <option>Тольятти</option>
              <option>Самара</option>
            </select>

            <input type='text' className={s.EventEntryForm__input} placeholder="Место проведения" required/>

            <input type='text' className={s.EventEntryForm__input} placeholder="Цена" required/>

            <input type='text' className={s.EventEntryForm__input} placeholder="Краткое описание"  required/>

            <textarea type='text' rows = "3" style={{resize: 'none'}} className={s.EventEntryForm__input} placeholder="Описание" required/>

            <p>Загрузите картинку для мероприятия:</p>
            <input type="file" name="photo" multiple accept="image/*,image/jpeg"/>
            </form>

            <div className={s.EventEntryForm__submitBox}>
                <div className={s.EventEntryForm__agreement}>
                  <input type="checkbox" className={s.EventEntryForm__checkBox} id="agree" />
                  <label for="agree">
                  <span>Я согласен с <a href='#!'>условиями передачи информации</a></span></label>
                </div>
                <Button>Отправить</Button>
            </div>
        </div>
    );
};
