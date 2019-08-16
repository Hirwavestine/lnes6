//parsing JSON
let jsonIn = `
[
  {"carId" : 123},
  {"carId" : 456},
  {"carId" : 012}
]
`;
let carIds = JSON.parse(jsonIn);
console.log(carIds);
