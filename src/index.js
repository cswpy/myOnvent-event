import { StrictMode } from "react";
import ReactDOM from "react-dom";
import EventForm from "./components/EventForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <EventForm />
  </StrictMode>,
  rootElement
);
