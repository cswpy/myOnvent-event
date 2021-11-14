import React, { useEffect, useState } from "react";
import {load, create, save } from "./eventModel"
import {Table} from "react-bootstrap"

const EventView = (props) => {
    const [events, setEvents] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);
    // console.log(events);
    //console.log(type(events));

    useEffect(() => {
        load().then(savedEvents => {setEvents([...savedEvents])})
        .catch(err => console.error(err));
        setHasLoaded(true);
    }, []);


    const render = () => {
        if (hasLoaded){
            console.log(events);
            return(
                <div>
                <h1>List of Events</h1>
                <div> 
                    <Table hover striped bordered>
                        <thead>
                        <tr>
                        {/* {Object.values(events).map((key, values) => (<th>{values}</th>))} */}
                            <th>Event Name</th>
                            <th>Event Location</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Created At</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.values(events).map( (item, id) =>
                            <tr key={id}>
                                <td>{item.eventName}</td>
                                <td>{item.eventLocation}</td>
                                <td>{item.startDate}</td>
                                <td>{item.endDate}</td>
                                <td>{ new Date(item.createdAt).toLocaleString('en-US')}</td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </div>
                </div>
                );
        }
        else {
            return(
                <div>
                    <h1>No data found</h1>
                </div>);
        }
    };

    return render()
};
export default EventView;