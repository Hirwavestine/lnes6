function Car(id) {
  this.carId = id;
  this.start = function() {
    console.log("start:" + this.carId);
  };
}

let car = new Car(123);
car.start();
//start: 123
