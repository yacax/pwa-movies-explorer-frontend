import { useLocation } from 'react-router-dom';
import { REGEXP } from '../utils/constants';

const usePath = () => {
  const location = useLocation();
  const path = location.pathname;
  const pathWithoutLanguage = path.replace(REGEXP.LANGUAGE_PREFIX_REMOVAL, '');
  const pathMatchWithLanguage = path.match(REGEXP.LANGUAGE_PREFIX_EXTRACTION);

  return {
    path,
    pathWithoutLanguage,
    pathMatchWithLanguage,
  };
};

export default usePath;
