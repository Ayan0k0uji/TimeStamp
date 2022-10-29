import s from './s.module.scss';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import React, { useRef } from "react";
import { useDetectOutsideClick } from "./useDetectOutsideClick";

const butClick1 = () => {console.log("You clicked on button 1!");};
const butClick2 = () => {console.log("You clicked on button 2!");};
const butClick3 = () => {console.log("You clicked on button 3!");};
const butClick4 = () => {console.log("You clicked on button 4!");};

export const Price = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
    return (
            <div  className={s.price}>

                <button ref={dropdownRef} className={s.priceButton} onClick={onClick}> 
                    <div className = {s.textPrice}>Цена </div>
                    <div className = {s.iconPrice}> {isActive ? <CaretUpOutlined /> : <CaretDownOutlined />}</div>
                </button>


                <div className={isActive ? s.priceListActive : s.priceList}>
                    <button onClick = {butClick1} className={s.firtsBt} > бесплатно </button>
                    <button onClick = {butClick2}> до 1000р </button>
                    <button onClick = {butClick3}> до 3000р </button>
                    <button onClick = {butClick4} className={s.lastBt} > 3000р+ </button>
                </div>
                

            </div>
    );
  };