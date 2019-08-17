class Vehicle{
  constructor(){
    this.type='car';
  }
  start(){
    return `
    Starting: ${this.type}`;
  }
}

class Car extends Vehicle{
    start(){
      return 'In Car start' +super.start();
    }
}
let car =new Car();
console.log(car.start());