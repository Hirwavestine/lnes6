"use strict";

var cat = {
  name: "fluffy",
  color: "white"
};
//using the writable attribute
Object.defineProperty(cat, "name", { writable: false });
//this throw an error because you make property name unwritable
cat.name = "pop";
display(Object.getOwnPropertyDescriptor(cat, "name"));
