function Card({ name, link, likesCount, onCardClick }) {

    function handleClick() {
        onCardClick(name, link)

    }

    return (
        <li className="card">
            <img src={link} alt={name} className="card__image" onClick={handleClick} />
            <button type="button" className="card__remove" aria-label="Удалить"></button>
            <div className="card__info">
                <h2 className="card__description">{name}</h2>
                <div className="card__container">
                    <button className="card__like" type="button" aria-label="Нравится"></button>
                    <span className="card__like-counter">{likesCount.length}</span>
                </div>
            </div>
        </li>
    )
}

export default Card;