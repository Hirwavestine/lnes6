"use strict";

function Cat(name, color) {
  this.name = name;
  this.color = color;
}
var fluffy = new Cat("Fluffy", "white");
//an object has a proto but a function has a prototype
//A function's prototype:is the object instance that will become the prototype for all objects created using this function as a constructor.
//An object's prototype:is the object instance from which the object is inherited.
display(Cat.prototype);
display(fluffy.__proto__);
display(Cat.prototype === fluffy.__proto__);
/*
Cat {
}
Cat {
}
true

*/
