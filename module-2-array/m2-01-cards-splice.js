// Работаем с коллекцией карточек в trello
// - Метод splice()
//     - Удалить
//     - Добавить
// - Обновить

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

////////////////////////// Deleting by method indexOf() ////////

// const cardToRemove = "Карточка-3";

// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);

// console.table(cards);

/////////  Добавление по индексу ////////////

// const cardToInsert = "Карточка-6";
// const index = 3;

// cards.splice(index, 0, cardToInsert);

// console.log(cards);

////////// Updating by index ////////////

const cardToUpdate = "Карточка-4";
const index = cards.indexOf(cardToUpdate);

cards.splice(index, 1, "Обновленная карточка - 4");

console.table(cards);
