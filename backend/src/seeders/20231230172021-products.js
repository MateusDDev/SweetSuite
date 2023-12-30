/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Cupcake de Baunilha',
        description: 'Delicioso cupcake de baunilha com cobertura de buttercream. Perfeito para festas e celebrações.',
        price: '3.99',
        quantity: 20,
      },
      {
        name: 'Brigadeiro Gourmet',
        description: 'Brigadeiro gourmet com uma textura suave e sabor intenso de chocolate. Ideal para eventos especiais.',
        price: '2.49',
        quantity: 30,
      },
      {
        name: 'Cheesecake de Morango',
        description: 'Cheesecake cremoso com uma generosa camada de geleia de morango. Uma sobremesa irresistível.',
        price: '12.99',
        quantity: 15,
      },
      {
        name: 'Tiramisu Italiano',
        description: 'Clássica sobremesa italiana com camadas de biscoitos embebidos em café e creme mascarpone. Um verdadeiro deleite.',
        price: '15.99',
        quantity: 12,
      },
      {
        name: 'Trufas de Chocolate Amargo',
        description: 'Trufas de chocolate amargo feitas com o mais puro cacau. Uma explosão de sabor em cada mordida.',
        price: '8.99',
        quantity: 25,
      },
    ]);
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
