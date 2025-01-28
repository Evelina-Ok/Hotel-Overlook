import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { UserContextProvider } from "../context/userContext";

export function MainLayout() {
  return (
    <>
      <UserContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </UserContextProvider>
    </>
  );
}
