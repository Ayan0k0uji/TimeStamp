import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './pages/layout/header';
import {SearchBar} from './components/search';
import {Price} from './components/price';
import {Date} from './components/date';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div style={{backgroundColor:'#ECDFFA'}}>
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
  </div>
</div>
); 
