import { EnvironmentOutlined } from '@ant-design/icons';
import s from './s.module.scss';
import avatar from './avatar.png';
import React, { useRef } from "react";
import useDetectOutsideClick from './useDetectOutsideClick'

export const Header = () => {
    /* user dropdown */
    const dropdownRefUser = useRef(null);
    const [isActiveUser, setIsActiveUser] = useDetectOutsideClick(dropdownRefUser, false);
    const onClickUser = () => setIsActiveUser(!isActiveUser);

    /* city dropdown */
    const dropdownRefCity = useRef(null);
    const [isActiveCity, setIsActiveCity] = useDetectOutsideClick(dropdownRefCity, false);
    const onClickCity = () => setIsActiveCity(!isActiveCity);

    function handleClickCity(e) 
    {
        e.preventDefault();
        console.log('click11'); //action
        onClickCity(); //to close on click
    }

    function handleClickUser(e) 
    {
        e.preventDefault();
        console.log('click22'); //action
        onClickUser(); //to close on click
    }

    return (
        <div className={"banner"}>
            <div className={s.Header}>
                <div className={"container"}>
                    <div className={s.header + " row align-items-center d-flex justify-content-between"}>
                        <div className ={"col-2"} ref={dropdownRefCity}>
                            <div className={s.city} onClick={onClickCity}>
                                <EnvironmentOutlined />
                                <u>Самара</u>
                            </div>
                            <div className={isActiveCity ? s.cityListActive : s.cityList}>
                                <input type="text" placeholder="Введите место" className={s.firtsEl} />
                                <button onClick={handleClickCity} type="button" className={s.onlEl}>Online</button>
                                <button onClick={handleClickCity} type="button">Самара</button>
                                <button onClick={handleClickCity} type="button">Волгоград</button>
                                <button onClick={handleClickCity} type="button">Саратов</button>
                                <button onClick={handleClickCity} type="button">Сызрань</button>
                                <button onClick={handleClickCity} type="button">Ульяновск</button>
                                <button onClick={handleClickCity} type="button" className={s.lastEl}>Тольятти</button>
                            </div>
                        </div>
                        <div className ={"col-7"}></div>
                        <div className ={"col"} ref={dropdownRefUser}>
                            <div className={s.userInfo} onClick={onClickUser}>
                                <img className={s.avatar} src={avatar} alt="avatar"/>
                                <div>Василий</div>
                            </div>
                            <div className={isActiveUser ? s.userListActive : s.userList}>
                                <button onClick={handleClickUser} className={s.firtsBt}>Мои билеты</button>
                                <button onClick={handleClickUser}>Подписки</button>
                                <button onClick={handleClickUser}>Избранное</button>
                                <button onClick={handleClickUser}>Выход</button>
                                <button onClick={handleClickUser}>Настройки</button>
                                <button onClick={handleClickUser} className={s.lastBt}>Стать организатором</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div> 
    );
  };