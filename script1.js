let carIds = [
  { carId: 123, style: "sedan" },
  { carId: 456, style: "convertible" },
  { carId: 789, style: "sedan" }
];
let result = carIds.every(car => car.carId > 0);
console.log(result);
//true
