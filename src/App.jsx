import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { FrontPage } from "./pages/FrontPage";
import { HotelsDestinationsPage } from "./pages/HotelsDestinationsPage";
import { RoomsPage } from "./pages/RoomsPage";
import { ReservationPage } from "./pages/ReservationPage";
import { LoginPage } from "./pages/LoginPage";
import { UserContextProvider } from "./context/userContext";
import { HotelPage } from "./pages/HotelPage";

function App() {
  return (
    <>
      <UserContextProvider>
        <Router>
          <Routes>
            <Route path={"/"} element={<MainLayout />}>
              <Route index={true} element={<FrontPage />} />
              <Route path="/hotels" element={<HotelsDestinationsPage />} />
              <Route path="/hotels" element={<HotelPage />} />
              <Route path="/rooms" element={<RoomsPage />} />
              <Route path="/reservation" element={<ReservationPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>
          </Routes>
        </Router>
      </UserContextProvider>
    </>
  );
}

export default App;
