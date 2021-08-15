import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDcMcC-X4VlmUV11zWOtgJKE2MGx13GlJc",
  authDomain: "facebook-clone-8c4e2.firebaseapp.com",
  projectId: "facebook-clone-8c4e2",
  storageBucket: "facebook-clone-8c4e2.appspot.com",
  messagingSenderId: "1062479434771",
  appId: "1:1062479434771:web:7e944606634f8a4eb65be6",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
