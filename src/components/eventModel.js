import { v1 as uuid } from "uuid";
import EventForm from "./EventForm";

const storage = localStorage;

export function load() {
    return new Promise((resolve, reject) => {
      try {
        resolve(JSON.parse(storage.getItem("events")) || []);
      } catch (err) {
        reject(err);
      }
    });
  }

export function create(...value) {
    return Promise.resolve({
        ...value,
        time: +new Date(),
        uid: uuid(),
    });
  }

  export function save(event) {
    return new Promise((resolve, reject) => {
      try {
        event.createdAt = new Date();
        var savedEvents = (JSON.parse(storage.getItem("events")) || []);
        savedEvents.push(event);
        storage.setItem("events", JSON.stringify(savedEvents));
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }