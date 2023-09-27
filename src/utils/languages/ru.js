const navigationTexts = {
  signUp: 'Регистрация',
  signIn: 'Войти',
  navigationMainPage: 'Главная',
  navigationMovies: 'Фильмы',
  navigationSavedMovies: 'Сохранённые фильмы',
  navigationProfile: 'Аккаунт',
  navigationClosePopup: 'Закрыть',
};

const linksNames = {
  aboutProject: 'О проекте',
  aboutTech: 'Технологии',
  aboutStudent: 'Студент',
  github: 'Github',
};

const mainContent = {
  promo: 'Учебный проект студента факультета Веб-разработки.',
  aboutProject: 'О проекте',
  aboutProjectFirstColumnTitle: 'Дипломный проект включал 5 этапов',
  aboutProjectFirstColumnText:
    'Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.',
  aboutProjectSecondColumnTitle: 'На выполнение диплома ушло 5 недель',
  aboutProjectSecondColumnText:
    'У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.',
  firstGantPart: '1 неделя',
  secondGantPart: '4 недели',
  firstGantComment: 'Back-end',
  secondGantComment: 'Front-end',
  aboutTech: 'Технологии',
  aboutTechTitle: '7 технологий',
  aboutTechSubtitle:
    'На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.',
  aboutTechFirstColumnTitle: 'HTML',
  aboutTechSecondColumnTitle: 'CSS',
  aboutTechThirdColumnTitle: 'JS',
  aboutTechFourthColumnTitle: 'React',
  aboutTechFifthColumnTitle: 'Git',
  aboutTechSixthColumnTitle: 'Express.js',
  aboutTechSeventhColumnTitle: 'mongoDB',
  aboutStudent: 'Студент',
  aboutStudentTitle: 'Александр',
  aboutStudentSubtitle: 'Фронтенд-разработчик',
  aboutStudentText:
    'Я родился и вырос в Санкт-Петербурге, закончил факультет КТиУ ИТМО. У меня есть жена и две дочки. Я люблю слушать музыку, ходить на концерты, играть в волейбол и увлекаюсь бегом. Некоторое время я был инженером, потом работал в продажах. Мне всегда нравился дизайн, а недавно я начал кодить. После того как закончу курс Веб-разработчик от Яндекс Практикум, буду делать крутые штуки в сети.',
  aboutStudentAlt: 'Thats me!',
  portfolio: 'Портфолио',
  portfolioTitle: 'Портфолио',
  portfolioSiteStatic: 'Статичный сайт',
  portfolioSiteAdaptive: 'Адаптивный сайт',
  portfolioSiteSinglePage: 'Одностраничное приложение',
  PWA_BUTTON: 'Установить приложение',
};

const footerTexts = {
  copyRightText: '© Учебный проект Яндекс.Практикум х\u00A0BeatFilm.',
  footerLinkText: 'Яндекс.Практикум',
};

const loginTexts = {
  loginTitle: 'Рады видеть!',
  loginEmail: 'E-mail',
  loginPassword: 'Пароль',
  loginButton: 'Войти',
  loginText: 'Ещё не зарегистрированы?',
  loginLink: 'Регистрация',
};

const registerTexts = {
  registerTitle: 'Добро пожаловать!',
  registerName: 'Имя',
  registerEmail: 'E-mail',
  registerPassword: 'Пароль',
  registerPasswordAgain: 'Повторите пароль',
  registerButton: 'Зарегистрироваться',
  registerText: 'Уже зарегистрированы?',
  registerLink: 'Войти',
};

const searchFormTexts = {
  searchFormPlaceholder: 'Фильм',
  searchFormLabel: 'Найти фильм',
  searchFormCheckboxText: 'Короткометражки',
};

const moviesTexts = {
  moviesTitle: 'Фильмы',
  moviesSearch: 'Фильм',
  moviesCheckbox: 'Короткометражки',
  moviesPreloader: 'Идет поиск фильмов...',
  moviesButton: 'Ещё',
  moviesButtonDisabled: 'Нет больше фильмов',
  moviesButtonLoad: 'Загрузить ещё',
};

const MOVIES_CARD = {
  SAVE_MOVIE: 'Сохранить фильм',
};

const MOVIES_CARD_LIST = {
  MORE: 'Ещё',
};

const errorMessagesTexts = {
  REQUEST_ERROR:
    'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.',
  MOVIE_NOT_FOUND_ERROR: 'Ничего не найдено',
  SEARCH_EMPTY_ERROR: 'Нужно ввести ключевое слово',
};

const AUTH_MESSAGES = {
  HELLO: 'Здравствуйте,',
  SUCCESS_REGISTRATION: 'Вы успешно зарегистрировались!',
  SERVER_RESP_ERROR: 'Ошибка в ответе с сервера',
  SMTH_WENT_WRONG: 'Что-то пошло не так! Попробуйте ещё раз.',
  SUCCESS: 'Успешно!',
};

const FORM_ERRORS_MESSAGES = {
  EMAIL: 'Неверный адрес электронной почты',
  CONFIRM_PASSWORD: 'Пароли не одинаковые',
};

const profileTexts = {
  PROFILE_TITLE: 'Привет',
  PROFILE_EMAIL: 'E-mail',
  PROFILE_NAME: 'Имя',
  PROFILE_EDIT_ARIA_LABLE: 'Редактировать профиль',
  PROFILE_EDIT_BUTTON: 'Редактировать',
  PROFILE_LOGOUT_BUTTON: 'Выйти из аккаунта',
  PROFILE_SAVE_ARIA_LABLE: 'Сохранить изменения',
  PROFILE_SAVE_BUTTON: 'Сохранить',
};

const NOT_FOUND_PAGE = {
  TITLE: '404',
  TEXT: 'Страница не найдена',
  LINK: 'Назад',
};

export default {
  navigationTexts,
  linksNames,
  mainContent,
  footerTexts,
  loginTexts,
  registerTexts,
  searchFormTexts,
  moviesTexts,
  errorMessagesTexts,
  AUTH_MESSAGES,
  FORM_ERRORS_MESSAGES,
  profileTexts,
  MOVIES_CARD,
  MOVIES_CARD_LIST,
  NOT_FOUND_PAGE,
};
