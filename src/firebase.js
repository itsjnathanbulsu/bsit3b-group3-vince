import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD45WZd-LkPqK0c-5IkBc3Ln9ObXU94uWY",
  authDomain: "bsit3b-final-output.firebaseapp.com",
  projectId: "bsit3b-final-output",
  storageBucket: "bsit3b-final-output.appspot.com",
  messagingSenderId: "673939896125",
  appId: "1:673939896125:web:84922c6f90cab470317754",
  measurementId: "G-B0VRYLGH2J",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

export default firebase;
