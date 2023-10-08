const NAVIGATION_TEXTS = {
  SIGN_UP: 'Sign Up',
  SIGN_IN: 'Sign In',
  NAVIGATION_MAIN_PAGE: 'Home',
  NAVIGATION_MOVIES: 'Movies',
  NAVIGATION_SAVED_MOVIES: 'Saved Movies',
  NAVIGATION_PROFILE: 'Account',
  NAVIGATION_CLOSE_POPUP: 'Close',
};

const LINKS_NAMES = {
  ABOUT_PROJECT: 'About the Project',
  ABOUT_TECH: 'Technologies',
  ABOUT_STUDENT: 'Student',
  GITHUB: 'Github',
};

const MAIN_CONTENT = {
  PROMO: 'The student project from the\u00A0Web Development Faculty',
  ABOUT_PROJECT: 'About the Project',
  ABOUT_PROJECT_FIRST_COLUMN_TITLE: 'The diploma project included 5 stages',
  ABOUT_PROJECT_FIRST_COLUMN_TEXT:
    'Drafting a plan, backend development, markup, adding functionality, and final refinements.',
  ABOUT_PROJECT_SECOND_COLUMN_TITLE: 'The diploma took 5 weeks to complete',
  ABOUT_PROJECT_SECOND_COLUMN_TEXT:
    'Each stage had a soft and hard deadline, which needed to be met for a successful defense.',
  FIRST_GANT_PART: '1 week',
  SECOND_GANT_PART: '4 weeks',
  FIRST_GANT_COMMENT: 'Back-end',
  SECOND_GANT_COMMENT: 'Front-end',
  ABOUT_TECH: 'Technologies',
  ABOUT_TECH_TITLE: '7 technologies',
  ABOUT_TECH_SUBTITLE:
    'During the web development course, we mastered the technologies used in the diploma project.',
  ABOUT_TECH_FIRST_COLUMN_TITLE: 'HTML',
  ABOUT_TECH_SECOND_COLUMN_TITLE: 'CSS',
  ABOUT_TECH_THIRD_COLUMN_TITLE: 'JS',
  ABOUT_TECH_FOURTH_COLUMN_TITLE: 'React',
  ABOUT_TECH_FIFTH_COLUMN_TITLE: 'Git',
  ABOUT_TECH_SIXTH_COLUMN_TITLE: 'Express.js',
  ABOUT_TECH_SEVENTH_COLUMN_TITLE: 'mongoDB',
  ABOUT_STUDENT: 'Student',
  ABOUT_STUDENT_TITLE: 'Alex',
  ABOUT_STUDENT_SUBTITLE: 'Frontend Developer',
  ABOUT_STUDENT_TEXT:
    'I was born and raised in Saint Petersburg and graduated from the Faculty of CTU at ITMO. I have a wife and two daughters. I love listening to music, attending concerts, playing volleyball, and am keen on running. For some time I was an engineer, then worked in sales. I have always loved design, and recently I started coding. After completing the Web Developer course from Yandex Practicum, I will be doing cool stuff online.',
  ABOUT_STUDENT_ALT: 'Это я!',
  PORTFOLIO: 'Portfolio',
  PORTFOLIO_TITLE: 'Portfolio',
  PORTFOLIO_GITHUB_LINK: 'https://github.com/yacax',
  PORTFOLIO_SITE_STATIC: 'Static Site',
  PORTFOLIO_SITE_STATIC_LINK: 'https://yacax.github.io/how-to-learn/',
  PORTFOLIO_SITE_ADAPTIVE: 'Adaptive Site',
  PORTFOLIO_SITE_ADAPTIVE_LINK: 'https://yacax.github.io/russian-travel/',
  PORTFOLIO_SITE_SINGLE_PAGE: 'Single Page Application',
  PORTFOLIO_SITE_SINGLE_PAGE_LINK: 'https://yacax.github.io/react-mesto-auth/',
  PWA_BUTTON: 'Install the app',
};

