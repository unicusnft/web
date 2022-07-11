import React from "react";
import { HomeScreen } from "./screens/home/HomeScreen";
import { Buy } from "./screens/buy/Buy";
import { MyTickets } from "./screens/my-tickets/MyTickets";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Ticket } from "./screens/ticket/Ticket";
import { UserProvider } from "./providers/UserProvider";
import { Payment } from "./screens/payment/Payment";

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/buy/:eventId" element={<Buy />} />
          <Route
            path="/buy/:eventId/cant/:cant/spot/:spot"
            element={<Payment />}
          />
          <Route path="/my-tickets" element={<MyTickets />} />
          <Route path="/my-events" element={<HomeScreen />} />
          <Route path="/ticket/:ticketId" element={<Ticket />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
