import { Header } from './header';
import {SearchBar} from '../../components/search';
import {Price} from '../../components/price';
import {Date} from '../../components/date';
import Events from '../../components/events';

const divStyle = {
  backgroundColor:'#ECDFFA',
  height: '1024px',
};

const Layout = () => {
  return (
    <div style={divStyle}>
    <Header />
    <div className={"container"}>
      <div className={' row'} style= {{marginTop:'30px'}}>
      <div className={'col-2'}>
        <Date />
        </div>
        <div className={'col-2'}>
        <Price />
        </div>
        <div className={'col-6'}>
        <SearchBar />
        </div>
      </div>
      <Events/>
    </div>
  </div>
  );
};

export default Layout;