const FOOTER_TEXT = {
  COPYRIGHT_TEXT: '© Yandex.Practicum Educational Project x\u00A0BeatFilm.',
  FOOTRE_LINK_TEXT: 'Yandex.Practicum',
};

const LOGIN_TEXT = {
  LOGIN_TITLE: 'Glad to see you!',
  LOGIN_EMAIL: 'E-mail',
  LOGIN_PASSWORD: 'Password',
  LOGIN_BUTTON: 'Log in',
  LOGIN_TEXT: 'Not registered yet?',
  LOGIN_LINK: 'Sign up',
};

const REGISTER_TEXT = {
  REGISTER_TITLE: 'Welcome!',
  REGISTER_NAME: 'Name',
  REGISTER_EMAIL: 'E-mail',
  REGISTER_PASSWORD: 'Password',
  REGISTER_PASSWORD_AGAIN: 'Repeat Password',
  REGISTER_BUTTON: 'Sign Up',
  REGISTER_TEXT: 'Already registered?',
  REGISTER_LINK: 'Sign In',
};

const SEARCH_FORM_TEXT = {
  SEARCH_FORM_PLACEHOLDER: 'Movie',
  SEARCH_FORM_LABLE: 'Find a movie',
  SEARCH_FORM_CHECKBOX_TEXT: 'Short films',
};

const MOVIES_CARD = {
  SAVE_MOVIE: 'Save movie',
};

const MOVIES_CARD_LIST = {
  MORE: 'More',
};

const ERROR_MESSAGES_TEXTS = {
  REQUEST_ERROR:
    'An error occurred during the request. It might be a connection issue or the server is unavailable. Please wait a moment and try again.',
  MOVIE_NOT_FOUND_ERROR: 'Nothing found',
  SEARCH_EMPTY_ERROR: 'You need to enter a keyword',
};

const AUTH_MESSAGES = {
  HELLO: 'Hello, ',
  SUCCESS_REGISTRATION: 'You have successfully registered!',
  SERVER_RESP_ERROR: 'Server response error',
  SMTH_WENT_WRONG: 'Something went wrong! Please try again.',
  SUCCESS: 'Success!',
};

const FORM_ERRORS_MESSAGES = {
  EMAIL: 'Invalid email address',
  CONFIRM_PASSWORD: 'Passwords do not match',
};

const PROFILE_TEXTS = {
  PROFILE_TITLE: 'Hello',
  PROFILE_EMAIL: 'E-mail',
  PROFILE_NAME: 'Name',
  PROFILE_EDIT_ARIA_LABLE: 'Edit profile',
  PROFILE_EDIT_BUTTON: 'Edit',
  PROFILE_LOGOUT_BUTTON: 'Logout',
  PROFILE_SAVE_ARIA_LABLE: 'Save changes',
  PROFILE_SAVE_BUTTON: 'Save',
};

const LOADING = {
  TEXT: 'Loading',
};

const NOT_FOUND_PAGE = {
  TITLE: '404',
  TEXT: 'Page not found',
  LINK: 'Back',
};

const LANGUAGE_DIRECTION = 'ltr';
const IS_RIGTH_TO_LEFT = LANGUAGE_DIRECTION === 'rtl';

export default {
  NAVIGATION_TEXTS,
  LINKS_NAMES,
  MAIN_CONTENT,
  FOOTER_TEXT,
  LOGIN_TEXT,
  REGISTER_TEXT,
  SEARCH_FORM_TEXT,
  ERROR_MESSAGES_TEXTS,
  AUTH_MESSAGES,
  FORM_ERRORS_MESSAGES,
  PROFILE_TEXTS,
  MOVIES_CARD,
  MOVIES_CARD_LIST,
  NOT_FOUND_PAGE,
  LOADING,
  LANGUAGE_DIRECTION,
  IS_RIGTH_TO_LEFT,
};
