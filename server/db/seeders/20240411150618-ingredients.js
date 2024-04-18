'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const ingredientsData = [
      {
        title: 'Лайм',
        img: 'https://sneg.top/uploads/posts/2023-03/1678669158_sneg-top-p-zelenii-laimovii-fon-krasivo-15.jpg',
        measure: 'Ломтик',
      },
      {
        title: 'Мята',
        img: 'https://ekolekar.com/wp-content/uploads/2016/11/maslo-myaty-perechnoj-dlya-lecheniya.jpg',
        measure: 'Листик',
      },
      {
        title: 'Лед',
        img: 'https://w.forfun.com/fetch/83/83cea41580060c936542b63b7244408a.jpeg',
        measure: 'Кубик',
      },
      {
        title: 'Дробленый лед',
        img: 'https://w.forfun.com/fetch/83/83cea41580060c936542b63b7244408a.jpeg',
        measure: 'гр.',
      },
      {
        title: 'Персик',
        img: 'https://imageio.forbes.com/specials-images/imageserve/5f42b5182138dffac9bf05b7/0x0.jpg',
        measure: 'Ломтик',
      },
      {
        title: 'Клубника',
        img: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614575484_4-p-klubnika-na-belom-fone-8.jpg',
        measure: 'Ломтик',
      },
      {
        title: 'Апельсиновая цедра',
        img: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614575484_4-p-klubnika-na-belom-fone-8.jpg',
        measure: 'Слайс',
      },
      {
        title: 'Сахар',
        img: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614575484_4-p-klubnika-na-belom-fone-8.jpg',
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
