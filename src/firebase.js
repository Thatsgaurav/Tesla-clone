import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCTA6ZWqrMorSb2_HlzdinpijBquONtZL0",
  authDomain: "tesla-clone-yt-75a1e.firebaseapp.com",
  projectId: "tesla-clone-yt-75a1e",
  storageBucket: "tesla-clone-yt-75a1e.appspot.com",
  messagingSenderId: "466206719045",
  appId: "1:466206719045:web:f84ade4673c1270e51f72c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }
