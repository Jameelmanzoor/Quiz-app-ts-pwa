if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceWorker.js')
    .then((reg) => console.log("Service Worker is registered.", reg))
    .catch((err) => console.log("ServiceWorker is not registered.", err));
}