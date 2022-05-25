function fruit(fruitName, grams, priceKG) {
    kgs = grams / 1000;
    finPrice = priceKG * kgs;

    console.log(`I need $${finPrice.toFixed(2)} to buy ${kgs.toFixed(2)} kilograms ${fruitName}.`);
}

fruit('orange', 2500, 1.80)