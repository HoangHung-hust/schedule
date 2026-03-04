importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyCvpTkTSi51M8gKynQnC5v-6jCi5dSQLCg",
    authDomain: "fir-schedule-d5b3d.firebaseapp.com",
    projectId: "fir-schedule-d5b3d",
    storageBucket: "fir-schedule-d5b3d.firebasestorage.app",
    messagingSenderId: "1024089636097",
    appId: "1:1024089636097:web:0c6ff1a814b9ab66c3ef00",
    measurementId: "G-T1FBKRLEY4"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: 'icon-192.png'
  });
});
