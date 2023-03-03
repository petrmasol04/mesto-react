import React from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

    const [userName, setUserName] = React.useState(null);
    const [userDescription, setUserDescription] = React.useState(null);
    const [userAvatar, setUserAvatar] = React.useState(null);
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([{ name, about, avatar }, cardsData]) => {
                setUserName(name);
                setUserDescription(about);
                setUserAvatar(avatar);
                setCards([...cards, ...cardsData])
            }).catch((err) => {
                console.log(err);
            });
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__edit-avatar" onClick={onEditAvatar} />
                    <img src={userAvatar} alt="Аватар профиля" className="profile__avatar" />
                    <div className="profile__info">
                        <h1 className="profile__name">{userName}</h1>
                        <button type="button" className="profile__editor" onClick={onEditProfile} aria-label="Редактировать" />
                        <p className="profile__description">{userDescription}</p>
                    </div>
                    <button type="button" className="profile__add-mesto" onClick={onAddPlace} aria-label="Добавить место" />
                </div>
            </section>
            <section className="cards">
                <ul className="cards__container">{cards.map((card) => {
                    return (
                        <Card
                            key={card._id}
                            name={card.name}
                            link={card.link}
                            likesCount={card.likes}
                            onCardClick={onCardClick}
                        />
                    )
                })}</ul>
            </section>
        </main >
    )
}

export default Main;
