import { NavLink } from "react-router-dom"
import style from "./Header.module.scss"
import { Navbar } from "../Navbar/Navbar"

export function Header () {
    return (
        <div>

        <header className={style.headerStyle}>
            <NavLink to="/">
            <img src="/public/images/hotel-overlook-logo.png" alt="logo" />
            </NavLink>
            <Navbar />
        </header>
        </div>
    )
}