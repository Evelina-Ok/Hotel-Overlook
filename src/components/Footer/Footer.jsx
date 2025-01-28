import style from "./Footer.module.scss"

export function Footer () {
    const currentYear = () => {
        return new Date().getFullYear();
    }
    return (
        <footer className={style.footerStyle}>
            <p>&copy; {currentYear()} Hotel Overlook. Alle rettigheder forbeholdt</p> 
            <div className={style.iconsStyle}>

            </div>
            
        </footer>
    )
}