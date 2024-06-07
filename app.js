// STRINGS

// firstVariable = 'Hello World';
// firstVariable = 26;
// let secondVariable = firstVariable;
// secondVariable = 'Changing it now';
// const yourName = 'Taylor';
// let greeting = `Hello, my name is ${yourName}`;
// console.log(greeting);

//BOOLEANS

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' == 'Name');

//FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false === false)
// console.log(e == 'Kevin');
// console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a == a || d); // note: the answer is a simple arithmetic equation, not something "weird" console.log(48 __ '48');

//the Farm
// let animal = 'cow';

// const moo = (a) => {
//   return a.toLowerCase() === 'cow' ? 'mooooo' : "hey, that's not a cow";
// };

// console.log(moo(animal));

//Driver's Ed

// age = 16;

// if (age >= 16) {
//   console.log('Here are the keys!');
// } else {
//   console.log("Sorry, you're too young");
// }

//LOOPS

//The Basics

// for (let i = 10; i < 401; i++) {
//   console.log(i);
// }

//Get Even
// for (let i = 1; i < 101; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} <-- is an even number`);
//   } else {
//     console.log(i);
//   }
// }

//Give Me 5

// for (let i = 1; i < 101; i++) {
//   if (i % 15 === 0) {
//     console.log('I found a number. Three is a crowd');
//     console.log(`I found a ${i}. High five!`);
//   }
//   if (i % 3 === 0) {
//     console.log('I found a number. Three is a crowd');
//   } else if (i % 5 === 0) {
//     console.log(`I found a ${i}. High five!`);
//   } else {
//     console.log(i);
//   }
// }

//Savings Account

// let bank_account = 0;

// for (let i = 1; i <= 100; i++) {
//   bank_account += i * 2;
// }

// console.log(bank_account);

//ARRAYS & CONTROL FLOW

////// C. Accessing elements
// const randomThings = [1, 10, 'Hello', true];

// console.log(randomThings[0]);
// console.log((randomThings[2] = 'World'));
// console.log(randomThings);

/////// D. Change Values
// const ourClass = ['Salty', 'Zoom', 'Sardine', 'Slack', 'Github'];

// ourClass[4] = 'Octocat';
// ourClass.push('Cloudy City');
// console.log(ourClass);

/////// E. Mix it Up

// const myArray = [5, 10, 500, 20];
// myArray.push('Aegon', 'GOT');
// myArray.shift();
// myArray.unshift('Bob Marley');
// myArray.reverse();
// console.log(myArray);

/////// F. Biggie Smalls

// const number = 101;

// if (number < 100) {
//   console.log('little number');
// } else {
//   console.log('big number');
// }

//////// G. Monkey in the Middle

// const number = 7;

// if (number < 5) {
//   console.log('little');
// } else if (number > 10) {
//   console.log('big number');
// } else {
//   console.log('monkey');
// }

//////// H. What's in your Closet?

// const kristynsCloset = [
//   'left shoe',
//   'cowboy boots',
//   'right sock',
//   'GA hoodie',
//   'green pants',
//   'yellow knit hat',
//   'marshmallow peeps',
// ];

// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     'grey button-up',
//     'dark grey button-up',
//     'light blue button-up',
//     'blue button-up',
//   ],
//   [
//     // These are Thom's pants
//     'grey jeans',
//     'jeans',
//     'PJs',
//   ],
//   [
//     // Thom's accessories
//     'wool mittens',
//     'wool scarf',
//     'raybans',
//   ],
// ];

///// 1.
// console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
///// 2.
// kristynsCloset.splice(6, 0, 'raybans');
///// 3.
// console.log(thomsCloset[0][0]);
// console.log(thomsCloset[2][1]);
// console.log(
//   `Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]}`
// );
// thomsCloset[1][2] = 'Footie Pajamas';
// console.log(thomsCloset);

// FUNCTIONS

// A. printGreeting
// function printGreeting(name) {
//   return `Hello there ${name}`;
// }

// console.log(printGreeting('Taylor'));

// B. printCool

// function printCool(name) {
//   return `${name} is cool!`;
// }
// console.log(printCool('tay'));

// C. calculateCube

// function calculateCube(num) {
//   return num * num * num;
// }
// console.log(calculateCube(5));

// D. isVowel

// function isVowel(char) {
//   if (
//     char.toLowerCase() === 'a' ||
//     char.toLowerCase() === 'e' ||
//     char.toLowerCase() === 'i' ||
//     char.toLowerCase() === 'o' ||
//     char.toLowerCase() === 'u'
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isVowel('Z'));

// E. getTwoLengths

// function getTwoLengths(str1, str2) {
//   const length = str1.length;
//   const length1 = str2.length;

//   return [length, length1];
// }

// console.log(getTwoLengths('Hank', 'Hippopopalous'));

// F. getMultipleLengths

// function getMultipleLengths(arr) {
//   return arr.map((str) => str.length);
// }
// console.log(getMultipleLengths(['hello', 'what', 'is', 'up', 'dude']));

// G. maxofThree

// function maxofThree(num1, num2, num3) {
//   return Math.max(num1, num2, num3);
// }

// function maxofThree1(num1, num2, num3) {
//   let max = num1;

//   if (num2 > num3) {
//     max = num2;
//   }

//   if (num3 > max) {
//     max = num3;
//   }

//   return max;
// }

// console.log(maxofThree(6, 9, 1));
// console.log(maxofThree1(12, 12, 3));

// H. printLongestWord

// function printLongestWord(arr) {
//   const length = arr.map((str) => str.length);
//   const maxLength = Math.max(...length);

//   const longestWord = arr.find((word) => word.length === maxLength);

//   return longestWord;
// }

// console.log(
//   printLongestWord([
//     'BoJack',
//     'Princess',
//     'Diane',
//     'a',
//     'Max',
//     'Peanutbutter',
//     'big',
//     'Todd',
//   ])
// );

//OBJECTS

// A.
const user = {
  name: 'Taylor',
  email: 'tay@gmail.com',
  age: 34,
  purchased: [],
};

// B.
const updatedUser = {
  ...user,
  email: 'taylor@gmail.com',
  age: user.age + 1,
};

updatedUser.location = 'Chicago';
user.purchased.push('carbs');
user.purchased.push('peace of mind');
user.purchased.push('cherries');
user.friend = {
  name: 'Grace Hopper',
  age: 85,
  location: 'Indiana',
  purchased: [],
};
user.friend.age = 35;
user.friend.purchased.push('The one ring');
user.friend.purchased.push('latte');

// console.log(user.friend.purchased[1]);

// console.log(user);
// console.log(updatedUser);

// F. Loops

for (let i = 0; i < user.purchased.length; i++) {
  console.log(user.purchased[i]);
}

for (let i = 0; i < user.friend.purchased.length; i++) {
  console.log(user.friend.purchased[i]);
}

// G. Functions can operate on objects
function updateUser() {
  user.age += 1;
  user.name = user.name.toUpperCase();
}

updateUser();
console.log(user);
