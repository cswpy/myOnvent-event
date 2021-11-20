import React, { useEffect, useState } from "react";
import {Table, Button} from "react-bootstrap"
import { getData ,clearData } from "../conn";

const EventView = (props) => {
    const [events, setEvents] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        getData().then(savedEvents => {setEvents([...savedEvents]); setHasLoaded(savedEvents.length > 0)})
        .catch(err => console.error(err));
    }, []);

    const render = () => {
        if (hasLoaded){
            console.log(events);
            return(
                <div className='body'>
                <h1>List of Events</h1>
                <Button onClick={() => {clearData(); window.location.reload();}} variant="outline-danger" id="del-btn">
                    Delete
                </Button>
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
                                <td>{new Date(item.startDate).toDateString()}</td>
                                <td>{new Date(item.endDate).toDateString()}</td>
                                <td>{new Date(item.createdAt).toLocaleString('en-US')}</td>
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
                <div className='body'>
                    <h1>No data found</h1>
                </div>);
        }
    };

    return render()
};
export default EventView;