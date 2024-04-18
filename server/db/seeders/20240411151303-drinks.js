'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const drinksData = [
      {
        title: 'Сахарный сироп',
        description: 'Самый распространенный коктейльный сироп производят из натурального экстракта сахарного тростника, смешанного с водой.',
        category_id: 1,
        img: '/img/sugar-sirop-Medium.png'
      },
      {
        title: 'Содовая',
        description: 'Газированную воду, ставшую незаменимым компонентом физзов и других газированных напитков, ранее производили методом газирования углекислым газом, а сегодня все чаще готовят, добавляя пищевую соду к нейтральной чистой воде.',
        category_id: 1,
        img: '/img/Soda water-Medium.png'
      },
      {
        title: 'Белый ром',
        description: 'Карибский крепкий алкоголь получают методом вертикальной перегонки спирта, полученного путем брожения патоки или сока из сахарного тростника. Перед купажированием выдерживают не менее 12 месяцев в обожженных дубовых бочках из-под бурбона и фильтруют, чтобы обесцветить напиток.',
        category_id: 3,
        img: '/img/Light Rum.png'
      },
      {
        title: 'Самбука классическая',
        description: 'Итальянский крепкий алкоголь производят путем ароматизации пшеничного спирта с сахаром маслами обыкновенного и звездчатого аниса, выжимками из ягод, цветов бузины и разных трав, оттеняющих его стойкий аромат.',
        category_id: 2,
        img: '/img/sambuca.png'
      },
      {
        title: 'Кокосовый ром',
        description: 'Крепкий алкоголь получают методом мацерации кокосовой мякоти в белом роме в течение недели. Затем полученную жидкость подвергают дистилляции. Полученную жидкость оставляют вызревать в бочках не менее чем три месяца.',
        category_id: 2,
        img: '/img/drinks.jpg'
      },
      {
        title: 'Домашний белый вермут на хмеле',
        description: 'По рецепту Фабио ла Пиерта на 1000 мл: положи хмель 4 г в белый вермут 1000 мл и настаивай минимум 24 часа. Отфильтруй в отдельную бутыль и храни в холодильнике.',
        category_id: 3,
        img: '/img/drinks.jpg'
      },
      {
        title: 'Яблочный сок',
        description: 'Для производства сока яблоки пускают под пресс, затем фильтруют и разливают сок по бутылкам.',
        category_id: 1,
        img: '/img/Apple juice-Medium.png'

      },
      {
        title: 'Лаймовый сок',
        description: 'Для производства сока лаймы пускают под пресс, затем фильтруют и разливают сок по бутылкам.',
        category_id: 1,
        img: '/img/Lemon juice-Medium.png'
      },
      {
        title: 'Кофейный ликер',
        description: 'Знаменитый стимулирующий ликер производят методом перколяции зерен кофе разных сортов с нейтральным спиртом. Получившуюся основу, не фильтруя, смешивают с жженым сахаром и разбавляют водой до нужной крепости.',
        category_id: 2,
        img: '/img/Coffee liqueur-Medium.png'
      },
      {
        title: 'Водка',
        description: 'Самый популярный крепкий алкоголь производят методом многократной перегонки зернового спирта, прошедшего разные степени очистки угольными и другими фильтрами и смешанного с чистой водой.',
        category_id: 3,
        img: '/img/Vodka-Medium.png'
      },
      {
        title: 'Сливки',
        description: 'Производят преимущественно из коровьего молока методом частичной сепарации – отделения сливок от молока. Процент жирности в разных странах разнится, но не превышает 15%. Хранится в холодильнике не более 20 дней.',
        category_id: 1,
        img: '/img/Light cream-Medium.png'
      },
      {
        title: 'Лондонский сухой джин',
        description: 'Крепкий алкоголь изготавливается в вертикальных перегонных кубах, зерновой спирт настаивают в течение суток на можжевельнике и десятке других трав и специй, а затем дистиллируют и разливают в бутылки.',
        category_id: 3,
        img: '/img/Gin-Medium.png'
      },
      {
        title: 'Биттер',
        description: 'Десертный ликер с мягким пряным вкусом и горько-терпким травяным ароматом готовят из четырех разных настоев, в состав которых входит 23 вида трав и растений',
        category_id: 3,
        img: '/img/bitter.png'
      },
      {
        title: 'Красный вермут',
        description: 'Своим рождением знаменитый вермут обязан союзу вина, спирта, сахара и 35 альпийским травам и пряностям. Созданный в 1863 году самим Луиджи Росси, оригинальный красный вермут являет собой настоящую икону di Italia и является символом итальянского аперитива. Имеет терпкие пряные ноты.',
        category_id: 2,
        img: '/img/Sweet Vermouth-Medium.png'
      },
      {
        title: 'Ангостура',
        description: 'Рецептура, созданная доктором Йоханном Готтлибом Бенджамином Зигертом, хранится в секрете. При изготовлении пряности настаивают на 97%-ном спирте, затем добавляют тростниковый сахар и дистиллированную воду.',
        category_id: 3,
        img: '/img/Angostura bitters-Medium.png'
      },
      {
        title: 'Бурбон',
        description: 'Крепкий алкоголь, согласно законам, производится с содержанием не менее 51% кукурузного солода, а также ячменя и ржи, дистиллированных и отфильтрованных. Спирты выдерживаются в дубовых бочках не менее 2 лет.',
        category_id: 3,
        img: '/img/Bourbon-Medium.png'
      },
      {
        title: 'Тоник',
        description: 'Газированный напиток с хинином был изобретен в Индии для борьбы с малярией. Производят из газированной воды, смешанной с хинином и небольшим количеством сахара.',
        category_id: 1,
        img: '/img/Tonic Water-Medium.png'
      },
      {
        title: 'Апероль',
        description: 'Знаменитый итальянский аперитив производят с 1919 года по секретной рецептуре братьев Барбьери из Падуи. В состав напитка входит более 30 компонентов, включая цедру горьких апельсинов, травы и ревень.',
        category_id: 2,
        img: '/img/Aperol-Medium.png'
      },
      {
        title: 'Просекко',
        description: 'Согласно Апелласьону 2009 года, Просекко могут носить лишь вина с виноградников данного региона. Собранный в ручную виноград Глера подвергается брожению в вакуумной таре, что позволяет сохранять его вкус намного дольше. Игристое вино отличается выразительным ароматом с оттенками весенних белых цветов, зеленого яблока и цитрусовых плодов, обладает притяным вкусом с нежным фруктовым наполнением и тонкой минеральностью в послевкусии. ',
        category_id: 2,
        img: '/img/Prosecco-Medium.png'
      },

     
    ];

    const drinks = drinksData.map((drink) => ({
      ...drink,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Drinks', drinks);
  },

  async down (queryInterface, Sequelize) {
    await Drink.destroy({
      truncate: {
        cascade: true,
      },
    });
  }
};
