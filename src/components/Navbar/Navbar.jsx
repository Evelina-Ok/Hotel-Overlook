import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";
import { useNavLinks } from "../../hooks/UseNavLinks";

export function Navbar() {
  const navLinks = useNavLinks();

  return (
    <nav className={style.navbarStyle}>
      <ul>
        {navLinks.map((item) => (
          <li key={item.title}>
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                isActive ? `${style.activeNavLink}` : style.navLink
              }
            >
                {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

{
  /* <ul>
                <li>
                    <NavLink to="/"
                    className={({isActive}) => ({
                        color: isActive ? '#ff0000' : '#fff'
                    })}>
                        FORSIDE
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/hotels"
                    className={({isActive}) => ({
                        color: isActive ? '#ff0000' : '#fff'
                    })}>
                        HOTELIER & RESERVATIONER
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/rooms"
                    className={({isActive}) => ({
                        color: isActive ? '#ff0000' : '#fff'
                    })}>
                        VÆRELSER
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/reservation"
                    className={({isActive}) => ({
                        color: isActive ? '#ff0000' : '#fff'
                    })}>
                        RESERVATION
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/login"
                    className={({isActive}) => ({
                        color: isActive ? '#ff0000' : '#fff'
                    })}>
                        LOGIN
                    </NavLink>
                </li>
            </ul> */
}
