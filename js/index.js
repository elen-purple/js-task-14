const users = [
  {
    name: "Mango",
    surname: "Gold",
    age: 20,
    eyeColor: "green",
    gender: "F",
    isActive: false,
    email: "mango.gold@gmail.com",
  },
  {
    name: "Poly",
    surname: "Silver",
    age: 23,
    eyeColor: "blue",
    gender: "F",
    isActive: true,
    email: "poly.silver@gmail.com",
  },
  {
    name: "Kiwi",
    surname: "Ruby",
    age: 24,
    eyeColor: "brown",
    gender: "M",
    isActive: false,
    email: "kiwi.ruby@gmail.com",
  },
  {
    name: "Ajax",
    surname: "Ground",
    age: 19,
    eyeColor: "grey",
    gender: "M",
    isActive: true,
    email: "ajax.ground@gmail.com",
  },
];
//* 1
// Отримати масив імен всіх користувачів (поле name).
const getNamesOfUsers = (users) => users.map((user) => user.name);
console.log(getNamesOfUsers(users));
//* 2
// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
const getUsersByEyeColor = (users, eyeColor) =>
  users.filter((user) => user.eyeColor === eyeColor);
console.log(getUsersByEyeColor(users, "grey"));
//* 3
// Отримати масив імен користувачів за статтю (поле gender).
const getUsersByGender = (users, gender) =>
  users.filter((user) => user.gender === gender);
console.log(getUsersByGender(users, "M"));
//* 4
// Отримати масив тільки неактивних користувачів (поле isActive).
const getUsersByActive = (users, isActive) =>
  users.filter((user) => user.isActive === isActive);
console.log(getUsersByActive(users, true));
//* 5
// Отримати користувача (не масив) по email (поле email, він унікальний).
const findUserByEmail = (users, email) =>
  users.find((user) => user.email === email);
console.log(findUserByEmail(users, "kiwi.ruby@gmail.com"));
//* 6
// Отримати масив користувачів, які потрапляють у вікову категорію від min до max років (поле age).
const getUsersByAge = (users, min, max) =>
  users.filter((user) => min - 1 < user.age && user.age < max + 1);
console.log(getUsersByAge(users, 19, 22));
