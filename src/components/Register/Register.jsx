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
  const { registerTexts, IS_RIGTH_TO_LEFT } = useTranslation(language);
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
      pageTitle={registerTexts.registerTitle}
      pageName="register"
      submitButtonText={registerTexts.registerButton}
      pageNavigationLink="/signin"
      pageNavigationLinkText={registerTexts.registerLink}
      pageNavigationLinkComment={registerTexts.registerText}
      isFormValid={isFormValid}
      onSubmit={handleSubmit}
    >
      <label className="page-with-form__input-label" htmlFor="name">
        {registerTexts.registerName}
        <input
          type="text"
          autoComplete="name"
          className={inputClassNames}
          name="name"
          placeholder={registerTexts.registerName}
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
        {registerTexts.registerEmail}
        <input
          type="email"
          autoComplete="email"
          className={inputClassNames}
          name="email"
          placeholder={registerTexts.registerEmail}
          required
          maxLength="30"
          id="email"
          value={form.email}
          onChange={handleChange}
        />
        <span className="page-with-form__error-text">{errors.email}</span>
      </label>

      <label className="page-with-form__input-label" htmlFor="password">
        {registerTexts.registerPassword}
        <input
          type="password"
          autoComplete="current-password"
          className={inputClassNames}
          name="password"
          placeholder={registerTexts.registerPassword}
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
        {registerTexts.registerPasswordAgain}
        <input
          type="password"
          autoComplete="new-password"
          className={inputClassNames}
          name="confirmPassword"
          placeholder={registerTexts.registerPasswordAgain}
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
