import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useForm from '../../hooks/useForm';
import PageWithForm from '../PageWithForm/PageWithForm';
import useTranslation from '../../hooks/useTranslation';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Register({ registerUser }) {
  const { form, errors, isFormValid, handleChange, hardChangeIsFormValid } =
    useForm({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  const { language } = React.useContext(CurrentUserContext);
  const { REGISTER_TEXT, IS_RIGTH_TO_LEFT } = useTranslation(language);
  const inputClassNames = `page-with-form__input ${
    IS_RIGTH_TO_LEFT ? 'page-with-form__input_align_right' : ''
  } `;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    registerUser(form);
  };

  useEffect(() => {
    hardChangeIsFormValid();
  }, []);

  return (
    <PageWithForm
      pageTitle={REGISTER_TEXT.REGISTER_TITLE}
      pageName="register"
      submitButtonText={REGISTER_TEXT.REGISTER_BUTTON}
      pageNavigationLink={`/${language}/signin`}
      pageNavigationLinkText={REGISTER_TEXT.REGISTER_LINK}
      pageNavigationLinkComment={REGISTER_TEXT.REGISTER_TEXT}
      isFormValid={isFormValid}
      onSubmit={handleSubmit}
    >
      <label className="page-with-form__input-label" htmlFor="name">
        {REGISTER_TEXT.REGISTER_NAME}
        <input
          type="text"
          autoComplete="name"
          className={inputClassNames}
          name="name"
          placeholder={REGISTER_TEXT.REGISTER_NAME}
          required
          minLength="2"
          maxLength="30"
          id="name"
          value={form.name}
          onChange={handleChange}
        />
        <span className="page-with-form__error-text">{errors.name}</span>
      </label>
      <label className="page-with-form__input-label" htmlFor="email">
        {REGISTER_TEXT.REGISTER_EMAIL}
        <input
          type="email"
          autoComplete="email"
          className={inputClassNames}
          name="email"
          placeholder={REGISTER_TEXT.REGISTER_EMAIL}
          required
          maxLength="30"
          id="email"
          value={form.email}
          onChange={handleChange}
        />
        <span className="page-with-form__error-text">{errors.email}</span>
      </label>

      <label className="page-with-form__input-label" htmlFor="password">
        {REGISTER_TEXT.REGISTER_PASSWORD}
        <input
          type="password"
          autoComplete="current-password"
          className={inputClassNames}
          name="password"
          placeholder={REGISTER_TEXT.REGISTER_PASSWORD}
          required
          minLength="8"
          maxLength="40"
          id="password"
          value={form.password}
          onChange={handleChange}
        />
        <span className="page-with-form__error-text">{errors.password}</span>
      </label>
      <label className="page-with-form__input-label" htmlFor="password">
        {REGISTER_TEXT.REGISTER_PASSWORD_AGAIN}
        <input
          type="password"
          autoComplete="new-password"
          className={inputClassNames}
          name="confirmPassword"
          placeholder={REGISTER_TEXT.REGISTER_PASSWORD_AGAIN}
          required
          maxLength="40"
          id="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        <span className="page-with-form__error-text">
          {errors.confirmPassword}
        </span>
      </label>
    </PageWithForm>
  );
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
};

export default Register;
