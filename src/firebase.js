
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FBS_API_KEY ,
    authDomain: process.env.REACT_APP_FBS_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FBS_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FBS_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FBS_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FBS_APP_ID
};


const app = initializeApp(firebaseConfig);