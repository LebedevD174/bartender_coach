'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const cocktail1 = [
    {
      barware_id: 5,
    },
    {
      ingredient_id: 3,
      ingredient_volume: 1,
    },
    {
      drink_id: 1,
      drinks_volume: 60,
    },
    {
      drink_id: 6,
      drinks_volume: 30,
    },
    {
      tech_id: 1,
    },
    {
      ingredient_id: 1,
      ingredient_volume: 1,
    },
   ].map((el, i) => ({
    ...el,
    cocktail_id:1,
    order: i+1,
    createdAt: new Date(),
    updatedAt: new Date()
  }))
  const cocktail2 = [
    {
      barware_id: 6,
    },
    {
      ingredient_id: 4,
      ingredient_volume: 2,
    },
    {
      drink_id: 2,
      drinks_volume: 70,
    },
    {
      drink_id: 6,
      drinks_volume: 35,
    },
    {
      tech_id: 2,
    },
    {
      ingredient_id: 2,
      ingredient_volume: 2,
    },
].map((el, i) => ({
    ...el,
    cocktail_id: 2,
    order: i+1,
    createdAt: new Date(),
    updatedAt: new Date()
}));

const cocktail3 = [
  {
    barware_id: 1,
  },
  {
    ingredient_id: 5,
    ingredient_volume: 3,
  },
  {
    drink_id: 3,
    drinks_volume: 80,
  },
  {
    drink_id: 2,
    drinks_volume: 40,
  },
  {
    tech_id: 3,
  },
  {
    ingredient_id: 3,
    ingredient_volume: 3,
  },
].map((el, i) => ({
  ...el,
  cocktail_id: 3,
  order: i+1,
  createdAt: new Date(),
  updatedAt: new Date()
}));

const cocktail4 = [
  {
    barware_id: 2,
  },
  {
    ingredient_id: 5,
    ingredient_volume: 4,
  },
  {
    drink_id: 4,
    drinks_volume: 90,
  },
  {
    drink_id: 5,
    drinks_volume: 45,
  },
  {
    tech_id: 4,
  },
  {
    ingredient_id: 4,
    ingredient_volume: 4,
  },
].map((el, i) => ({
  ...el,
  cocktail_id: 4,
  order: i+1,
  createdAt: new Date(),
  updatedAt: new Date()
}));

const cocktail5 = [
  {
    barware_id: 3,
  },
  {
    ingredient_id: 5,
    ingredient_volume: 5,
  },
  {
    drink_id: 5,
    drinks_volume: 100,
  },
  {
    drink_id: 1,
    drinks_volume: 50,
  },
  {
    tech_id: 5,
  },
  {
    ingredient_id: 5,
    ingredient_volume: 5,
  },
].map((el, i) => ({
  ...el,
  cocktail_id: 5,
  order: i+1,
  createdAt: new Date(),
  updatedAt: new Date()
}));

const cocktail6 = [
  {
    barware_id: 4,
  },
  {
    ingredient_id: 2,
    ingredient_volume: 6,
  },
  {
    drink_id: 6,
    drinks_volume: 110,
  },
  {
    drink_id: 4,
    drinks_volume: 55,
  },
  {
    tech_id: 6,
  },
  {
    ingredient_id: 2,
    ingredient_volume: 2,
  },
].map((el, i) => ({
  ...el,
  cocktail_id: 6,
  order: i+1,
  createdAt: new Date(),
  updatedAt: new Date()
}));


    await queryInterface.bulkInsert('Formulas', [
    ...cocktail1,
    ...cocktail2,
    ...cocktail3,
    ...cocktail4,
    ...cocktail5,
    ...cocktail6,
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Formulas', null, {});
  }
};
