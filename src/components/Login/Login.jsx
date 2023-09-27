import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import useForm from '../../hooks/useForm';
import PageWithForm from '../PageWithForm/PageWithForm';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useTranslation from '../../hooks/useTranslation';

function SignIn({ loginUser }) {
  const { language } = useContext(CurrentUserContext);
  const { loginTexts } = useTranslation(language);
  const { form, errors, isFormValid, handleChange } = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    loginUser(form);
  };

  return (
    <PageWithForm
      pageTitle={loginTexts.loginTitle}
      pageName="login"
      submitButtonText={loginTexts.loginButton}
      pageNavigationLink="/signup"
      pageNavigationLinkText={loginTexts.loginLink}
      pageNavigationLinkComment={loginTexts.loginText}
      isFormValid={isFormValid}
      onSubmit={handleSubmit}
    >
      <label
        className={`page-with-form__input-label  ${
          errors.email ? 'page-with-form__input-label_invalid' : ''
        }`}
        htmlFor="email"
      >
        {loginTexts.loginEmail}
        <input
          type="email"
          autoComplete="email"
          className="page-with-form__input"
          name="email"
          placeholder={loginTexts.loginEmail}
          required
          maxLength="30"
          id="email"
          value={form.username}
          onChange={handleChange}
        />
        <span className="page-with-form__error-text">{errors.email}</span>
      </label>

      <label
        className={`page-with-form__input-label  ${
          errors.password ? 'page-with-form__input-label_invalid' : ''
        }`}
        htmlFor="password"
      >
        {loginTexts.loginPassword}
        <input
          type="password"
          autoComplete="current-password"
          className="page-with-form__input"
          name="password"
          placeholder={loginTexts.loginPassword}
          required
          maxLength="40"
          id="password"
          value={form.password}
          onChange={handleChange}
        />
        <span className="page-with-form__error-text">{errors.password}</span>
      </label>
    </PageWithForm>
  );
}

SignIn.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

export default SignIn;
