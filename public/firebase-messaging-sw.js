importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyB8wGCZAwSWGk9exI4f4erhNmOXd_QJXPU",
  authDomain: "quiz-app-ts-pwa.firebaseapp.com",
  databaseURL: "https://quiz-app-ts-pwa.firebaseio.com",
  projectId: "quiz-app-ts-pwa",
  storageBucket: "quiz-app-ts-pwa.appspot.com",
  messagingSenderId: "131594098897",
  appId: "1:131594098897:web:261eeeb9b9046e8aa9cdf0"
});

firebase.messaging();