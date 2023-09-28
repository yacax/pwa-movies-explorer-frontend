import { DEFAULT_LANGUAGE, TRANSLATION } from '../utils/constants';

const useTranslation = (language) => {
  return TRANSLATION[language === 'עבר' ? 'HE' : language || DEFAULT_LANGUAGE];
};

export default useTranslation;
