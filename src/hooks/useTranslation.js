import { useContext } from 'react';
import en from '../utils/languages/en';
import ru from '../utils/languages/ru';
import CurrentUserContext from '../contexts/CurrentUserContext';

const translation = { EN: en, RU: ru, HE: en };

const useTranslation = () => {
  const context = useContext(CurrentUserContext);

  if (!context) {
    throw new Error(
      'useTranslation must be used within a CurrentUserContext provider'
    );
  }

  const { language } = context;
  return translation[language || 'EN'];
};

export default useTranslation;
