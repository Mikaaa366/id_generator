const fs = require('fs');

genders = ['M', 'F'];
maleFirstNames = ['Jan', 'Adam', 'Tomasz', 'Robert', 'Wojciech'];
femaleFirstNames = ['Ada', 'Maria', 'Natalia', 'Eliza', 'Marta'];
surnames = ['Piekut', 'Duda', 'Abel', 'Kowal', 'Kot'];

const randChoice = (arr) => {
  const randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
};

const generateRandomPhoneNumber = () => {
  const prefix = '+1'; // Replace with the desired country code
  const num1 = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, '0');
  const num2 = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, '0');
  const num3 = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, '0');
  return `${prefix}-${num1}-${num2}-${num3}`;
};

const generateEmail = (firstName, surname) => {
  return `${firstName}.${surname}@gmail.com`;
};
const people = [];

for (let i = 0; i < 20; i++) {
  const gender = randChoice(genders);
  const name =
    gender === 'M' ? randChoice(maleFirstNames) : randChoice(femaleFirstNames);
  const surname = randChoice(surnames);
  const age = Math.floor(Math.random() * (80 - 18) + 18);
  const phone = generateRandomPhoneNumber();
  const email = generateEmail(name, surname);
  people.push({ gender, name, surname, age, phone, email });
}

const jsonDataPeople = JSON.stringify(people);

fs.writeFile('RandomId20Peoples', jsonDataPeople, (err) => {
  if (err) throw err;
  console.log('File has been saved');
});