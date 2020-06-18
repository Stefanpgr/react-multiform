import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyC3ITJjkyPjc8eTnvpgaJr6_tvSHN8Mj5c",
  authDomain: "rnpl-new.firebaseapp.com",
  databaseURL: "https://rnpl-new.firebaseio.com",
  projectId: "rnpl-new",
  storageBucket: "rnpl-new.appspot.com",
  messagingSenderId: "263501635483",
  appId: "1:263501635483:web:d43c72e08eb8957d960b3e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const storage = firebase.storage();
export { storage, firebase as default };
