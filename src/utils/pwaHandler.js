let deferredPrompt;

export const isAppInstalled = () => {
  return window.matchMedia('(display-mode: standalone)').matches;
};

export const initPWAInstall = (setShowButton) => {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    // Отобразить кастомный интерфейс (например, кнопку для установки)
    setShowButton(true);
  });
};

export const promptToInstall = () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      deferredPrompt = null;
    });
  }
};
