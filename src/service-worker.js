import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';

// eslint-disable-next-line no-restricted-globals
precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ request }) => request.destination !== 'document',
  new NetworkFirst(),
);

export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker зарегистрирован:', registration);
        })
        .catch((error) => {
          console.error('Ошибка регистрации Service Worker:', error);
        });
    });
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }
}
