import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDrJGXOnA-ifB-oQmXEJNwosezViH5WUfk",
  authDomain: "course-review-cd378.firebaseapp.com",
  projectId: "course-review-cd378",
  storageBucket: "course-review-cd378.appspot.com",
  messagingSenderId: "969781359684",
  appId: "1:969781359684:web:3a70a77e13e4bd3cf43811",
};

let app: firebase.app.App;

export function initFirebase() {
  if (!app) {
    try {
      app = firebase.app();
    } catch {
      app = firebase.initializeApp(firebaseConfig);
    }
  }

  return app;
}
