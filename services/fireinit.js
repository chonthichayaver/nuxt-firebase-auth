import { getApps, initializeApp, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

var config = {
    apiKey: 'AIzaSyDcPP--N0QLnWH56rwhY8Ug1RG42q7-8E0',
    authDomain: 'fir-nuxtjs-web-app.firebaseapp.com',
    databaseURL: 'https://firebase-nuxtjs-web-app-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'firebase-nuxtjs-web-app',
    storageBucket: 'firebase-nuxtjs-web-app.appspot.com',
    messagingSenderId: '305492540148',
    appId: '1:305492540148:web:dc284f61fcbdd2cb30bca1',
    measurementId: 'G-V613BXG5CV'
};

const app = !getApps().length ? initializeApp(config) : getApp();
export const auth = getAuth(app);
export const GoogleProvider = new GoogleAuthProvider();
export const DB = getDatabase(app);
export default app;