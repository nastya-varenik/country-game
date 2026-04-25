/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Fact {
  text: string;
  country: string;
  direction: 'top' | 'bottom' | 'left' | 'right' | 'none';
  difficulty: 'easy' | 'medium' | 'hard' | 'tricky';
}

export const COUNTRIES = {
  top: { name: 'Франция', flag: '🇫🇷', id: 'france', code: 'FR' },
  bottom: { name: 'Беларусь', flag: '🇧🇾', id: 'belarus', code: 'BY' },
  left: { name: 'США', flag: '🇺🇸', id: 'usa', code: 'US' },
  right: { name: 'Япония', flag: '🇯🇵', id: 'japan', code: 'JP' },
};

export const FACTS: Fact[] = [
  // --- ЛЕГКИЕ (Все слышали) ---
  { text: "В столице этой страны находится знаменитая на весь мир Эйфелева башня.", country: "Франция", direction: "top", difficulty: 'easy' },
  { text: "Символ этой страны — зубр", country: "Беларусь", direction: "bottom", difficulty: 'easy' },
  { text: "Эту страну называют 'Страной восходящего солнца'.", country: "Япония", direction: "right", difficulty: 'easy' },
  { text: "Здесь находится Статуя Свободы и Голливуд.", country: "США", direction: "left", difficulty: 'easy' },
  { text: "В этой стране едят багеты, круассаны и носят береты.", country: "Франция", direction: "top", difficulty: 'easy' },
  { text: "Эта страна славится своими драниками и огромными самосвалами.", country: "Беларусь", direction: "bottom", difficulty: 'easy' },
  { text: "Здесь живут самураи, ниндзя и рисуют аниме.", country: "Япония", direction: "right", difficulty: 'easy' },
  { text: "В этой стране находится Белый дом, где живет президент.", country: "США", direction: "left", difficulty: 'easy' },
  { text: "Здесь пекут вкусные блины и делают лучшую сгущенку (Рогачевскую или Глубокскую).", country: "Беларусь", direction: "bottom", difficulty: 'easy' },
  { text: "Эта страна подарила миру суши, роллы и караоке.", country: "Япония", direction: "right", difficulty: 'easy' },
  { text: "Здесь находятся Диснейленд и Большой Каньон.", country: "США", direction: "left", difficulty: 'easy' },
  { text: "В этой стране находится самый большой художественный музей в мире — Лувр.", country: "Франция", direction: "top", difficulty: 'easy' },

  // --- СРЕДНИЕ (Нужно подумать) ---
  { text: "В этой стране был изобретен шрифт для слепых (Брайля).", country: "Франция", direction: "top", difficulty: 'medium' },
  { text: "Здесь находится географический центр Европы (одна из официально признанных точек).", country: "Беларусь", direction: "bottom", difficulty: 'medium' },
  { text: "В этой стране находится самый загруженный пешеходный переход в мире (Сибуя).", country: "Япония", direction: "right", difficulty: 'medium' },
  { text: "Здесь была подписана первая в мире современная конституция.", country: "США", direction: "left", difficulty: 'medium' },
  { text: "Эта страна имеет больше всего часовых поясов в мире (целых 12!).", country: "Франция", direction: "top", difficulty: 'medium' },
  { text: "В этой стране IT-индустрия развивается очень быстро, здесь придумали Viber и World of Tanks.", country: "Беларусь", direction: "bottom", difficulty: 'medium' },
  { text: "Здесь выращивают квадратные арбузы, чтобы их было удобнее хранить в холодильнике.", country: "Япония", direction: "right", difficulty: 'medium' },
  { text: "В этой стране нет официального государственного языка на федеральном уровне.", country: "США", direction: "left", difficulty: 'medium' },
  { text: "Здесь находится самый высокий в мире виадук Мийо (мост через долину).", country: "Франция", direction: "top", difficulty: 'medium' },
  { text: "В этой стране сохранились замки рода Радзивиллов и Сапегов.", country: "Беларусь", direction: "bottom", difficulty: 'medium' },
  { text: "Здесь находится самая старая действующая компания в мире (ей более 1400 лет).", country: "Япония", direction: "right", difficulty: 'medium' },
  { text: "Эта страна тратит на медицину больше всех в мире на душу населения.", country: "США", direction: "left", difficulty: 'medium' },

  // --- СЛОЖНЫЕ (Для знатоков) ---
  { text: "В этой стране запрещено выбрасывать непроданную еду из магазинов — ее отдают бедным.", country: "Франция", direction: "top", difficulty: 'hard' },
  { text: "Здесь уровень грамотности населения составляет 99.7%.", country: "Беларусь", direction: "bottom", difficulty: 'hard' },
  { text: "В этой стране больше торговых автоматов на человека, чем в любой другой стране.", country: "Япония", direction: "right", difficulty: 'hard' },
  { text: "Здесь находится самая длинная система пещер на планете (Мамонтова пещера).", country: "США", direction: "left", difficulty: 'hard' },
  { text: "Эта страна — родина современного этикета и высокой моды.", country: "Франция", direction: "top", difficulty: 'hard' },
  { text: "Здесь находится одно из крупнейших в мире месторождений калийной соли.", country: "Беларусь", direction: "bottom", difficulty: 'hard' },
  { text: "В этой стране хлюпанье при поедании лапши считается комплиментом повару.", country: "Япония", direction: "right", difficulty: 'hard' },
  { text: "Здесь была основана первая в мире сеть ресторанов быстрого питания.", country: "США", direction: "left", difficulty: 'hard' },
  { text: "В этой стране был построен первый в Европе сверхскоростной поезд (TGV).", country: "Франция", direction: "top", difficulty: 'hard' },
  { text: "Эта страна является крупнейшим в мире экспортером льняного волокна.", country: "Беларусь", direction: "bottom", difficulty: 'hard' },
  { text: "Здесь находится самый большой мегаполис мира по населению — Токио.", country: "Япония", direction: "right", difficulty: 'hard' },
  { text: "В этой стране находится гора Мауна-Кеа, которая выше Эвереста (если считать от дна океана).", country: "США", direction: "left", difficulty: 'hard' },
  { text: "В этой стране французский язык был официальным в течение 300 лет (в прошлом).", country: "Франция", direction: "top", difficulty: 'hard' },
  { text: "Здесь была напечатана первая книга на восточнославянском языке (Франциском Скориной).", country: "Беларусь", direction: "bottom", difficulty: 'hard' },
  { text: "В этой стране расположено более 6800 островов.", country: "Япония", direction: "right", difficulty: 'hard' },
  { text: "Здесь находится единственный в мире музей, посвященный только картофелю фри.", country: "США", direction: "left", difficulty: 'hard' },

  // --- ХИТРЫЕ (Ни одна из стран) ---
  { text: "В этой стране находится самое сухое место на Земле — пустыня Атакама.", country: "Чили (Ни одна из наших!)", direction: "none", difficulty: 'tricky' },
  { text: "В этой стране больше озер, чем во всем остальном мире вместе взятом.", country: "Канада (Ни одна из наших!)", difficulty: 'tricky', direction: "none" },
  { text: "Здесь находятся древние пирамиды Гизы и величественный Сфинкс.", country: "Египет (Ни одна из наших!)", direction: "none", difficulty: 'tricky' },
  { text: "В этой стране обитают кенгуру, коалы и утконосы.", country: "Австралия (Ни одна из наших!)", direction: "none", difficulty: 'tricky' },
  { text: "Здесь находится самая высокая гора в мире — Джомолунгма (Эверест).", country: "Непал/Китай (Ни одна из наших!)", direction: "none", difficulty: 'tricky' },
  { text: "В этой стране течет самая длинная река в мире — Амазонка.", country: "Бразилия (Ни одна из наших!)", direction: "none", difficulty: 'tricky' },
  { text: "Здесь находится самый высокий водопад в мире — Анхель.", country: "Венесуэла (Ни одна из наших!)", direction: "none", difficulty: 'tricky' },
  { text: "В этой стране изобрели пиццу, пасту и построили Колизей.", country: "Италия (Ни одна из наших!)", direction: "none", difficulty: 'tricky' },
  { text: "Эта страна — родина футбола и Шекспира.", country: "Великобритания (Ни одна из наших!)", direction: "none", difficulty: 'tricky' },
  { text: "Здесь находится Великая стена, которую видно из космоса (по легенде).", country: "Китай (Ни одна из наших!)", direction: "none", difficulty: 'tricky' },
];

