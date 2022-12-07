import people from './people.png';
import s from './s.module.scss'
import Button from '../../button';


const divStyle = {
  backgroundColor:'#ECDFFA',
  height: '1024px',
};

const EventPageItem = (props) => {
  return (
    <div className={"container"}>
        <div className={' row'} style= {{marginTop:'10px'}}>
        <div className={'col-8'}>
        <div className={s.imgBlock}>
          <div className={s.img}>
          <img src={people} alt="" />
          </div>
          <div>
              <div className={s.nameEvent}>
                  {props.event.name}
              </div>
              <div className={s.data}>
                {props.event.date}
              </div>
          </div>
          <div> Описание:</div>
          <div className={s.description}>
              {props.event.description}
          </div>
          <div className={s.button}>
          <   Button>Подать заявку</Button>
          </div>
          </div>
          </div>
          </div>
       </div>
     
  );
};

export default EventPageItem;



