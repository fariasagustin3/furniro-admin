import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDl_f1-oEEUDknvjd7IMDTpso2ywPCkGAE",
  authDomain: "furniro-7c73d.firebaseapp.com",
  projectId: "furniro-7c73d",
  storageBucket: "furniro-7c73d.appspot.com",
  messagingSenderId: "577843916524",
  appId: "1:577843916524:web:7d146a1f4fb0b2b3b4ffc9"
};

const app = initializeApp(firebaseConfig);

export const imageDB = getStorage(app)
