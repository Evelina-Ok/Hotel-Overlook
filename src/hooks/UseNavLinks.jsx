import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const useNavLinks = () => {
  const { userData } = useContext(UserContext);

  const navLinks = [
    {
      link: "/",
      title: "Forside",
    },
    {
      link: "/hotels",
      title: "Hoteller & Destinationer",
    },
    {
      link: "/rooms",
      title: "Værelser",
    },
    {
      link: "/reservation",
      title: "Reservation",
    },
    {
      link: userData ? "/login" : "/login",
      title: userData ? "Min side" : "Login",
    },
  ];

  return navLinks;
}
