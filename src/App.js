import React from "react";
import {HomeScreen} from "./screens/home/HomeScreen";
import {Buy} from "./screens/buy/Buy";
import {MyTickets} from "./screens/my-tickets/MyTickets";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Ticket} from "./screens/ticket/Ticket";
import {UserProvider} from "./providers/UserProvider";
import {EventForm} from "./screens/event-form/EventForm";
import {Event} from "./screens/event-organizer/Event";

const App = () => {
    return (
        <BrowserRouter>
            <UserProvider>
                <Routes>
                    <Route path="/" element={<HomeScreen/>}/>
                    <Route path="/buy/:eventId" element={<Buy/>}/>
                    <Route path="/my-tickets" element={<MyTickets/>}/>
                    <Route path="/my-events" element={<HomeScreen/>}/>
                    <Route path="/event-form" element={<EventForm/>}/>
                    <Route path="/event-form/:eventId" element={<EventForm/>}/>
                    <Route path="/ticket/:ticketId" element={<Ticket/>}/>
                    <Route path="/event/:eventId" element={<Event/>}/>
                </Routes>
            </UserProvider>
        </BrowserRouter>
    );
};

export default App;
