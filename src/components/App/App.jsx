import React, { useState, useEffect, Suspense, lazy } from 'react';
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  Navigate,
} from 'react-router-dom';
import './App.css';
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
import usePath from '../../hooks/usePath';

const MainPage = lazy(() => import('../MainPage/MainPage'));
const Movies = lazy(() => import('../Movies/Movies'));
const SavedMovies = lazy(() => import('../SavedMovies/SavedMovies'));
const Profile = lazy(() => import('../Profile/Profile'));
const Login = lazy(() => import('../Login/Login'));
const Register = lazy(() => import('../Register/Register'));
const NotFoundPage = lazy(() => import('../NotFoundPage/NotFoundPage'));

function App() {
  const [currentUser, setCurrentUser] = useState({
    _id: '',
    name: '',
    email: '',
    isLoggedIn: false,
    language: DEFAULT_LANGUAGE,
  });
  const [token, setToken] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { pathWithoutLanguage, pathMatchWithLanguage } = usePath();
  const { AUTH_MESSAGES, IS_RIGTH_TO_LEFT } = useTranslation(
    currentUser.language
  );
  const [showInfoMessage, isOpen, message, isMessageType] = usePopup();
  const matchBrowserLanguage = navigator.language.match(REGEXP.BROWSER_LANG);
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

  const {
    savedMovies,
    setSavedMovies,
    saveMovieButtonHandle,
    isChangingAction,
  } = useMovie(currentUser);

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
    if (VALID_PATHS.includes(pathWithoutLanguage)) {
      localStorage.setItem('lastValidPath', location.pathname);
    }
    if (
      pathMatchWithLanguage &&
      pathMatchWithLanguage[1] &&
      SUPPORTED_LANGUAGES.includes(pathMatchWithLanguage[1]) &&
      currentUser.language !== pathMatchWithLanguage[1]
    ) {
      setCurrentUser((prevUser) => ({
        ...prevUser,
        language: pathMatchWithLanguage[1],
      }));
    }
  }, [location]);

  useEffect(() => {
    if (currentUser.language) {
      localStorage.setItem('languageLocalStorage', currentUser.language);
    }
    document.documentElement.setAttribute(
      'dir',
      IS_RIGTH_TO_LEFT ? 'rtl' : 'ltr'
    );
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

    if (currentUser.language === '') {
      const storedLanguage = localStorage.getItem('languageLocalStorage');
      const browserLanguage =
        matchBrowserLanguage && matchBrowserLanguage[1]
          ? matchBrowserLanguage[1]
          : DEFAULT_LANGUAGE;

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

        const lastValidPath = localStorage.getItem('lastValidPath');
        if (lastValidPath) navigate(lastValidPath);
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
        navigate(`/${currentUser.language}/movies`);
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
              navigate(`/${currentUser.language}/movies`);
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
    navigate(`/${DEFAULT_LANGUAGE}/`);
    setToken('');
    setCurrentUser((prevState) => ({
      ...prevState,
      _id: '',
      name: '',
      email: '',
      isLoggedIn: false,
    }));
    localStorage.removeItem('jwt');
    localStorage.removeItem('lastSearchDataLocalStorage');
    localStorage.removeItem('savedMoviesLocalStorage');
    localStorage.removeItem('languageLocalStorage');
    localStorage.removeItem('lastValidPath');
    localStorage.removeItem('userDismissedPwaLocalStorage');
  };

  if (isLoading) {
    return <Loading language={currentUser.language} />;
  }

  return (
    <CurrentUserContext.Provider value={userContextValue}>
      <div className="body">
        <div className="page">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route
                path="/"
                element={
                  <Navigate
                    to={`/${currentUser.language || DEFAULT_LANGUAGE}/`}
                  />
                }
              />
              <Route
                path="/:lang/movies"
                element={
                  <ProtectedRoute
                    path="/:lang/movies"
                    component={Movies}
                    savedMovies={savedMovies}
                    isChangingAction={isChangingAction}
                    handleMovieButton={saveMovieButtonHandle}
                    allMoviesFromMoviesServer={allMoviesFromMoviesServer}
                    setAllMoviesFromMoviesServer={setAllMoviesFromMoviesServer}
                  />
                }
              />
              <Route
                path="/:lang/saved-movies"
                element={
                  <ProtectedRoute
                    path="/:lang/saved-movies"
                    component={SavedMovies}
                    savedMovies={savedMovies}
                    isChangingAction={isChangingAction}
                    handleMovieButton={saveMovieButtonHandle}
                  />
                }
              />
              <Route
                path="/:lang/profile"
                element={
                  <ProtectedRoute
                    path="/:lang/profile"
                    component={Profile}
                    changeProfile={changeProfile}
                    logOut={logOut}
                  />
                }
              />
              <Route path="/:lang" element={<MainPage />} />
              <Route
                path="/:lang/signin"
                element={
                  <IsLogginedProtectedRoute
                    component={Login}
                    loginUser={loginUser}
                  />
                }
              />
              <Route
                path="/:lang/signup"
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
          </Suspense>
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
