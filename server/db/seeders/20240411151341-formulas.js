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
      barware_id: 14,
    },
    {
      ingredient_id: 1,
      ingredient_volume: 3,
    },
    {
      ingredient_id: 2,
      ingredient_volume: 5,
    },
    {
      tech_id: 5,
    },
    {
      ingredient_id: 3,
      ingredient_volume: 200,
    },
    {
      drink_id: 1,
      drinks_volume: 15,
    },
    {
      drink_id: 3,
      drinks_volume: 60,
    },
    {
      drink_id: 2,
      drinks_volume: 100,
    },
    {
      tech_id: 4,
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
      barware_id: 16,
    },
    {
      ingredient_id: 3,
      ingredient_volume: 8,
    },
    {
      drink_id: 9,
      drinks_volume: 50,
    },
    {
      drink_id: 10,
      drinks_volume: 50,
    },
    {
      drink_id: 11,
      drinks_volume: 50,
    },
    {
      tech_id: 4,
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
    barware_id: 16,
  },
  {
    ingredient_id: 3,
    ingredient_volume: 8,
  },
  {
    drink_id: 12,
    drinks_volume: 30,
  },
  {
    drink_id: 13,
    drinks_volume: 30,
  },
  {
    drink_id: 14,
    drinks_volume: 30,
  },
  {
    tech_id: 4,
  },
  {
    ingredient_id: 7,
    ingredient_volume: 1,
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
    barware_id: 16,
  },
  {
    ingredient_id: 8,
    ingredient_volume: 1,
  },
  {
    drink_id: 15,
    drinks_volume: 1,
  },
  {
    tech_id: 5,
  },
  {
    drink_id: 16,
    drinks_volume: 60,
  },
  {
    ingredient_id: 3,
    ingredient_volume: 8,
  },
  {
    tech_id: 4,
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
    barware_id: 1,
  },
  {
    drink_id: 8,
    drinks_volume: 30,
  },
  {
    drink_id: 1,
    drinks_volume: 15,
  },
  {
    drink_id: 3,
    drinks_volume: 70,
  },
  {
    ingredient_id: 3,
    ingredient_volume: 15,
  },
  {
    tech_id: 1,
  },
  {
    tech_id: 2,
  },
  {
    barware_id: 15,
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
    barware_id: 14,
  },
  {
    ingredient_id: 3,
    ingredient_volume: 10,
  },
  {
    drink_id: 11,
    drinks_volume: 60,
  },
  {
    drink_id: 16,
    drinks_volume: 150,
  },
  {
    tech_id: 4,
  },
  {
    ingredient_id: 1,
    ingredient_volume: 2,
  },
].map((el, i) => ({
  ...el,
  cocktail_id: 6,
  order: i+1,
  createdAt: new Date(),
  updatedAt: new Date()
}));

const cocktail7 = [
  {
    barware_id: 14,
  },
  {
    ingredient_id: 3,
    ingredient_volume: 10,
  },
  {
    drink_id: 10,
    drinks_volume: 60,
  },
  {
    drink_id: 16,
    drinks_volume: 150,
  },
  {
    tech_id: 4,
  },
  {
    ingredient_id: 7,
    ingredient_volume: 1,
  },
].map((el, i) => ({
  ...el,
  cocktail_id: 7,
  order: i+1,
  createdAt: new Date(),
  updatedAt: new Date()
}));

const cocktail8 = [
  {
    barware_id: 16,
  },
  {
    ingredient_id: 3,
    ingredient_volume: 8,
  },
  {
    drink_id: 9,
    drinks_volume: 30,
  },
  {
    drink_id: 10,
    drinks_volume: 60,
  },
  {
    tech_id: 4,
  },
].map((el, i) => ({
  ...el,
  cocktail_id: 8,
  order: i+1,
  createdAt: new Date(),
  updatedAt: new Date()
}));

const cocktail9 = [
  {
    barware_id: 17,
  },
  {
    ingredient_id: 3,
    ingredient_volume: 10,
  },
  {
    drink_id: 18,
    drinks_volume: 100,
  },
  {
    drink_id: 19,
    drinks_volume: 100,
  },
  {
    drink_id: 2,
    drinks_volume: 20,
  },
  {
    tech_id: 4,
  },
  {
    ingredient_id: 7,
    ingredient_volume: 1,
  },
].map((el, i) => ({
  ...el,
  cocktail_id: 9,
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
    ...cocktail7,
    ...cocktail8,
    ...cocktail9,
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
