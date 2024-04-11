/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Costs', [
      {
        cost: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cost: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cost: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cost: 800,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cost: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Costs', null, {});
  },
};
