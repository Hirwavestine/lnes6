class Person {
  constructor(names, location) {
    this.names = names;
    this.location = location;
  }
  identify() {
    return `Person Details: ${this.names} located at ${this.location}`;
  }
}
let person = new Person("Shimwa Ian", "Kigali-Rwanda");

console.log(person.identify());
