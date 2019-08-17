class Person {
  constructor(names, location) {
    this.names = names;
    this.location = location;
  }
  identify(suffix) {
    return `Person Details: ${this.names} located at ${
      this.location
    } ${suffix}`;
  }
}
let person = new Person("Shimwa Ian", "Kigali-Rwanda");

console.log(person.identify("!!!"));
