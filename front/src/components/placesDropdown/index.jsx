import { React, useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import s from './s.module.scss'

const divStyle = {
    backgroundColor: '#ECDFFA',
    height: '1024px',
};

const PlacesDropdown = (props) => {


    return (
        <div className={props.isActiveCity ? s.cityListActive : s.cityList}>
            <input type="text" placeholder="Введите место" className={s.firtsEl} />
            <button onClick={props.handleClickCity} type="button" className={s.onlEl}>Online</button>
            <button onClick={props.handleClickCity} type="button">Самара</button>
            <button onClick={props.handleClickCity} type="button">Волгоград</button>
            <button onClick={props.handleClickCity} type="button">Саратов</button>
            <button onClick={props.handleClickCity} type="button">Сызрань</button>
            <button onClick={props.handleClickCity} type="button">Ульяновск</button>
            <button onClick={props.handleClickCity} type="button" className={s.lastEl}>Тольятти</button>
        </div>
    );
};

export default PlacesDropdown;