import ru from './languages/ru';
import en from './languages/en';
import he from './languages/he';

const BASE_BACKEND_URL = 'https://api.tarantino.nomoredomains.work';
const BASE_MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';
const BASE_IMAGE_URL = 'https://api.nomoreparties.co/';

const REGEXP = {
  EMAIL: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
  JWT_PATTERN: /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/,
};

const TEXTS_ERROR_MESSAGES = {
  REQUEST_ERROR:
    'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.',
  MOVIE_NOT_FOUND_ERROR: 'Ничего не найдено',
  SEARCH_EMPTY_ERROR: 'Нужно ввести ключевое слово',
};

const AUTH_ERROR_MESSAGES = {
  HELLO: 'Здравствуйте!',
  SUCCESS_REGISTRATION: 'Вы успешно зарегистрировались!',
  SERVER_RESP_ERROR: 'Ошибка в ответе с сервера',
  SMTH_WENT_WRONG: 'Что-то пошло не так! Попробуйте ещё раз.',
  SUCCESS: 'Успешно!',
};

const BASE_ERROR_MESAGE = 'Something went wrong! Please try again';
const DEFAULT_POPUP_DELAY = 5000;

// const FORM_ERRORS_MESSAGES = {
//   EMAIL: 'Неверный адрес электронной почты',
//   CONFIRM_PASSWORD: 'Пароли не одинаковые',
// };

const VALID_PATHS = [
  '/movies',
  '/saved-movies',
  '/profile',
  '/signin',
  '/signup',
];

const MOVIES_DISPLAY_TYPES = {
  MOBILE: 'MOBILE',
  TABLET: 'TABLET',
  DESKTOP: 'DESKTOP',
};

const MOVIES_DISPLAY_COUNT = {
  MOBILE: 5,
  TABLET: 8,
  DESKTOP: 12,
};

const EXTRA_MOVIES_DISPLAY_COUNT = {
  MOBILE: 2,
  TABLET: 2,
  DESKTOP: 3,
};

const BREAKPOINTS = {
  MOBILE: 480 - 1,
  TABLET: 768 - 1,
  DESKTOP: 1280 - 1,
};

const SUPPORTED_LANGUAGES = ['RU', 'EN', 'עבר'];
const DEFAULT_LANGUAGE = 'EN';

const TRANSLATION = { EN: en, RU: ru, HE: he };

export {
  BASE_BACKEND_URL,
  BASE_MOVIES_URL,
  BASE_IMAGE_URL,
  BASE_ERROR_MESAGE,
  REGEXP,
  TEXTS_ERROR_MESSAGES,
  VALID_PATHS,
  SUPPORTED_LANGUAGES,
  DEFAULT_LANGUAGE,
  AUTH_ERROR_MESSAGES,
  TRANSLATION,
  DEFAULT_POPUP_DELAY,
  MOVIES_DISPLAY_COUNT,
  MOVIES_DISPLAY_TYPES,
  EXTRA_MOVIES_DISPLAY_COUNT,
  BREAKPOINTS,
};
