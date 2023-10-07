import React, { useState, useEffect } from 'react';
import './PwaButton.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useTranslation from '../../hooks/useTranslation';

function PwaButton() {
  const { language } = React.useContext(CurrentUserContext);
  const { MAIN_CONTENT } = useTranslation(language);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [userDismissed, setUserDismissed] = useState(false);

  const isAppInstalled = () => {
    return window.matchMedia('(display-mode: standalone)').matches;
  };

  const promptToInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      setShowInstallButton(false);
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          setUserDismissed(false);
        } else {
          setUserDismissed(true);
          localStorage.setItem('userDismissedPwaLocalStorage', true);
        }
        setDeferredPrompt(null);
        setShowInstallButton(false);
      });
    }
    setShowInstallButton(false);
  };

  useEffect(() => {
    if (isAppInstalled() || userDismissed) {
      setShowInstallButton(false);
      return undefined;
    }

    const beforeInstallPromptHandler = (e) => {
      e.preventDefault();
      if (!userDismissed) {
        setDeferredPrompt(e);
        setShowInstallButton(true);
      }
    };

    window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler);

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        beforeInstallPromptHandler
      );
    };
  }, [userDismissed]);

  useEffect(() => {
    const userDismissedLocalStorage = localStorage.getItem(
      'userDismissedPwaLocalStorage'
    );
    if (userDismissedLocalStorage) {
      setUserDismissed(true);
    }
  }, []);

  return (
    showInstallButton && (
      <button className="pwa-button" onClick={promptToInstall} type="button">
        {MAIN_CONTENT.PWA_BUTTON}
        <span className="pwa-button__arrow" />
      </button>
    )
  );
}

export default PwaButton;
