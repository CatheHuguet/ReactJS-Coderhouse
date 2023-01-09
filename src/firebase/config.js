import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC-d8ltPU_xZIOuUU7ks4o2nhGqEVoJIXs",
  authDomain: "huguet-app.firebaseapp.com",
  projectId: "huguet-app",
  storageBucket: "huguet-app.appspot.com",
  messagingSenderId: "969152468912",
  appId: "1:969152468912:web:0f8abb645967b3a588a875"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestore = () => app //app export