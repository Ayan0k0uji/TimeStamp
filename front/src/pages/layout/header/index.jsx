import { EnvironmentOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import s from './s.module.scss';
import avatar from './avatar.png';

const menu = (
    <div className={s.downIcon +" row"}>
    <div className={"col"}>   
        <div>Мои билеты</div>
        <div>Подписки</div>
        <div>Избранное</div>
        <div>Выход</div>
        <div>Настройки</div>
        <div>Стать организатором</div>
    </div>   
    </div>
  );

export const Header = () => {
    return (
<div className={"banner"}>
<div className={s.Header}>
    <div className={"container"}>
        <div className={s.header + " row align-items-center"}>
            <div className ={"col-9"}>
                    <div className={s.city}>
                        <EnvironmentOutlined />
                        <u>Самара</u>
                    </div>
            </div>
            <div className ={"col"}>
                <Dropdown overlay={menu} trigger={['click']}>
                <div className={s.userInfo}>
                <img
                className={s.avatar}
                src={avatar}
                alt="avatar"
                />
                <div>Василий</div>
                </div>
                </Dropdown>
            </div>
        </div>
    </div>
</div> 
</div> 
    );
  };