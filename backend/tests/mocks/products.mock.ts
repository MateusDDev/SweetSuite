const product = {
    id: 1,
    name: "Bolo",
    description: "Delicioso bolo.",
    price: 6.00,
    quantity: 10
}

const products = [
    { id: 1, name: 'Bolo de Chocolate', description: 'Delicioso bolo de chocolate com cobertura cremosa.', price: 25.99, quantity: 10 },
    { id: 2, name: 'Brigadeiro Gourmet', description: 'Brigadeiro gourmet feito com chocolate belga e granulado de chocolate.', price: 1.75, quantity: 30 },
    { id: 3, name: 'Brigadeiro Tradicional', description: 'Brigadeiro tradicional brasileiro, delicioso e cremoso.', price: 1.50, quantity: 20 },
    { id: 4, name: 'Brigadeiro de Leite Ninho', description: 'Brigadeiro feito com leite em pó, cremoso e saboroso.', price: 2.00, quantity: 25 }
];


const newProduct = {
    name: "Bolo",
    description: "Delicioso bolo.",
    price: 6.00,
    quantity: 10
}

export default {
    product,
    products,
    newProduct
}