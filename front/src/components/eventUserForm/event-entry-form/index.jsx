import s from './s.module.scss';
import Button from '../../button';
import checkIcon from './check.svg';
import cross from "./cross.svg"; 

const EventEntryForm = () => {
    return (
        <div className={s.EventEntryForm}>
            <img className={s.EventEntryForm__cross} src={cross}alt="" />
            <h1 className={s.EventEntryForm__header}>
                Подать заявку
            </h1>

            <input type='text' className={s.EventEntryForm__input} placeholder="Фамилия, имя и отчество*"></input>
            <input type='email' className={s.EventEntryForm__input} placeholder="Электронная почта*"></input>
            <input type='text' className={s.EventEntryForm__input} placeholder="Номер занимаемого места"></input>

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

export default EventEntryForm;