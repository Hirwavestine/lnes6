"use strict";

function Cat(name, color) {
  this.name = name;
  this.color = color;
}
Cat.prototype.age = 4;
var fluffy = new Cat("Fluffy", "white");
var muffin = new Cat("Muffin", "Brown");

display(fluffy.age);
display(fluffy.__proto__.age);
display(Object.keys(fluffy));
display(fluffy.hasOwnProperty("color"));
/*
4
4
Array {
0: name
1: color
}
true
*/
