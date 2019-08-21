"use strict";

function Cat(name, color) {
  this.name = name;
  this.color = color;
}
Cat.prototype.age = 4;
var fluffy = new Cat("Fluffy", "white");
var muffin = new Cat("Muffin", "Brown");
//changing a function's prototype
Cat.prototype = { age: 5 };
var snowbell = new Cat("snowbell", "white");
display(fluffy.age);
display(muffin.age);
display(snowbell.age);
display(Cat.prototype.age);
/* 
4
4
5
5
*/
