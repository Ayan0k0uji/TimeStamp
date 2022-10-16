import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './pages/layout/header';
import {SearchBar} from './components/search';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
  <Header />
</div>
); 
