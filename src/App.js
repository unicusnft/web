import React from "react";
import { HomeScreen } from "./screens/home/HomeScreen";
import { Buy } from "./screens/buy/Buy";
import { MyTickets } from "./screens/my-tickets/MyTickets";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/buy" element={<Buy />} />
              <Route path="/my-tickets" element={<MyTickets />} />
          </Routes>
      </BrowserRouter>
  );
};

export default App;
