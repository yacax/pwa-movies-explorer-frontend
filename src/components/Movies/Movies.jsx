import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Movies.css';

import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Main from '../Main/Main';
import Preloader from '../Preloader/Preloader';

import useSearch from '../../hooks/useSearch';
import getMoviesRequest from '../../utils/MoviesApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';

import useTranslation from '../../hooks/useTranslation';

function Movies({
  savedMovies,
  handleMovieButton,
  allMoviesFromMoviesServer,
  setAllMoviesFromMoviesServer,
  isChangingAction,
}) {
  const { currentUser, language } = React.useContext(CurrentUserContext);
  const { TEXTS_ERROR_MESSAGES } = useTranslation(language);
  const location = useLocation();

  const {
    findedMovies,
    isNotFoundMessage,
    performSearch,
    isShortsOnly,
    setIsShortsOnly,
    setIsNotFoundMessage,
  } = useSearch(currentUser);

  const [isLoading, setIsLoading] = useState(false);

  const [matchedVsSavedMoviesArray, setMatchedVsSavedMoviesArray] = useState(
    []
  );
  const [lastSearchData, setLastSearchData] = useState({
    lastSearchRequest: '',
    lastFindedMovies: [],
    lastIsShortsOnly: false,
  });

  const setLocalStorageData = (key, newData) => {
    const currentData = JSON.parse(localStorage.getItem(key) || '{}');

    const data = {
      ...currentData,
      ...newData,
    };
    localStorage.setItem(key, JSON.stringify(data));
  };

  const getLocalStorageData = (key) => JSON.parse(localStorage.getItem(key));

  useEffect(() => {
    setIsShortsOnly(lastSearchData.lastIsShortsOnly);
    if (lastSearchData.lastFindedMovies.length) {
      performSearch(
        lastSearchData.lastSearchRequest,
        lastSearchData.lastFindedMovies
      );
    }
  }, [lastSearchData]);

  useEffect(() => {
    const restoreLastSearchData = getLocalStorageData(
      'lastSearchDataLocalStorage'
    );
    if (
      restoreLastSearchData !== null &&
      typeof restoreLastSearchData === 'object'
    ) {
      Object.entries(restoreLastSearchData).forEach(([key, value]) => {
        if (value) {
          setLastSearchData((prevState) => ({
            ...prevState,
            [key]: value,
          }));
        }
      });
    }
  }, [location]);

  const searchInAllMovies = (searchRequest) => {
    if (allMoviesFromMoviesServer.length === 0) {
      setIsLoading(true);
      getMoviesRequest()
        .then((res) => {
          setAllMoviesFromMoviesServer(res);
          performSearch(searchRequest, res);
          setLocalStorageData('lastSearchDataLocalStorage', {
            lastSearchRequest: searchRequest,
            lastFindedMovies: res,
          });
        })
        .catch((err) => {
          setIsNotFoundMessage(TEXTS_ERROR_MESSAGES.REQUEST_ERROR);
          console.log(err);
        })
        .finally(() => setIsLoading(false));
    } else {
      performSearch(searchRequest, allMoviesFromMoviesServer);
      setLocalStorageData('lastSearchDataLocalStorage', {
        lastSearchRequest: searchRequest,
        lastFindedMovies: allMoviesFromMoviesServer,
      });
    }
  };
  useEffect(() => {
    if (findedMovies.length) {
      const moviesArrayWithSavedFlags = findedMovies.map((movie) => ({
        ...movie,
        save: savedMovies.some((m) => m.movieId === movie.movieId),
      }));
      setMatchedVsSavedMoviesArray(moviesArrayWithSavedFlags);
    } else setMatchedVsSavedMoviesArray([]);
  }, [findedMovies, savedMovies, isShortsOnly]);

  const isShortsHandler = () => {
    setIsShortsOnly(!isShortsOnly);
    setLocalStorageData('lastSearchDataLocalStorage', {
      lastIsShortsOnly: !isShortsOnly,
    });
  };

  useEffect(() => {
    setIsNotFoundMessage('');
  }, []);

  return (
    <>
      <Header />
      <Main>
        <SearchForm
          searchHandle={searchInAllMovies}
          isShorts={isShortsOnly}
          isShortsHandler={isShortsHandler}
          lastSearchRequest={lastSearchData.lastSearchRequest}
        />
        <section className="movies">
          {isLoading ? (
            <Preloader />
          ) : (
            <MoviesCardList
              moviesArray={matchedVsSavedMoviesArray}
              searchResultMessage={isNotFoundMessage}
              handleMovieButton={handleMovieButton}
              isChangingAction={isChangingAction}
            />
          )}
        </section>
      </Main>
      <Footer />
    </>
  );
}

Movies.propTypes = {
  savedMovies: PropTypes.arrayOf(
    PropTypes.shape({
      movieId: PropTypes.number,
    })
  ),
  handleMovieButton: PropTypes.func,
  allMoviesFromMoviesServer: PropTypes.arrayOf(
    PropTypes.shape({
      movieId: PropTypes.number,
    })
  ).isRequired,
  setAllMoviesFromMoviesServer: PropTypes.func.isRequired,
  isChangingAction: PropTypes.bool,
};

Movies.defaultProps = {
  savedMovies: PropTypes.shape([
    {
      moveisId: 0,
    },
  ]),
  handleMovieButton: () => {},
  isChangingAction: false,
};

export default Movies;
