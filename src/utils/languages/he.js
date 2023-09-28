const navigationTexts = {
  signUp: 'הרשמה',
  signIn: 'כניסה',
  navigationMainPage: 'עמוד ראשי',
  navigationMovies: 'סרטים',
  navigationSavedMovies: 'סרטים שמורים',
  navigationProfile: 'חשבון',
  navigationClosePopup: 'סגור',
};

const linksNames = {
  aboutProject: 'אודות הפרויקט',
  aboutTech: 'טכנולוגיה',
  aboutStudent: 'סטודנט',
  github: 'Github',
};

const mainContent = {
  promo: 'פרויקט לימוד של סטודנט מהפקולטה לפיתוח אתרים',
  aboutProject: 'אודות הפרויקט',
  aboutProjectFirstColumnTitle: 'הפרויקט הסופי כלל 5 שלבים',
  aboutProjectFirstColumnText:
    'תכנון, עבודה על ה-Backend, עיצוב, הוספת פונקציונליות ושיפורים סופיים.',
  aboutProjectSecondColumnTitle: 'לפרויקט הסופי לקח 5 שבועות',
  aboutProjectSecondColumnText:
    'לכל שלב היו דדליינים רכים וקשים, שהיה צריך לשמור עליהם כדי להצליח בהגנה.',
  firstGantPart: 'שבוע 1',
  secondGantPart: '4 שבועות',
  firstGantComment: 'Backend',
  secondGantComment: 'Frontend',
  aboutTech: 'טכנולוגיות',
  aboutTechTitle: '7 טכנולוגיות',
  aboutTechSubtitle: 'בקורס פיתוח אתרים למדנו טכנולוגיות שהוחלו בפרויקט הסופי.',
  aboutTechFirstColumnTitle: 'HTML',
  aboutTechSecondColumnTitle: 'CSS',
  aboutTechThirdColumnTitle: 'JS',
  aboutTechFourthColumnTitle: 'React',
  aboutTechFifthColumnTitle: 'Git',
  aboutTechSixthColumnTitle: 'Express.js',
  aboutTechSeventhColumnTitle: 'mongoDB',
  aboutStudent: 'הסטודנט',
  aboutStudentTitle: 'אלכס',
  aboutStudentSubtitle: 'מפתח Frontend',
  aboutStudentText:
    'נולדתי וגדלתי בסנקט פטרבורג, סיימתי את הפקולטה למדעי המחשב ב-ITMO. יש לי אישה ושתי בנות. אני אוהב להאזין למוזיקה, ללכת לקונצרטים, לשחק כדורעף ולרוץ. הייתי מהנדס תוכנה, ולאחר מכן עבדתי במכירות. תמיד אהבתי עיצוב, ולאחרונה התחלתי לקודד. לאחר שאסיים את קורס פיתוח אתרים ב-Yandex Practicum, אני אפתח דברים מדהימים ברשת.',
  aboutStudentAlt: 'זה אני!',
  portfolio: 'תיק עבודות',
  portfolioTitle: 'תיק עבודות',
  portfolioSiteStatic: 'אתר סטטי',
  portfolioSiteAdaptive: 'אתר מותאם',
  portfolioSiteSinglePage: 'אפליקציה דף אחד',
  PWA_BUTTON: 'התקן אפליקציה',
};

const footerTexts = {
  copyRightText: '© פרויקט לימודי של יאנדקס.פרקטיקום ו-BeatFilm.',
  footerLinkText: 'יאנדקס.פרקטיקום',
};

const loginTexts = {
  loginTitle: 'שמחים לראותך!',
  loginEmail: 'דוא"ל',
  loginPassword: 'סיסמה',
  loginButton: 'להתחבר',
  loginText: 'עדיין לא רשומים?',
  loginLink: 'הרשמה',
};

const registerTexts = {
  registerTitle: 'ברוכים הבאים!',
  registerName: 'שם',
  registerEmail: 'דוא"ל',
  registerPassword: 'סיסמה',
  registerPasswordAgain: 'חזור על הסיסמה',
  registerButton: 'להירשם',
  registerText: 'כבר רשומים?',
  registerLink: 'להתחבר',
};

const searchFormTexts = {
  searchFormPlaceholder: 'סרט',
  searchFormLabel: 'חפש סרט',
  searchFormCheckboxText: 'סרטים קצרים',
};

const moviesTexts = {
  moviesTitle: 'סרטים',
  moviesSearch: 'סרט',
  moviesCheckbox: 'סרטים קצרים',
  moviesPreloader: 'מתבצע חיפוש סרטים...',
  moviesButton: 'עוד',
  moviesButtonDisabled: 'אין יותר סרטים',
  moviesButtonLoad: 'טען עוד',
};

const MOVIES_CARD = {
  SAVE_MOVIE: 'שמור סרט',
};

const MOVIES_CARD_LIST = {
  MORE: 'עוד',
};

const ERROR_MESSAGES_TEXTS = {
  REQUEST_ERROR:
    'אירעה שגיאה בזמן הבקשה. יתכן שיש בעיה בחיבור או שהשרת אינו נגיש. המתן זמן מה ונסה שוב.',
  MOVIE_NOT_FOUND_ERROR: 'לא נמצאו תוצאות',
  SEARCH_EMPTY_ERROR: 'יש להקליד מילת מפתח',
};

const AUTH_MESSAGES = {
  HELLO: 'שלום,',
  SUCCESS_REGISTRATION: 'נרשמת בהצלחה!',
  SERVER_RESP_ERROR: 'שגיאה בתגובה מהשרת',
  SMTH_WENT_WRONG: 'משהו השתבש! נסה שוב.',
  SUCCESS: 'בהצלחה!',
};

const FORM_ERRORS_MESSAGES = {
  EMAIL: 'כתובת אימייל לא תקינה',
  CONFIRM_PASSWORD: 'הסיסמאות אינן זהות',
};

const profileTexts = {
  PROFILE_TITLE: 'שלום',
  PROFILE_EMAIL: 'אימייל',
  PROFILE_NAME: 'שם',
  PROFILE_EDIT_ARIA_LABLE: 'ערוך פרופיל',
  PROFILE_EDIT_BUTTON: 'עריכה',
  PROFILE_LOGOUT_BUTTON: 'יציאה מהחשבון',
  PROFILE_SAVE_ARIA_LABLE: 'שמור שינויים',
  PROFILE_SAVE_BUTTON: 'שמירה',
};

const LOADING = {
  TEXT: 'טוען',
};

const NOT_FOUND_PAGE = {
  TITLE: '404',
  TEXT: 'הדף לא נמצא',
  LINK: 'חזרה',
};

const LANGUAGE_DIRECTION = 'rtl';
const IS_RIGTH_TO_LEFT = LANGUAGE_DIRECTION === 'rtl';

export default {
  navigationTexts,
  linksNames,
  mainContent,
  footerTexts,
  loginTexts,
  registerTexts,
  searchFormTexts,
  moviesTexts,
  ERROR_MESSAGES_TEXTS,
  AUTH_MESSAGES,
  FORM_ERRORS_MESSAGES,
  profileTexts,
  MOVIES_CARD,
  MOVIES_CARD_LIST,
  NOT_FOUND_PAGE,
  LOADING,
  LANGUAGE_DIRECTION,
  IS_RIGTH_TO_LEFT,
};
