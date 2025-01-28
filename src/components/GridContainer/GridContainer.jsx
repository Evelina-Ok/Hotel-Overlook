import style from "./GridContainer.module.scss"

export function GridContainer ({ children, columns, gap }) {
    return (
        <section className={`${style.gridStyle} ${style[`column-${columns}`]} ${style[gap]}`}>
            {children}
        </section>
    )
}