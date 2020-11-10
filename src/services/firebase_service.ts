import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB8wGCZAwSWGk9exI4f4erhNmOXd_QJXPU",
  authDomain: "quiz-app-ts-pwa.firebaseapp.com",
  databaseURL: "https://quiz-app-ts-pwa.firebaseio.com",
  projectId: "quiz-app-ts-pwa",
  storageBucket: "quiz-app-ts-pwa.appspot.com",
  messagingSenderId: "131594098897",
  appId: "1:131594098897:web:261eeeb9b9046e8aa9cdf0"
}

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export function initNotification () {
  Notification.requestPermission().then(permission => {
    console.log(permission);

    if(permission === 'granted'){
      messaging.getToken().then(token => {
        console.log("Token");
        console.log(token);
      })
    }
  });
  
}