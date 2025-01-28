import { NavLink } from "react-router-dom"
import style from "./Navbar.module.scss"


export function Navbar () {
    return (
        <nav className={style.navbarStyle}>
            <ul>
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
            </ul>

            
        </nav>
    )
}