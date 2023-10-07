import { DEFAULT_LANGUAGE, TRANSLATION } from '../utils/constants';

const useTranslation = (language) => {
  const isLanguageSupported = Object.prototype.hasOwnProperty.call(
    TRANSLATION,
    language
  )
    ? language
    : DEFAULT_LANGUAGE;

  return TRANSLATION[isLanguageSupported];
};

export default useTranslation;
