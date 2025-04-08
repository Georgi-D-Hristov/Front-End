function storeProvisions(products, orderProducts){
    let product= {};

    storeProducts(products);
    storeProducts(orderProducts);


    for(let item in product){
        console.log(`${item} -> ${product[item]}`);
    }

    function storeProducts(stocs) {
        for (let i = 0; i < stocs.length; i += 2) {
            if (!product.hasOwnProperty(stocs[i])) {
                product[stocs[i]] = Number(stocs[i + 1]);
            }
            else {
                product[stocs[i]] += Number(stocs[i + 1]);
            }
        }
    }
}

storeProvisions([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );