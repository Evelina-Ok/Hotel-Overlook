import style from "./Card.module.scss"

export function Card ({ image, title, action, area, description, price }) {
    return (
        <div onClick={action} className={`${style.cardStyle}}`}>
            <img src={`${image}`} alt="" />
            <h1>{title}</h1>
            <p>{area}</p>
            <p>{description}</p>
            <h2>{price}</h2>
        </div>
    )
} 