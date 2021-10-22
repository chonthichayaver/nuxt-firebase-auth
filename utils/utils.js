export function decimal(value) {
    return Number.parseFloat(value).toFixed(2);
};

export function multiply(a, b) {
    return a * b;
};

export function sellItem(key, snapshot) {
    const { description, min, max, price, stock, level } = snapshot;
    const sell = {};
    sell.key = key;
    sell.description = description;
    sell.min = min;
    sell.max = max;
    sell.price = price;
    sell.stock = stock;
    sell.level = level;
    return sell;
};

export function buyItem(key, snapshot) {
    const { description, min, max, price, stock, level } = snapshot;
    const buy = {};
    buy.key = key;
    buy.description = description;
    buy.min = min;
    buy.max = max;
    buy.price = price;
    buy.stock = stock;
    buy.level = level;
    return buy;
};

export function buildSellItem(snapshot) {
    const sell = {};
    for (const i in snapshot) {
        sell.key = snapshot[i].key;
        sell.description = snapshot[i].description;
        sell.min = snapshot[i].min;
        sell.max = snapshot[i].max;
        sell.price = snapshot[i].price;
        sell.stock = snapshot[i].stock;
        sell.level = snapshot[i].level;
        return sell;
    }
};