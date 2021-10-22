import { ref, query, onValue, child, orderByChild, startAt, endAt } from 'firebase/database';
import { DB } from '../services/fireinit';

export const rootRef = ref(DB);

export const dbRef = (path) => {
    return ref(DB, `${path}`)
};

export const minRef = (pathRef, amount) => {
    return query(ref(DB, `${pathRef}`), orderByChild('min'), startAt(amount));
};

export const maxRef = (pathRef, amount) => {
    return query(ref(DB, `${pathRef}`), orderByChild('max'), endAt(amount));
};

export const handleMin = (pathRef, amount) => {
    const minReference = minRef(pathRef, amount);
    return Promise.all([
        minReference
    ]).then((queryMinRef) => {
        return queryMinRef[0].ref;
    }).catch((err) => { console.log(err); });
};

export const handleMax = (pathRef, amount) => {
    const maxReference = maxRef(pathRef, amount);
    return Promise.all([
        maxReference
    ]).then((queryMaxRef) => {
        return queryMaxRef[0].ref;
    }).catch((err) => { console.log(err); });
};

export async function priceRef(_minRef, amount) {
    const newOrder = {};
    const queryMin = await handleMin(_minRef, amount);
    const queryMax = await handleMax(queryMin, amount);
    onValue(queryMax, (snaps) => {
        return snaps;
    }, { onlyOnce: true });
    newOrder.price = snaps.val().price;
    return newOrder;
};

export function handleRef(title, type, amount) {
    if (title.value !== null && type.value !== null && amount !== 0 || null) {
        switch (title.value && type.value) {
            case 'Paypal' && 'Sell':
                if (amount >= 100 && amount <= 500) {
                    return 27.00;
                } else if (amount >= 501 && amount <= 1000) {
                    return 27.25;
                } else if (amount >= 1001 && amount <= 1500) {
                    return 27.50;
                } else if (amount >= 1501 && amount <= 2000) {
                    return 27.75;
                } else if (amount >= 2001 && amount <= 10000) {
                    return 28.00;
                };
            case 'Paypal' && 'Buy':
                if (amount >= 100 && amount <= 500) {
                    return 27.00;
                } else if (amount >= 501 && amount <= 1000) {
                    return 27.25;
                } else if (amount >= 1001 && amount <= 1500) {
                    return 27.50;
                } else if (amount >= 1501 && amount <= 2000) {
                    return 27.75;
                } else if (amount >= 2001 && amount <= 10000) {
                    return 28.00;
                };
            case 'Web Money' && 'Sell':
                if (amount >= 100 && amount <= 500) {
                    return 27.00;
                } else if (amount >= 501 && amount <= 1000) {
                    return 27.25;
                } else if (amount >= 1001 && amount <= 1500) {
                    return 27.50;
                } else if (amount >= 1501 && amount <= 2000) {
                    return 27.75;
                } else if (amount >= 2001 && amount <= 10000) {
                    return 28.00;
                };
            case 'Web Money' && 'Buy':
                if (amount >= 100 && amount <= 500) {
                    return 27.00;
                } else if (amount >= 501 && amount <= 1000) {
                    return 27.25;
                } else if (amount >= 1001 && amount <= 1500) {
                    return 27.50;
                } else if (amount >= 1501 && amount <= 2000) {
                    return 27.75;
                } else if (amount >= 2001 && amount <= 10000) {
                    return 28.00;
                };
        }

    }
};
