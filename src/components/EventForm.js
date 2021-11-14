import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {load, create, save } from "./eventModel"


const EventForm = (props) => {
  const [currEvent, setCurrEvent] = useState({
    eventName: '',
    eventLocation: '',
    startDate: '',
    endDate: '',
  });

  const [dateValid, setDateValid] = useState(true);

  useEffect(() => {validateDate(currEvent)}, [currEvent]);

  // const getNewEvents(currEvent){
  //   this.setEvents(())
  // }

  const saveEvent = () => {
    save(currEvent).catch(err => console.error(err));
    console.log(currEvent);
  }


  const handleOnSubmit = (event) => {
    event.preventDefault();

    // load().then(savedEvents => setEvents(savedEvents))
    // .catch(err =>{
    //   console.error(err);
    // });

    saveEvent();

    Array.from(document.querySelectorAll('input')).forEach(
      input => (input.value = "")
    );

    setCurrEvent("");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCurrEvent((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateDate = (event) => {
      var start = Date.parse(event.startDate);
      var end = Date.parse(event.endDate);
      if(start && end){
        setDateValid(start<=end);
      }
  }

  return (
    <div>
      <h1>Event Registration</h1>
      <Form className="event_register" onSubmit={handleOnSubmit}>
        <Form.Group controlId="eventName">
          <Form.Label>Event Name</Form.Label>
          <Form.Control type="Text" placeholder="Input the name of event" name="eventName" onChange={handleChange} required/>
        </Form.Group>
        <Form.Group controlId="eventLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control type="Text" placeholder="1 Lexington Ave" name="eventLocation" onChange={handleChange} required/>
        </Form.Group>
        <Form.Group controlId="startDate">
          <Form.Label>Start Date</Form.Label>
          <Form.Control type="Date" name="startDate" onChange={handleChange} required/>
        </Form.Group>
        <Form.Group controlId="endDate">
          <Form.Label>End Date</Form.Label>
          <Form.Control type="Date" name="endDate" onChange={handleChange} required isInvalid={!dateValid}/>
          <Form.Control.Feedback type="invalid">End date should be later than the start date</Form.Control.Feedback>
        </Form.Group>
        <br />
        <Button variant="primary" type="submit" disabled={!dateValid}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default EventForm;
