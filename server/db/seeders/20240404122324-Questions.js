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

    const category1 = [
      {
        title: 'Что нужно сделать для того чтобы понять Рекурсию?',
        answer: 'Понять рекурсию',
      },
      {
        title: 'Транслит слова - ПШЕ?',
        answer: 'git',
      },
      {
        title: 'Какой тип данных у значения NULL?',
        answer: 'object',
      },
      {
        title: 'Что выведет следующий код? \n let name = "Вася"; \n function sayHi() \n { alert(name); } \n setTimeout(function() { \n let name = "Петя"; \n sayHi(); }, 1000);',
        answer: 'Вася',
      },
      {
        title: 'Что выведет следующий код? \n var output = (function(x) { \n delete x; \n return x; \n })(0);',
        answer: '0',
      },
    ].map((el, i) => ({ ...el, cost_id: i + 1, category_id: 1 }));
    const category2 = [
      {
        title: 'Как звали главного героя в аниме "Клинок Рассикающий Демонов?"',
        answer: 'Камадо Танджиро',
        img: 'https://avatars.dzeninfra.ru/get-zen_doc/9707955/pub_6438954d241af459e8685d95_643896271da5ab6e4835178f/scale_1200'
      },
      {
        title: 'Угадай аниме по главному герою',
        answer: 'Тетрадь смерти',
        img: 'https://i.pinimg.com/236x/7b/cd/7d/7bcd7d893720da991fba219d1e25f87a.jpg'
      },
      {
        title: 'Кто из нашей команды никогда не смотрел аниме?',
        answer: 'Мансур',
        img: 'https://www.gtrk-vyatka.ru/uploads/posts/2023-03/1677670801_2023-03-01_14-39-08.jpg'
      },
      {
        title: 'Как на самом деле называется аниме "Атака титанов"?',
        answer: 'Атака на титанов',
        img: 'https://sun9-66.userapi.com/impg/IVSUH6SkyKve1YJwub6m8GN3B6VHZhEIoHx24A/7lGkdDzHS08.jpg?size=1280x716&quality=96&sign=003912f8ee6d29af5fd217506c11f920&type=album'
      },
      {
        title: 'Сколько всего кланов в аниме "Наруто"?',
        answer: '49',
        img: 'https://avatars.dzeninfra.ru/get-zen_doc/3473288/pub_5efb18939e24bb6d6fa36f62_5efb29bb045dea3efca80ece/scale_1200'
      },
    ].map((el, i) => ({ ...el, cost_id: i + 1, category_id: 2 }));
    const category3 = [
      {
        title: 'Это же этот как его...',
        answer: 'Леонардо Ди-Каприо',
        img: 'https://radiojazzfm.ru/uploads/photos/1/2022/%D0%94%D0%96%D0%90%D0%97/10/87052ba14e98f31398147a772d86b2fc.jpg'
      },
      {
        title: 'Это же этот как его...',
        answer: 'Роберт Д.М',
        img: 'https://avatars.dzeninfra.ru/get-zen_doc/1704910/pub_60b88907beac402db712034e_60b88d90872b3c5c433b7232/scale_1200'
      },
      {
        title: 'Это же этот как его...',
        answer: 'Майкл Джексон',
        img: 'https://cdn.fishki.net/upload/post/2022/09/02/4253856/6859fac0b828b427eb3531d8bc7096c2.jpg'
      },
      {
        title: 'Это же этА как еЁ...',
        answer: 'Анджелина Джоли',
        img: "https://media.glamour.ru/photos/6169d688854ef439051bc3fc/master/w_1600%2Cc_limit/525x845_77482342.jpg'%2Ct:%2520''%257D"
      },
      {
        title: 'Это же этот как его...',
        answer: 'Бред Питт',
        img: 'https://avatars.mds.yandex.net/i?id=81eaba6c3b54652c4e43dbe746b080d9bd317fec-5100713-images-thumbs&n=13'
      },
    ].map((el, i) => ({ ...el, cost_id: i + 1, category_id: 3 }));
    const category4 = [
      {
        title: 'И это реклама...',
        answer: 'Билайн',
        img: 'https://itblog21.ru/wp-content/uploads/2019/06/revva_oret_reklama02.jpg',
      },
      {
        title: 'И это реклама...',
        answer: 'Орбит',
        img: 'https://cs8.pikabu.ru/post_img/big/2016/04/25/9/1461599280172498839.jpg',
      },
      {
        title: 'Можно просто номер допеть',
        answer: '5553535',
        img: 'https://mnogonotka.com/wp-content/uploads/2020/08/88005553535-reklama-in-300x225.jpg',
      },
      {
        title: 'Эту легенду кто знает?',
        answer: 'Жатетский гусь',
        img: 'https://memepedia.ru/wp-content/uploads/2017/10/%D1%85%D0%BE%D1%80%D0%BE%D1%88%D0%B5%D1%87%D0%BD%D0%BE-%D0%BC%D0%B5%D0%BC-6.jpg',
      },
      {
        title: 'Ласт ван',
        answer: 'Баунти',
        img: 'https://pichold.ru/wp-content/uploads/2018/02/Maldivyi4669.jpg',
      },
    ].map((el, i) => ({ ...el, cost_id: i + 1, category_id: 4 }));
    const category5 = [
      {
        title: 'Вот тебе сколько лет? Если бы ты родился(ась) 10 лет назад, сколько бы лет тебе было?',
        answer: '10',
      },
      {
        title: 'В кармане лежат две монеты на общую сумму 15 рублей. Одна из них не пять рублей. Что это за монеты?',
        answer: '10 и 5',
      },
      {
        title: 'Назови ее по имени и она исчезнет',
        answer: 'Тишина',
      },
      {
        title: 'Датчане любят хвастаться: «У нас все круче, чем в соседней Швеции: и природа, и люди, и даже история… Есть только одна вещь, которая лучше у шведов». Что это?',
        answer: 'Соседи',
      },
      {
        title: 'Аня и Ваня идут со школы и разговаривают. — Когда послезавтра станет вчера, — сказал один из них, — то сегодня будет так же далеко от воскресенья, как и тот день, который был сегодня, когда позавчера было завтра. В какой день недели они разговаривали?',
        answer: 'Воскресенье',
      },
    ].map((el, i) => ({ ...el, cost_id: i + 1, category_id: 5 }));

    await queryInterface.bulkInsert('Questions', [
      ...category1,
      ...category2,
      ...category3,
      ...category4,
      ...category5,
    ].map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    })), {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Questions', null, {});
  },
};