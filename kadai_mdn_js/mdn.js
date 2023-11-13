const date = new Date();

console.log(date);


const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];
console.log(year+'年'+month+'月'+day+'日');