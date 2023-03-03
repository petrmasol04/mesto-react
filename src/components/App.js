import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import '../index.css';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({})

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(name, link) {
    setSelectedCard({ name, link, isOpen: true })
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ ...selectedCard, isOpen: false })
  }

  return (
    <>

      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />


      <PopupWithForm
        title={'Редактировать профиль'}
        name={'profile'}
        btnText={'Сохранить'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_profile"
          id="name"
          name="name"
          required
          type="text"
          placeholder="Имя"
          autoComplete="off"
          minLength={2}
          maxLength={40}
        />

        <span className="popup__error" id="name-error"> </span>

        <input
          className="popup__input popup__input_profile"
          id="description"
          name="about"
          required
          type="text"
          placeholder="Вид деятельности"
          autoComplete="off"
          minLength={2}
          maxLength={200}
        />

        <span className="popup__error" id="description-error"></span>
      </PopupWithForm>

      <PopupWithForm
        title={'Новое место'}
        name={'place'}
        btnText={'Создать'}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_place"
          id="place"
          name="name"
          required
          type="text"
          placeholder="Название"
          autoComplete="off"
          minLength={2}
          maxLength={30}
        />
        <span className="popup__error" id="place-error" />
        <input
          className="popup__input popup__input_place"
          id="url"
          name="link"
          required
          type="url"
          placeholder="Сылка на картинка"
          autoComplete="off"
        />
        <span className="popup__error" id="url-error" />
      </PopupWithForm>

      <PopupWithForm
        title={'Обновить аватар'}
        name={'avatar'}
        btnText={'Сохранить'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_avatar"
          type="url"
          id="avatar"
          name="avatar"
          placeholder="Ссылка на картинку"
          autoComplete="off"
          required />
        <span className="popup__error" id="avatar-error" />
      </PopupWithForm>

      <PopupWithForm
        title={'Вы уверены?'}
        name={'remove'}
        btnText={'Да'}
        isOpen={''}
      >
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}


export default App;
