import { QueryInterface } from 'sequelize';
import { IProduct } from '../../interfaces/products/IProduct';

export default {
  up: async (queryInterface: QueryInterface) => {
    const products: IProduct[] = [
      { id: 1, name: 'Bolo de Chocolate', description: 'Delicioso bolo de chocolate com cobertura cremosa.', price: 25.99, quantity: 10 },
      { id: 2, name: 'Torta de Morango', description: 'Torta fresca com recheio de morango e cobertura de chantilly.', price: 30.50, quantity: 8 },
      { id: 3, name: 'Cupcake de Baunilha', description: 'Cupcake macio de baunilha com cobertura de buttercream.', price: 3.99, quantity: 20 },
      { id: 4, name: 'Pão de Mel', description: 'Pão de mel recheado com doce de leite e cobertura de chocolate.', price: 2.50, quantity: 15 },
      { id: 5, name: 'Brigadeiro Gourmet', description: 'Brigadeiro gourmet feito com chocolate belga e granulado de chocolate.', price: 1.75, quantity: 30 },
      { id: 6, name: 'Cheesecake de Frutas Vermelhas', description: 'Cheesecake cremoso com cobertura de geleia de frutas vermelhas.', price: 35.99, quantity: 6 },
      { id: 7, name: 'Brownie de Nozes', description: 'Brownie de chocolate com pedaços de nozes e cobertura de chocolate amargo.', price: 4.50, quantity: 12 },
      { id: 8, name: 'Torta de Limão', description: 'Torta refrescante de limão com massa crocante e merengue.', price: 28.75, quantity: 7 },
      { id: 9, name: 'Cookies de Chocolate', description: 'Cookies crocantes com pedaços de chocolate belga.', price: 2.25, quantity: 25 },
      { id: 10, name: 'Caramelos Artesanais', description: 'Caramelos macios e cremosos, feitos à mão com caramelo de alta qualidade.', price: 1.99, quantity: 40 },
    ];

    await queryInterface.bulkInsert('products', products);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('products', {});
  },
};
