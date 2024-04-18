'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const barwaresData = [
      {
        title: 'Шейкер',
        description: 'Шейкер для смешивания коктейлей. Свой нынешний облик получил в конце 1800-х, а особую популярность приобрел в 1920–1930-е годы, примерив десятки стилей и форм. Разделяют коблер со встроенным стрейнером, французский без стрейнера и бостонский, состоящий из двух равных стаканов. Стандартный объем: 500–700 мл.',
        img: '',
      },
      {
        title: 'Трубочки',
        description: 'Трубочки для напитков. В 1888 году владелец фабрики бумажных мундштуков Марвин Стоун придумал лучший аксессуар для распития напитков из бокала. Джозеф Фридман сколотил состояние, доработав их гибким гофрированным участком. Последним этапом стал переход на пластик.',
        img: '',
      },
      {
        title: 'Коктейльная ложка',
        description: 'Незаменимый инструмент бармена служит для приготовления коктейлей в смесительном стакане и укладки слоев в шотах, используется также как мера измерения, вмещающая 5 мл жидких ингредиентов или 5 г сыпучих.',
        img: '',
      },
      {
        title: 'Джиггер',
        description: 'Гарант мер и идеальных пропорций в коктейле. В арсенале лучших бартендеров всегда представлен в разных версиях: 20–40 мл, 25–50 мл и 30–60 мл.',
        img: '',
      },
      {
        title: 'Стрейнер',
        description: 'Аксессуар, незаменимый в работе с бостонским или французским шейкером. Служит для фильтрации коктейля от косточек цитрусовых, отколовшихся кусочков льда и других незапланированных ингредиентов.',
        img: '',
      },
      {
        title: 'Мадлер',
        description: 'Незаменимый аксессуар для тропических коктейлей – им давят ягоды и фрукты в шейкере или сразу в бокале.',
        img: '',
      },
      {
        title: 'Стакан для смешивания',
        description: 'Классический стакан с барной стойки пятизвездочного отеля. Служит для приготовления крепких мужских напитков без добавления соков, травок и джемов. Лед не деформируется и не успевает растаять, сохраняя крепость напитков. Стандартный объем: 500–900 мл.',
        img: '',
      },
      {
        title: 'Пресс для цитрусовых',
        description: 'Незаменимый инструмент, помогающий выжимать сок лаймов или лимонов. Несмотря на то что сегодня в большинстве популярных заведений сок цитрусовых выжимают заранее, свежевыжатый сок считается высшим уровнем качества.',
        img: '',
      },
      {
        title: 'Нож для цедры',
        description: 'Вид оружия бармена из японской культуры карвинга. Служит для срезания тонких полосок цедры, вырезания кружков из яблок или создания широких твистов.',
        img: '',
      },
      {
        title: 'Питчер',
        description: 'Металлический чайничек. Используют для взбивания сливок и приготовления согревающих коктейлей.',
        img: '',
      },
      {
        title: 'Блендер',
        description: 'Придуманный в 1922 году Стефеном Поплавским электрический инструмент незаменим для приготовления тики-коктейлей, смузи и замороженных напитков.',
        img: '',
      },
      {
        title: 'Перлини шейкер',
        description: 'Шейкер для газации коктейлей. После поступления газа в напиток, ингредиенты встряхивают, как в классическом шейкере, и получают газированную смесь, которую после некоторого ожидания (иначе выплеснется наружу) переливают в бокал.',
        img: '',
      },
      {
        title: 'Ножницы для перепелиных яиц',
        description: 'Специальные ножницы с кольцом для фиксации яйца и лезвием, делающим надрез словно циркулем.',
        img: '',
      },
      {
        title: 'Хайбол',
        description: 'Высокий бокал для подачи воды, соков или клубных миксов, смешанных методом билд – сразу в стакане. Стандартный объем: 300–400 мл.',
        img: '',
      },
      {
        title: 'Коктейльный бокал (Мартини)',
        description: 'Один из первых в мире бокалов для подачи коктейлей безо льда. Перед подачей бокал обязательно охлаждают, а длинная ножка не дает коктейлю согреться от руки. Стандартный объем: 90–160 мл.',
        img: '',
      },
      {
        title: 'Рокс',
        description: 'Широкий стакан с толстым дном для подачи крепких мужских коктейлей или крепкого алкоголя в чистом виде. Стандартный объем: 200–300 мл.',
        img: '',
      },
      {
        title: 'Бокал для вина',
        description: 'Классический немного закругленный бокал традиционно больше, чем бокал для белого вина. Стандартный объем: 200–300 мл.',
        img: '',
      },
    ];

    const barwares = barwaresData.map((barware) => ({
      ...barware,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Barwares', barwares);
  },

  async down(queryInterface, Sequelize) {
    await Barware.destroy({
      truncate: {
        cascade: true,
      },
    });
  },
};
