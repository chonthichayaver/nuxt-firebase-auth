import Vuex from 'vuex';
import { signInWithRedirect, signOut } from 'firebase/auth';
import { onValue, push, update, child } from 'firebase/database';
import { auth, GoogleProvider } from '../services/fireinit.js';
import { rootRef, dbRef, minRef, maxRef, handleMin, handleMax } from '../utils/rtdb';

function createNewOrder(newOrder) {
    return {
        title: newOrder.title,
        type: newOrder.type
    };
};

const createStore = () => {
    return new Vuex.Store({
        state: {
            user: null,
            newOrder: [],
            paypals: [],
            paypalsSells: [],
            paypalsBuys: []
        },
        getters: {
            activeUser: (state, getters) => {
                return state.user;
            },
            getPaypalsSells: (state, getters) => {
                return state.paypals.sells;
            },
            getPaypalsBuys: (state, getters) => {
                return state.paypals.buys;
            }
        },
        mutations: {
            setUser(state, payload) {
                state.user = payload;
            },
            setPaypalsSells(state, value) {
                state.paypals.sells = value;
            },
            setPaypalsBuys(state, value) {
                state.paypals.buys = value;
            },
            setNewOrder(state, value) {
                state.newOrder = value;
            }
        },
        actions: {
            autoSignIn({ commit }, payload) {
                commit('setUser', payload);
            },

            signInWithGoogle({ commit }) {
                return new Promise((resolve, reject) => {
                    signInWithRedirect(auth, GoogleProvider);
                    resolve();
                });
            },

            signOut({ commit }) {
                signOut(auth).then(() => {
                    commit('setUser', null);
                }).catch(err => { console.log(err) });
            },

            onValueRef({ state, context }, path) {
                return onValue(path, (snaps) => {
                    snaps.forEach((snapshot) => {
                        context.push(snapshot.val());
                        return snapshot.val();
                    })
                }, { onlyOnce: true });
            },

            async onPriceRef({ state }, path, amount) {
                const price = null;
                const queryMin = minRef(path, amount);
                const queryMinRef = await handleMin(queryMin);
                const queryMax = maxRef(queryMinRef, amount);
                const queryMaxRef = await handleMax(queryMax, amount);
                onValue(queryMaxRef, (snaps) => {
                    snaps.forEach((snapshot) => {
                        state.newOrder.push(snapshot.val().price);
                        return price = snapshot.val().price;
                    });
                }, {
                    onlyOnce: true
                });
                state.newOrder.price = price;
                return price;
            },

            addNewOrder({ commit, state }, newOrder) {
                const ordersRef = dbRef('/orders');
                const ordersRef1 = push(ordersRef);
                const newKey = ordersRef1.key;
                const updates = {};
                updates['/orders/' + newKey] = newOrder;
                updates['/users/' + state.user.uid + '/' + newKey] = newOrder;
                return update(child(rootRef, updates), newOrder);
            }
        }
    });
};

export default createStore;
