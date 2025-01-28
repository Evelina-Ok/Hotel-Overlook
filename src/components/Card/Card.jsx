import style from "./Card.module.scss"

export function Card ({ image, title }) {
    return (
        <div className={`${style.cardStyle}}`}>
            <img src={image} alt="" />
            <h1>{title}</h1>
        </div>
    )
}