import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import MainPage from '../MainPage/MainPage';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtetedRoute';
import IsLogginedProtectedRoute from '../IsLogginedProtectedRoute';
import Info from '../Info/Info';
import useAuth from '../../hooks/useAuth';
import useMovie from '../../hooks/useMovie';
import {
  VALID_PATHS,
  SUPPORTED_LANGUAGES,
  DEFAULT_LANGUAGE,
} from '../../utils/constants';

function App() {
  const location = useLocation();
  const match = navigator.language.match(/^([a-z]{2})/i);
  const [currentUser, setCurrentUser] = useState({
    _id: '',
    name: '',
    email: '',
    isLoggedIn: false,
    language: '',
  });

  useEffect(() => {
    if (currentUser.language === '') {
      const storedLanguage = localStorage.getItem('language');
      const browserLanguage =
        match && match[1] ? match[1].toUpperCase() : DEFAULT_LANGUAGE;

      const preferredLanguage =
        storedLanguage ||
        (SUPPORTED_LANGUAGES.includes(browserLanguage)
          ? browserLanguage
          : DEFAULT_LANGUAGE);

      setCurrentUser((prevUser) => ({
        ...prevUser,
        language: preferredLanguage,
      }));
    }
  }, []);

  const changeLanguage = (newLanguage) => {
    setCurrentUser((prevUser) => ({ ...prevUser, language: newLanguage }));
  };

  const userContextValue = React.useMemo(() => {
    return {
      ...currentUser,
      changeLanguage,
    };
  }, [currentUser, changeLanguage]);

  const [allMoviesFromMoviesServer, setAllMoviesFromMoviesServer] = useState(
    []
  );

  const auth = useAuth(setCurrentUser);
  const {
    savedMovies,
    setSavedMovies,
    saveMovieButtonHandle,
    updateSavedMovies,
  } = useMovie(currentUser);

  useEffect(() => {
    if (savedMovies.length === 0) {
      const savedMoviesFromStorage = JSON.parse(
        localStorage.getItem('savedMovies')
      );
      if (savedMoviesFromStorage) {
        setSavedMovies(savedMoviesFromStorage);
      } else updateSavedMovies();
    }
  }, []);

  useEffect(() => {
    if (VALID_PATHS.includes(location.pathname)) {
      localStorage.setItem('lastValidPath', location.pathname);
    }
  }, [location]);

  useEffect(() => {
    localStorage.setItem('language', currentUser.language);
  }, [currentUser.language]);

  return (
    <CurrentUserContext.Provider value={userContextValue}>
      <div className="body">
        <div className="page">
          <Routes>
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  path="/movies"
                  component={Movies}
                  savedMovies={savedMovies}
                  handleMovieButton={saveMovieButtonHandle}
                  allMoviesFromMoviesServer={allMoviesFromMoviesServer}
                  setAllMoviesFromMoviesServer={setAllMoviesFromMoviesServer}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  path="/saved-movies"
                  component={SavedMovies}
                  savedMovies={savedMovies}
                  handleMovieButton={saveMovieButtonHandle}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  path="/profile"
                  component={Profile}
                  changeProfile={auth.changeProfile}
                  logOut={auth.logOut}
                />
              }
            />
            <Route path="/" element={<MainPage />} />
            <Route
              path="/signin"
              element={
                <IsLogginedProtectedRoute
                  component={Login}
                  loginUser={auth.loginUser}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <IsLogginedProtectedRoute
                  component={Register}
                  registerUser={auth.registerUser}
                />
              }
            />
            <Route
              path="*"
              element={
                <NotFoundPage
                  lastPath={localStorage.getItem('lastValidPath')}
                />
              }
            />
          </Routes>
        </div>
        <Info {...auth.info} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
