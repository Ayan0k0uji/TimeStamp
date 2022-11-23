import React from 'react';
import Layout from './pages/layout';
import EventPage from './pages/event';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventReg from './pages/eventReg';


function App() {
  return(
      <Router>
         <Routes>
          <Route exact path="/" element={<Layout />}/>
          <Route exact path="/events/:id" element={<EventPage /> }/>
          <Route path="/eventReg" element={<EventReg /> }/>
         </Routes>
      </Router>
      
  );
}

export default App;
