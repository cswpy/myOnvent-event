import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

/**
 * The Home function defines the content that makes up the main content of the Home page
 *
 * This component is attached to the /about path in router.jsx
 * The function in app.jsx defines the page wrapper that this appears in along with the footer
 */

const EventForm = (props) => {
  const [state, setState] = useState({
    username: "",
    email: "",
    city: "",
    phone: ""
  });

  return (
    <div>
      <h1>Event Registration</h1>
      <Form className="event_register">
        <Form.Group controlId="eventName">
          <Form.Label>Event Name</Form.Label>
          <Form.Control type="Text" placeholder="Seminar" />
        </Form.Group>
        <Form.Group controlId="eventLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control type="Text" placeholder="25 Union Sq W." />
        </Form.Group>
        <Form.Group controlId="startDate">
          <Form.Label>Start Date</Form.Label>
          <Form.Control type="Date" />
        </Form.Group>
        <Form.Group controlId="endDate">
          <Form.Label>End Date</Form.Label>
          <Form.Control type="Date" />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default EventForm;
