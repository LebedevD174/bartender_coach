'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const ingredientsData = [
      {
        title: 'Лайм',
        img: '/img/Lime-Medium.png',
        measure: 'Ломтик',
      },
      {
        title: 'Мята',
        img: '/img/Mint-Medium.png',
        measure: 'Листик',
      },
      {
        title: 'Лед',
        img: '/img/Ice-Medium.png',
        measure: 'Кубик',
      },
      {
        title: 'Дробленый лед',
        img: '/img/Ice-Medium.png',
        measure: 'гр.',
      },
      {
        title: 'Персик',
        img: '/ing/persik.png',
        measure: 'Ломтик',
      },
      {
        title: 'Клубника',
        img: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614575484_4-p-klubnika-na-belom-fone-8.jpg',
        measure: 'Ломтик',
      },
      {
        title: 'Апельсиновая цедра',
        img: '/img/Lemon Peel-Medium.png',
        measure: 'Слайс',
      },
      {
        title: 'Сахар',
        img: '/img/Sugar-Medium.png',
        measure: 'Кубик',
      },
    ];

    const ingredients = ingredientsData.map((ingredient) => ({
      ...ingredient,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Ingredients', ingredients);
  },

  async down(queryInterface, Sequelize) {
    await Ingredient.destroy({
      truncate: {
        cascade: true,
      },
    });
  },
};
