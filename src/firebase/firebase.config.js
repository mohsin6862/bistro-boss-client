// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyDyLploW9hiOK8-jG_Y5WN2lNiwj2oKqBE",
//   authDomain: "bistro-boss-20a01.firebaseapp.com",
//   projectId: "bistro-boss-20a01",
//   storageBucket: "bistro-boss-20a01.appspot.com",
//   messagingSenderId: "315211733879",
//   appId: "1:315211733879:web:eb1e316798223ae2529f72"
apiKey:import.meta.env.VITE_apiKey ,
authDomain:import.meta.env.VITE_authDomain,
projectId:import.meta.env.VITE_projectId ,
storageBucket:import.meta.env.VITE_storageBucket,
messagingSenderId:import.meta.env.VITE_messagingSenderId ,
appId:import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;