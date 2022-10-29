import s from './s.module.scss';
import { CaretDownOutlined } from '@ant-design/icons';
import { CaretUpOutlined } from '@ant-design/icons';
import React, { useRef } from "react";
import { useDetectOutsideClick } from "./useDetectOutsideClick";


export const Price = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
    return (
            <div className={s.price}>

                <button className={s.priceButton} onClick={onClick}> 
                    <div className = {s.textPrice}>Ценаf </div>
                    <div className = {s.iconPrice}> {isActive ? <CaretUpOutlined /> : <CaretDownOutlined />}</div>
                </button>

                
                <div className={isActive ? s.priceListActive : s.priceList}>
                    <button className={s.firtsBt} onClick={onClick}> бесплатно </button>
                    <button onClick={onClick}> до 1000р </button>
                    <button onClick={onClick}> до 3000р </button>
                    <button className={s.lastBt} onClick={onClick}> 3000р+ </button>
                </div>
                

            </div>
    );
  };