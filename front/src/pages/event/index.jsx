import { Header } from '../layout/header';
import people from './people.png';
import s from './s.module.scss'
import Button from '../../components/button';
import { useParams } from 'react-router-dom';

const divStyle = {
  backgroundColor:'#ECDFFA',
  height: '1024px',
};

const Event = () => {
  const params = useParams();

  return (
    <div style={divStyle}>
    <Header />
    <div className={"container"}>
      <div className={' row'} style= {{marginTop:'10px'}}>
      <div className={'col-8'}>
      <div className={s.imgBlock}>
        <div className={s.img}>
        <img src={people} alt="" />
        </div>
        <div>
            <div className={s.nameEvent}>
                Маинкрафт в час ночи
            </div>
            <div className={s.data}>
            1 сентября 20:00
            </div>
        </div>
        <div> Описание:</div>
        <div className={s.description}>
            айдишник = {params.id}
            Minecraft (от англ. mine — «шахта; добывать» + craft — «ремесло;
            создавать») — компьютерная инди-игра в жанре песочницы,
            созданная шведским программистом Маркусом Перссоном
            и выпущенная его компанией Mojang AB. Перссон опубликовал
            начальную версию игры в 2009 году; в конце 2011 года была
            выпущена стабильная версия для ПК Microsoft Windows,
            распространявшаяся через официальный сайт.
        </div>
        <div className={s.button}>
        <   Button>Подать заявку</Button>
        </div>
        </div>
        </div>
        </div>
     </div>
     </div>
     
  );
};

export default Event;