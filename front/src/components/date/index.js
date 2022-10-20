import s from './s.module.scss';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import React, { useRef } from "react";
import { useDetectOutsideClick } from "./useDetectOutsideClick";



export const Date = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
    return (
        <div className={s.date}>

            <button className={s.dateButton}  onClick={onClick}> 
                <div className = {s.textDate}>Дата </div>
                <div className = {s.iconDate}> {isActive ? <CaretUpOutlined /> : <CaretDownOutlined />} </div>
            </button>

            <div className={isActive ? s.calendarActive : s.calendar}>
                {/*  */}
            </div>
        </div>
    );
  };