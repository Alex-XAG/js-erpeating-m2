//Делаем Slug в URL из названия статьи (например dev.to)
// Заголовок статьи состоит только из букв и пробелов

//  - Нормализуем строку

//     - Разбиваем по словам

//     - Сшиваем строку с разделителями

//  Должно получиться top-10-benefits-of-react-framework

// const title = "Top 10 benefits of React framework";

// const normalizedTitle = title.toLowerCase();
// // console.log(normalizedTitle);

// const words = normalizedTitle.split(" ");
// // console.log(words);

// const slug = words.join("-");
// // console.log(slug);

// const slug1 = title.toLowerCase().split(" ").join("-");
// console.log(slug1);

///////// Decision by function //////////

const slugify = function (string) {
  //   const normalizedTitle = string.toLowerCase();
  //   const words = normalizedTitle.split(" ");
  //   const slug = words.join("-");
  //  return slug;

  return string.toLowerCase().split(" ").join("-");
};

console.log(slugify("Top 10 benefits of React framework"));
console.log(slugify("Azure Static Web Apps are Awesome"));
console.log(slugify("Technical writing tips for non-native English speakers"));
