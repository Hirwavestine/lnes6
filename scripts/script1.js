"use strict";

var cat = {
  name: { first: "fluffy", last: "laBeouf" },
  color: "white"
};
//using the writable attribute
Object.defineProperty(cat, "name", { writable: false });
//use this to make an object which has an other object unchanged
Object.freeze(cat.name);
//this can not throw an error because you set a name property to an object

cat.name.first = "crack";
display(Object.getOwnPropertyDescriptor(cat, "name"));
