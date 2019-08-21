"use strict";

"use strict";

function Cat(name, color) {
  this.name = name;
  this.color = color;
}
Cat.prototype.age = 4;
var fluffy = new Cat("Fluffy", "white");

display(fluffy.__proto__);
display(fluffy.__proto__.__proto__);
display(fluffy.__proto__.__proto__.__proto__);
/*
Cat {
age: 4
}
Object {
}
null

*/
