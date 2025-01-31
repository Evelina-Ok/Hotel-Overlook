import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { FrontPage } from "./pages/FrontPage";
import { ReservationPage } from "./pages/ReservationPage";
import { LoginPage } from "./pages/LoginPage";
import { CountriesPage } from "./pages/CountriesPage";
import { CitiesPage } from "./pages/CitiesPage";
import { HotelsPage } from "./pages/HotelsPage";
import { HotelSinglePage } from "./pages/HotelSingle";
import { RoomsPage } from "./pages/RoomsPage";
import { SignupPage } from "./pages/SignupPage";

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path={"/"} element={<MainLayout />}>
              <Route index={true} element={<FrontPage />} />
              <Route path="/hotels" element={<CountriesPage />} />
              <Route path="/hotels/:slug" element={<CitiesPage />} />
              <Route path="/hotels/:slug/:cityslug" element={<HotelsPage />} />
              <Route path="/hotels/:slug/:cityslug/:hotelslug" element={<HotelSinglePage />} />
              <Route path="/rooms" element={<RoomsPage />} />
              <Route path="/reservation" element={<ReservationPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />

            </Route>
          </Routes>
        </Router>
    </>
  );
}

export default App;
