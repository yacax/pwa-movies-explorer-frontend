import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
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
import useMovie from '../../hooks/useMovie';
import {
  VALID_PATHS,
  SUPPORTED_LANGUAGES,
  DEFAULT_LANGUAGE,
  REGEXP,
} from '../../utils/constants';
import mainApi from '../../utils/MainApi';
import useTranslation from '../../hooks/useTranslation';
import usePopup from '../../hooks/usePopup';
import Loading from '../Loading/Loading';

function App() {
  const [currentUser, setCurrentUser] = useState({
    _id: '',
    name: '',
    email: '',
    isLoggedIn: false,
    language: '',
  });
  const [token, setToken] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { AUTH_MESSAGES } = useTranslation(currentUser.language);
  const [showInfoMessage, isOpen, message, isMessageType] = usePopup();
  const match = navigator.language.match(/^([a-z]{2})/i);
  const userTest = (id, name, email) => !!(id && name && email);
  const jwtTest = (jwt) => {
    const jwtPattern = REGEXP.JWT_PATTERN;
    return jwtPattern.test(jwt.token);
  };

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

  const [isLoading, setIsLoading] = useState(true);

  const { savedMovies, setSavedMovies, saveMovieButtonHandle } =
    useMovie(currentUser);
  useEffect(() => {
    if (savedMovies.length === 0) {
      const savedMoviesFromStorage = JSON.parse(
        localStorage.getItem('savedMoviesLocalStorage')
      );
      if (savedMoviesFromStorage) {
        setSavedMovies(savedMoviesFromStorage);
      }
    }
  }, []);

  useEffect(() => {
    if (VALID_PATHS.includes(location.pathname) || location.pathname === '/') {
      localStorage.setItem('lastValidPath', location.pathname);
    }
  }, [location]);

  useEffect(() => {
    if (currentUser.language)
      localStorage.setItem('languageLocalStorage', currentUser.language);
  }, [currentUser.language]);

  useEffect(() => {
    const isMobileDevice = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    };

    if (isMobileDevice()) {
      const viewportMetaTag = document.createElement('meta');
      viewportMetaTag.name = 'viewport';
      viewportMetaTag.content =
        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
      document.getElementsByTagName('head')[0].appendChild(viewportMetaTag);
    }

    const lastValidPath = localStorage.getItem('lastValidPath');
    if (lastValidPath) navigate(lastValidPath);

    if (currentUser.language === '') {
      const storedLanguage = localStorage.getItem('languageLocalStorage');
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
    const jwt = localStorage.getItem('jwt');
    setToken(jwt);
    mainApi.setToken(jwt);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (!token) {
      setIsLoading(false);
      return;
    }
    mainApi
      .getUserData(token)
      .then((user) => {
        if (userTest(user.data._id, user.data.name, user.data.email)) {
          setCurrentUser((prevState) => ({
            ...prevState,
            _id: user.data._id,
            name: user.data.name,
            email: user.data.email,
            isLoggedIn: true,
          }));
        } else {
          showInfoMessage(AUTH_MESSAGES.SERVER_RESP_ERROR);
        }
      })
      .catch((err) => {
        console.log(err);
        showInfoMessage(AUTH_MESSAGES.SMTH_WENT_WRONG);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [token]);

  const loginUser = ({ email, password }) => {
    setIsLoading(true);
    mainApi
      .authorize(email, password)
      .then((res) => {
        if (jwtTest(res)) {
          localStorage.setItem('jwt', res.token);
          mainApi.setToken(res.token);
        } else {
          showInfoMessage(AUTH_MESSAGES.SERVER_RESP_ERROR);
          throw new Error(AUTH_MESSAGES.SERVER_RESP_ERROR);
        }
        return mainApi.getUserData(res.token);
      })
      .then((res) => {
        setCurrentUser((prevState) => ({
          ...prevState,
          _id: res.data._id,
          name: res.data.name,
          email: res.data.email,
          isLoggedIn: true,
        }));
        showInfoMessage(`${AUTH_MESSAGES.HELLO} ${res.data.name}!`, true);
        navigate('/movies');
      })
      .catch((err) => {
        console.log(err);
        showInfoMessage(AUTH_MESSAGES.SMTH_WENT_WRONG, false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const registerUser = ({ name, email, password }) => {
    setIsLoading(true);
    mainApi
      .register(name, email, password)
      .then((res) => {
        if (userTest(res._id, res.name, res.email)) {
          showInfoMessage(AUTH_MESSAGES.SUCCESS_REGISTRATION, true);
        } else {
          showInfoMessage(AUTH_MESSAGES.SERVER_RESP_ERROR);
          throw new Error(AUTH_MESSAGES.SERVER_RESP_ERROR);
        }
        return {
          _id: res._id,
          name: res.name,
          email: res.email,
        };
      })
      .then(({ _id: resId, name: resName, email: resEmail }) => {
        mainApi
          .authorize(resEmail, password)
          .then((res) => {
            if (jwtTest(res)) {
              localStorage.setItem('jwt', res.token);
              mainApi.setToken(res.token);
              setCurrentUser((prevState) => ({
                ...prevState,
                _id: resId,
                name: resName,
                email: resEmail,
                isLoggedIn: true,
              }));
              navigate('/movies');
            } else {
              showInfoMessage(AUTH_MESSAGES.SERVER_RESP_ERROR);
            }
          })
          .catch((err) => {
            console.log(err);
            showInfoMessage(AUTH_MESSAGES.SMTH_WENT_WRONG);
          });
      })
      .catch((err) => {
        console.log(err);
        showInfoMessage(AUTH_MESSAGES.SMTH_WENT_WRONG);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const changeProfile = (user) => {
    mainApi
      .patchUserData(user.name, user.email)
      .then((res) => {
        if (userTest(res.data._id, res.data.name, res.data.email)) {
          setCurrentUser((prevState) => ({
            ...prevState,
            name: res.data.name,
            email: res.data.email,
          }));
          showInfoMessage(AUTH_MESSAGES.SUCCESS, true);
        }
      })
      .catch((err) => {
        console.log(err);
        showInfoMessage(AUTH_MESSAGES.SMTH_WENT_WRONG);
      });
  };

  const logOut = () => {
    navigate('/');
    setToken('');
    setCurrentUser((prevState) => ({
      ...prevState,
      _id: '',
      name: '',
      email: '',
      isLoggedIn: false,
      language: '',
    }));
    localStorage.removeItem('jwt');
    localStorage.removeItem('lastSearchDataLocalStorage');
    localStorage.removeItem('savedMoviesLocalStorage');
    localStorage.removeItem('languageLocalStorage');
    localStorage.removeItem('lastValidPath');
    localStorage.removeItem('userDismissedPwaLocalStorage');
  };

  if (isLoading) {
    return <Loading />;
  }

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
                  changeProfile={changeProfile}
                  logOut={logOut}
                />
              }
            />
            <Route path="/" element={<MainPage />} />
            <Route
              path="/signin"
              element={
                <IsLogginedProtectedRoute
                  component={Login}
                  loginUser={loginUser}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <IsLogginedProtectedRoute
                  component={Register}
                  registerUser={registerUser}
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
        <Info
          isOpen={isOpen}
          infoMessage={message}
          isMessageType={isMessageType}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
