import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import PropTypes from 'prop-types';
import MoviesCard from '../MoviesCard/MoviesCard';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useTranslation from '../../hooks/useTranslation';
import {
  MOVIES_DISPLAY_TYPES,
  MOVIES_DISPLAY_COUNT,
  EXTRA_MOVIES_DISPLAY_COUNT,
  BREAKPOINTS,
} from '../../utils/constants';

function MoviesCardList({
  moviesArray,
  searchResultMessage,
  handleMovieButton,
  isChangingAction,
}) {
  const { language } = React.useContext(CurrentUserContext);
  const { MOVIES_CARD_LIST } = useTranslation(language);

  const location = useLocation();
  const isMovies = location.pathname === `/${language}/movies`;
  const [visibleMovies, setVisibleMovies] = useState(
    MOVIES_DISPLAY_COUNT.DESKTOP
  );
  const [displayState, setDisplayState] = useState(
    MOVIES_DISPLAY_TYPES.DESKTOP
  );

  useEffect(() => {
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (window.innerWidth < BREAKPOINTS.TABLET) {
          setDisplayState(MOVIES_DISPLAY_TYPES.MOBILE);
        } else if (
          window.innerWidth >= BREAKPOINTS.TABLET + 1 &&
          window.innerWidth <= BREAKPOINTS.DESKTOP
        ) {
          setDisplayState(MOVIES_DISPLAY_TYPES.TABLET);
        } else {
          setDisplayState(MOVIES_DISPLAY_TYPES.DESKTOP);
        }
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMovies) {
      setVisibleMovies(moviesArray.length);
    } else {
      setVisibleMovies(
        MOVIES_DISPLAY_COUNT[displayState] || MOVIES_DISPLAY_COUNT.MOBILE
      );
    }
  }, [displayState]);

  const handleLoadMore = () => {
    const extraMovies =
      displayState === MOVIES_DISPLAY_TYPES.DESKTOP
        ? EXTRA_MOVIES_DISPLAY_COUNT.DESKTOP
        : EXTRA_MOVIES_DISPLAY_COUNT.MOBILE;
    setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + extraMovies);
  };
  const moviesToShow = moviesArray.slice(0, visibleMovies);

  const movies = moviesToShow.length ? (
    moviesToShow.map((m) => (
      <MoviesCard
        key={m.movieId}
        movie={m}
        handleMovieButton={handleMovieButton}
        isChangingAction={isChangingAction}
      />
    ))
  ) : (
    <div className="movies-card-list__text-container">
      <p className="movies-card-list__text">{searchResultMessage}</p>
    </div>
  );

  return (
    <div className="movies-card-list">
      <div className="movies-card-list__container">{movies}</div>

      {isMovies &&
        movies.length !== moviesArray.length &&
        movies.length > 0 && (
          <button
            className="movies-card-list__button"
            type="button"
            onClick={handleLoadMore}
          >
            {MOVIES_CARD_LIST.MORE}
          </button>
        )}
    </div>
  );
}

MoviesCardList.propTypes = {
  moviesArray: PropTypes.arrayOf(
    PropTypes.shape({
      movieId: PropTypes.number.isRequired,
      nameRU: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,

      save: PropTypes.bool,
    })
  ),
  searchResultMessage: PropTypes.string.isRequired,
  handleMovieButton: PropTypes.func.isRequired,
  isChangingAction: PropTypes.bool,
};

MoviesCardList.defaultProps = {
  moviesArray: [
    {
      movieId: 0,
      nameRU: 'no name',
      duration: 0,
      image: '',
      save: false,
    },
  ],
  isChangingAction: false,
};

export default MoviesCardList;
