import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAguilpgYfP6Yg5ovTyRklKkB9r1rqdySg",
  authDomain: "whatsapp-clone-e616f.firebaseapp.com",
  projectId: "whatsapp-clone-e616f",
  storageBucket: "whatsapp-clone-e616f.appspot.com",
  messagingSenderId: "372528694616",
  appId: "1:372528694616:web:78cbd676a970de6be4912d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;