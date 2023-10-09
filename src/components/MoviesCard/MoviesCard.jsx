import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import PropTypes from 'prop-types';
import { DEFAULT_LANGUAGE } from '../../utils/constants';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useTranslation from '../../hooks/useTranslation';

function MoviesCard({ movie, handleMovieButton, isChangingAction }) {
  const { language } = React.useContext(CurrentUserContext);
  const { MOVIES_CARD, IS_RIGTH_TO_LEFT } = useTranslation(language);
  const location = useLocation();

  const savedMoviesPage = location.pathname === `/${language}/saved-movies`;
  const toDoDurationInHours = (min) =>
    `${Math.floor(min / 60)}${MOVIES_CARD.HOURS} ${min % 60}${
      MOVIES_CARD.MINUTES
    }`;
  const durationInHours = toDoDurationInHours(movie.duration);

  const movieNameCurrentLanguage = `name${language.toUpperCase()}`;
  const movieNameKey =
    movieNameCurrentLanguage in movie
      ? movieNameCurrentLanguage
      : `name${DEFAULT_LANGUAGE.toUpperCase()}`;

  return (
    <div className="movies-card">
      <h1 className="movies-card__title">{movie[movieNameKey]}</h1>
      <p className="movies-card__text">{durationInHours}</p>
      <input
        type="button"
        className={`movies-card__save-button ${
          movie.save && !savedMoviesPage
            ? 'movies-card__save-button_type_active'
            : ''
        }
        ${savedMoviesPage ? 'movies-card__save-button_type_delete' : ''}
        ${IS_RIGTH_TO_LEFT ? 'movies-card__save-button_algin-right' : ''}
        `}
        name="movies-card__save-button"
        aria-label={MOVIES_CARD.SAVE_MOVIE}
        value=""
        onClick={() => {
          handleMovieButton(movie);
        }}
        disabled={isChangingAction}
      />
      <a
        className="movies-card__trailer-link"
        href={movie.trailerLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={movie.image}
          alt={movie.nameRU}
          className="movies-card__image"
        />
      </a>
    </div>
  );
}

MoviesCard.propTypes = {
  movie: PropTypes.shape({
    movieId: PropTypes.number.isRequired,
    nameRU: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    save: PropTypes.bool,
    trailerLink: PropTypes.string.isRequired,
  }),
  handleMovieButton: PropTypes.func.isRequired,
  isChangingAction: PropTypes.bool,
};

MoviesCard.defaultProps = {
  movie: {
    id: 0,
    nameRU: 'no name',
    duration: 'no name',
    link: 'no name',
    image: '',
    save: false,
  },
  isChangingAction: false,
};

export default MoviesCard;
