import * as firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHf44oC3jslkKUWT-0wEq8bi3gfiCeDHI",
  authDomain: "whatsapp-el.firebaseapp.com",
  projectId: "whatsapp-el",
  storageBucket: "whatsapp-el.appspot.com",
  messagingSenderId: "105264917900",
  appId: "1:105264917900:web:a699044c753eadb92b7aa9",
  measurementId: "G-J8YCLVH9WB",
};
const firbaseAPP = firebase.initializeApp(firebaseConfig);
const phoneProvider = new firebase.auth.PhoneAuthProvider();

export { phoneProvider, firebaseConfig };
