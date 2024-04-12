'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const сocktailsData = [
      {
        title: 'Персиковый сауэр',
        img: 'https://ru.inshaker.com/ckeditor_assets/pictures/6716/original_5.jpg',
        description:
          'Коктейль Виски сауэр, или кислый виски, был придуман еще в XIX веке. В оригинальном рецепте использовался только бурбон, любой другой сорт виски считался неподходящим.',
        user_id: 1,
        status: true,
      },
      {
        title: 'Манхэттен',
        img: 'https://example.com/manhattan.jpg',
        description:
          'Манхэттен был самым знаменитым коктейлем в мире вскоре после его изобретения в Нью-Йоркском клубе Манхэттен около 1880 года. С течением времени классический виски входил и выходил из моды, прежде чем обрести свою нишу как один из угловых камней возрождения крафт-коктейлей.',
        user_id: 1,
        status: true
      },
      {
        title: 'Апероль Шприц',
        img: 'https://live.staticflickr.com/8667/28811096776_a184f889a8_b.jpg',
        description:
          'Апероль Шприц представляет собой слабоалкогольный напиток, родом из Венеции. Напиток освежающий, с нотками фруктов, легкой цитрусовой горечью и умеренной газипованностью. Благодаря простоте приготовления, напиток легко сообразить в домашних условиях. В составе коктейля только три составляющих — шампанское, биттер и минеральная вода.',
        user_id: 1,
        status: true
      },
      {
        title: 'Голден физз',
        img: 'https://www.mixolopedia.com/wp-content/uploads/2019/12/golden-fizz-cocktail.jpg',
        description:
          'Он отличается своим сладким, слегка кислым вкусом, обильными пузырьками и пенкой. Пузырьки и пенка создаются благодаря соде и желтку яйца соответственно. В отличие от многих классических коктейлей, которые получают пенку от белков яйца, Голден Физз получает пенку от желтка.',
        user_id: 2,
        status: true
      },
      {
        title: 'БричМула',
        img: 'https://vechera.me/uploads/cocktail/photo/659/405.png',
        description:
          'это азиатская вариация на "Московский мул". Бричмула - живописное место в ташкентской области, когда то облюбованное туристами-бардами, а сегодня превратившееся в престижный район с правительственными дачами.',
        user_id: 3,
        status: true
      },
      {
        title: 'Клубничный новогодний пунш',
        img: 'https://ogorodland.ru/wp-content/uploads/2021/02/punsh-recept-klassicheskij-alkogolnyj.png',
        description:
          'это крепкий ягодный и сладкий коктейль, который идеально подходит для празднования новогодних праздников. Он основан на роме и дополнен игристым вином, что делает его не только вкусным, но и насыщенным.',
        user_id: 2,
        status: false
      },
    ];

    const сocktails = сocktailsData.map((сocktail) => ({
      ...сocktail,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Cocktails', сocktails);
  },

  async down(queryInterface, Sequelize) {
    await Cocktail.destroy({
      truncate: {
        cascade: true,
      },
    });
  },
};
