import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd0d-2BxBelr0GTMJZRnDJ_zIvv9vzJ-E",
  authDomain: "gamestore-d69cb.firebaseapp.com",
  projectId: "gamestore-d69cb",
  storageBucket: "gamestore-d69cb.appspot.com",
  messagingSenderId: "498438104973",
  appId: "1:498438104973:web:87d6afd8de82748877bfc4",
  measurementId: "G-G5BDDBLFXB"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();