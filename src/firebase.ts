// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhghWOz-cApSJUW_ilMNyvyqfXF9YuCxw",
  authDomain: "e-commerce-eda20.firebaseapp.com",
  projectId: "e-commerce-eda20",
  storageBucket: "e-commerce-eda20.appspot.com",
  messagingSenderId: "424971197785",
  appId: "1:424971197785:web:fc9ac1843c6398bbf6c048",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// export { auth, firebaseConfig };
