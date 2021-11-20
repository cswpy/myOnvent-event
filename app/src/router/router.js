import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap'
import EventForm  from '../components/EventForm'
import EventView  from '../components/EventView'

const Header = props => {
  return(
    <Navbar bg='light'>
      <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="navbar">
          <Nav.Link href="/manage-event">Event Registration</Nav.Link>
          <Nav.Link href="/">View Events</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    );
};



const AppRouter = () => (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route element={<EventForm/>} path="/manage-event" exact={true} />
          <Route element={<EventView/>} path="/" />
        </Routes>
      </div>
    </BrowserRouter>
  );
  
  export default AppRouter;
