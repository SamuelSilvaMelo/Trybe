const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = products.map((produto, index) => `${produto}: ${prices[index]}`);

console.log(updateProducts);
