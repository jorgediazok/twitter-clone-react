import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyB5P0NwBl_hqVXTUkWi7GXQCf2fDCRARxU",
  authDomain: "twitter-clone-9911d.firebaseapp.com",
  databaseURL: "https://twitter-clone-9911d.firebaseio.com",
  projectId: "twitter-clone-9911d",
  storageBucket: "twitter-clone-9911d.appspot.com",
  messagingSenderId: "1090738482810",
  appId: "1:1090738482810:web:9d6585b66b5864d2b495c3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db;