import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/fireinit.js';

export default (context) => {
    const { store } = context

    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            store.commit('setUser', user);
            resolve(user);
        });
    });
};