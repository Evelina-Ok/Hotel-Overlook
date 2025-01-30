import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/userContext";
import { MainLayout } from "./layout/MainLayout";
import { FrontPage } from "./pages/FrontPage";
import { ReservationPage } from "./pages/ReservationPage";
import { LoginPage } from "./pages/LoginPage";
import { CountriesPage } from "./pages/CountriesPage";
import { CitiesPage } from "./pages/CitiesPage";
import { HotelsPage } from "./pages/HotelsPage";
import { RoomsPage } from "./pages/RoomsPage";

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
              <Route path="/rooms" element={<RoomsPage />} />
              <Route path="/reservation" element={<ReservationPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>
          </Routes>
        </Router>
    </>
  );
}

export default App;
