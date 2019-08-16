let trackCar = function(cardId, city = "NY") {
  console.log(`Tracking ${cardId} in ${city}.`);
};

console.log(trackCar(123));
//Tracking 123.
console.log(trackCar(123, "Chicago"));
//Tracking 123 in Chicago.
