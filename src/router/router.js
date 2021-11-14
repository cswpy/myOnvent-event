import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EventForm  from '../components/EventForm'
import EventView  from '../components/EventView'

const AppRouter = () => (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route element={<EventForm/>} path="/" exact={true} />
          <Route element={<EventView/>} path="/events" />
        </Routes>
      </div>
    </BrowserRouter>
  );
  
  export default AppRouter;
