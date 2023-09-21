const navigationTexts = {
  signUp: 'Sign Up',
  signIn: 'Sign In',
  navigationMainPage: 'Home',
  navigationMovies: 'Movies',
  navigationSavedMovies: 'Saved Movies',
  navigationProfile: 'Account',
  navigationClosePopup: 'Close',
};

const linksNames = {
  aboutProject: 'About the Project',
  aboutTech: 'Technologies',
  aboutStudent: 'Student',
  github: 'Github',
};

const mainContent = {
  promo: 'The student project from the\u00A0Web Development Faculty.',
  aboutProject: 'About the Project',
  aboutProjectFirstColumnTitle: 'The diploma project included 5 stages',
  aboutProjectFirstColumnText:
    'Drafting a plan, backend development, markup, adding functionality, and final refinements.',
  aboutProjectSecondColumnTitle: 'The diploma took 5 weeks to complete',
  aboutProjectSecondColumnText:
    'Each stage had a soft and hard deadline, which needed to be met for a successful defense.',
  firstGantPart: '1 week',
  secondGantPart: '4 weeks',
  firstGantComment: 'Back-end',
  secondGantComment: 'Front-end',
  aboutTech: 'Technologies',
  aboutTechTitle: '7 technologies',
  aboutTechSubtitle:
    'During the web development course, we mastered the technologies used in the diploma project.',
  aboutTechFirstColumnTitle: 'HTML',
  aboutTechSecondColumnTitle: 'CSS',
  aboutTechThirdColumnTitle: 'JS',
  aboutTechFourthColumnTitle: 'React',
  aboutTechFifthColumnTitle: 'Git',
  aboutTechSixthColumnTitle: 'Express.js',
  aboutTechSeventhColumnTitle: 'mongoDB',
  aboutStudent: 'Student',
  aboutStudentTitle: 'Alex',
  aboutStudentSubtitle: 'Frontend Developer',
  aboutStudentText:
    'I was born and raised in Saint Petersburg and graduated from the Faculty of CTU at ITMO. I have a wife and two daughters. I love listening to music, attending concerts, playing volleyball, and am keen on running. For some time I was an engineer, then worked in sales. I have always loved design, and recently I started coding. After completing the Web Developer course from Yandex Practicum, I will be doing cool stuff online.',
  aboutStudentAlt: 'Это я!',
  portfolio: 'Portfolio',
  portfolioTitle: 'Portfolio',
  portfolioSiteStatic: 'Static Site',
  portfolioSiteAdaptive: 'Adaptive Site',
  portfolioSiteSinglePage: 'Single Page Application',
};

const footerTexts = {
  copyRightText: '© Yandex.Practicum Educational Project x\u00A0BeatFilm.',
  footerLinkText: 'Yandex.Practicum',
};

const loginTexts = {
  loginTitle: 'Glad to see you!',
  loginEmail: 'E-mail',
  loginPassword: 'Password',
  loginButton: 'Log in',
  loginText: 'Not registered yet?',
  loginLink: 'Sign up',
};

const registerTexts = {
  registerTitle: 'Welcome!',
  registerName: 'Name',
  registerEmail: 'E-mail',
  registerPassword: 'Password',
  registerPasswordAgain: 'Repeat Password',
  registerButton: 'Sign Up',
  registerText: 'Already registered?',
  registerLink: 'Sign In',
};

const searchFormTexts = {
  searchFormPlaceholder: 'Movie',
  searchFormLabel: 'Find a movie',
  searchFormCheckboxText: 'Short films',
};

const moviesTexts = {
  moviesTitle: 'Movies',
  moviesSearch: 'Movie',
  moviesCheckbox: 'Short films',
  moviesPreloader: 'Searching for movies...',
  moviesButton: 'More',
  moviesButtonDisabled: 'No more movies available',
  moviesButtonLoad: 'Load more',
};

const errorMessagesTexts = {
  REQUEST_ERROR:
    'An error occurred during the request. It might be a connection issue or the server is unavailable. Please wait a moment and try again.',
  MOVIE_NOT_FOUND_ERROR: 'Nothing found',
  SEARCH_EMPTY_ERROR: 'You need to enter a keyword',
};

const AUTH_ERROR_MESSAGES = {
  HELLO: 'Hello!',
  SUCCESS_REGISTRATION: 'You have successfully registered!',
  SERVER_RESP_ERROR: 'Server response error',
  SMTH_WENT_WRONG: 'Something went wrong! Please try again.',
  SUCCESS: 'Success!',
};

const FORM_ERRORS_MESSAGES = {
  EMAIL: 'Invalid email address',
  CONFIRM_PASSWORD: 'Passwords do not match',
};

const profileTexts = {
  PROFILE_TITLE: 'Hello',
  PROFILE_EMAIL: 'E-mail',
  PROFILE_NAME: 'Name',
  PROFILE_EDIT_ARIA_LABLE: 'Edit profile',
  PROFILE_EDIT_BUTTON: 'Edit',
  PROFILE_LOGOUT_BUTTON: 'Logout',
  PROFILE_SAVE_ARIA_LABLE: 'Save changes',
  PROFILE_SAVE_BUTTON: 'Save',
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
  AUTH_ERROR_MESSAGES,
  FORM_ERRORS_MESSAGES,
  profileTexts,
};
