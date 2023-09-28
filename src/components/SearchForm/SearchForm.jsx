import React, { useEffect } from 'react';
import './SearchForm.css';
import PropTypes from 'prop-types';
import useForm from '../../hooks/useForm';
// import { TEXTS_ERROR_MESSAGES } from '../../utils/constants';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useTranslation from '../../hooks/useTranslation';

function SearchForm({
  searchHandle,
  isShorts,
  isShortsHandler,
  setResetSavedMoviesSearch,
  lastSearchRequest,
}) {
  const { language } = React.useContext(CurrentUserContext);
  const { searchFormTexts, ERROR_MESSAGES_TEXTS, IS_RIGTH_TO_LEFT } =
    useTranslation(language);
  const {
    form,
    errors,
    handleChange,
    setCustomError,
    handleFocus,
    isActiveInput,
    setForm,
  } = useForm({
    search: lastSearchRequest,
    searchError: '',
  });

  useEffect(() => {
    setForm({ search: lastSearchRequest });
  }, [lastSearchRequest]);

  useEffect(() => {
    if (isActiveInput.name && form.search === '')
      setResetSavedMoviesSearch(true);
    else setResetSavedMoviesSearch(false);
  }, [form.search]);

  const searchSubmitHandle = (e) => {
    e.preventDefault();
    if (form.search === '') {
      setCustomError('search', ERROR_MESSAGES_TEXTS.SEARCH_EMPTY_ERROR);
    } else {
      searchHandle(form.search);
    }
  };

  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={searchSubmitHandle}>
        <label
          className={`search-form__label ${
            IS_RIGTH_TO_LEFT ? 'search-form__label_algin_right' : ''
          }`}
          htmlFor="search"
        >
          <input
            type="text"
            className={`search-form__input ${
              IS_RIGTH_TO_LEFT ? 'search-form__input_algin_right' : ''
            }`}
            name="search"
            placeholder={searchFormTexts.searchFormPlaceholder}
            id="search"
            maxLength="50"
            value={form.search}
            onChange={handleChange}
            onFocus={handleFocus}
          />
          <span className="search-form__error-text">{errors.search}</span>
        </label>
        <input
          type="submit"
          className="search-form__submit"
          name="movie-search-submit"
          aria-label={searchFormTexts.searchFormLabel}
          value=""
        />
      </form>

      <label className="search-form__checkbox-container" htmlFor="shortfilm">
        <input
          id="shortfilm"
          type="checkbox"
          className="search-form__checkbox"
          name="checkbox"
          checked={isShorts}
          onChange={isShortsHandler}
        />
        <span className="search-form__checkbox-indicator" />
        {searchFormTexts.searchFormCheckboxText}
      </label>
    </section>
  );
}

SearchForm.propTypes = {
  searchHandle: PropTypes.func.isRequired,
  isShorts: PropTypes.bool.isRequired,
  isShortsHandler: PropTypes.func.isRequired,
  setResetSavedMoviesSearch: PropTypes.func,
  lastSearchRequest: PropTypes.string,
};

SearchForm.defaultProps = {
  setResetSavedMoviesSearch: () => {},
  lastSearchRequest: '',
};

export default SearchForm;
