import { DEFAULT_LANGUAGE, TRANSLATION } from '../utils/constants';

const useTranslation = (language) => {
  return TRANSLATION[language || DEFAULT_LANGUAGE];
};

export default useTranslation;
