import React from "react";
import { HomeScreen } from "./screens/home/HomeScreen";
import { Buy } from "./screens/buy/Buy";
import { MyTickets } from "./screens/my-tickets/MyTickets";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Ticket } from "./screens/ticket/Ticket";
import { UserProvider } from "./providers/UserProvider";
import { Payment } from "./screens/payment/Payment";
import { EventForm } from "./screens/event-form/EventForm";
import { Event } from "./screens/event-organizer/Event";
import { ValidateTicket } from "./screens/validate-ticket/ValidateTicket";

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/buy/:eventId" element={<Buy />} />
          <Route
            path="/buy/:eventId/ticket/:ticketId/cant/:cant"
            element={<Payment />}
          />
          <Route path="/my-tickets" element={<MyTickets />} />
          <Route path="/my-events" element={<HomeScreen />} />
          <Route path="/ticket/:nftId" element={<Ticket />} />
          <Route path="/event-form" element={<EventForm />} />
          <Route path="/event-form/:eventId" element={<EventForm />} />
          <Route path="/event/:eventId" element={<Event />} />
          <Route
            path="/event/:eventId/validate-ticket"
            element={<ValidateTicket />}
          />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
