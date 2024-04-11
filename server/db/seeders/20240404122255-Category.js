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
    await queryInterface.bulkInsert('Categories', [
      {
        title: 'КНПДЗ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Ну че пацаны Оняме?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Голливуд по молодухе',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Угадай Рекламу',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'А разгадай',
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
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
