import React, { useState, useRef, useEffect } from 'react';
import './Profile.css';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import useForm from '../../hooks/useForm';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useTranslation from '../../hooks/useTranslation';

function Profile({ changeProfile, logOut }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isEdit, setIsEdit] = useState(false);
  const refName = useRef();
  const { PROFILE_TEXTS } = useTranslation(currentUser.language);
  const { form, setForm, errors, handleChange, isFormValid, updateFormInput } =
    useForm({
      name: currentUser.name,
      email: currentUser.email,
    });

  useEffect(() => {
    setForm((prevState) => ({
      ...prevState,
      name: currentUser.name,
      email: currentUser.email,
    }));
    setIsEdit(false);
  }, [currentUser]);

  const isEditHandler = () => {
    setIsEdit(!isEdit);
    refName.current.focus();
  };

  const submitProfileHandler = (e) => {
    e.preventDefault();
    changeProfile(form);
  };

  const escapeKeyHandler = (e) => {
    if (isEdit && e.key === 'Escape') {
      updateFormInput({
        name: currentUser.name,
        email: currentUser.email,
      });
      setIsEdit(false);
    }
  };

  useEffect(() => {
    if (isEdit) {
      refName.current.focus();
    }
    document.addEventListener('keydown', escapeKeyHandler);
    return () => {
      document.removeEventListener('keydown', escapeKeyHandler);
    };
  }, [isEdit, currentUser]);

  return (
    <>
      <Header />
      <main className="profile">
        <h2 className="profile__title">
          {PROFILE_TEXTS.PROFILE_TITLE}, {currentUser.name}!
        </h2>
        <form
          className="profile__form"
          onSubmit={submitProfileHandler}
          id="profileForm"
        >
          <label
            className={`profile__input-label ${
              isEdit ? 'profile__input-label_type_edit' : ''
            }`}
            htmlFor="profile-name-input"
          >
            {PROFILE_TEXTS.PROFILE_NAME}
            <input
              ref={refName}
              type="text"
              className={`profile__input ${
                isEdit ? 'profile__input_type_edit' : ''
              }`}
              name="name"
              placeholder={PROFILE_TEXTS.PROFILE_NAME}
              required
              minLength="2"
              maxLength="30"
              id="profile-name-input"
              disabled={!isEdit}
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
            />
            <span className="profile__input-error profile__input-error_type_name">
              {errors.name}
            </span>
          </label>

          <label
            className={`profile__input-label ${
              isEdit ? 'profile__input-label_type_edit' : ''
            }`}
            htmlFor="profile-email-input"
          >
            E-mail
            <input
              type="email"
              className={`profile__input ${
                isEdit ? 'profile__input_type_edit' : ''
              }`}
              name="email"
              placeholder={PROFILE_TEXTS.PROFILE_EMAIL}
              required
              minLength="2"
              maxLength="30"
              id="profile-email-input"
              disabled={!isEdit}
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />
            <span className="profile__input-error profile__input-error_type_email">
              {errors.email}
            </span>
          </label>
        </form>
        {!isEdit ? (
          <div className="profile__buttons-container">
            <input
              type="button"
              className="profile__link"
              name="profile-change"
              aria-label={PROFILE_TEXTS.PROFILE_EDIT_ARIA_LABLE}
              value={PROFILE_TEXTS.PROFILE_EDIT_BUTTON}
              onClick={isEditHandler}
            />
            <input
              type="button"
              className="profile__link profile__link_color_red"
              name="profile-logout"
              aria-label={PROFILE_TEXTS.PROFILE_LOGOUT_ARIA_LABLE}
              value={PROFILE_TEXTS.PROFILE_LOGOUT_BUTTON}
              onClick={logOut}
            />
          </div>
        ) : (
          <input
            type="submit"
            form="profileForm"
            className={`profile__button ${
              !isFormValid ? 'profile__button_disabled' : ''
            }`}
            name="profile-submit"
            aria-label={PROFILE_TEXTS.PROFILE_SAVE_ARIA_LABLE}
            value={PROFILE_TEXTS.PROFILE_SAVE_BUTTON}
            disabled={!isFormValid}
          />
        )}
      </main>
    </>
  );
}

Profile.propTypes = {
  changeProfile: PropTypes.func,
  logOut: PropTypes.func,
};

Profile.defaultProps = {
  changeProfile: () => {},
  logOut: () => {},
};

export default Profile;
