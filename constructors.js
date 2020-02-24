// when new Person(...) is called, it will return a new object that with the properties passed
function Person(name, birthYear, job) {
    // in the beginning, 'this' is an empty object that will be returned
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
    // it would not be efficient to attach duplicate functionst to each instance
    // this.calcAge = function() { ... }
}

// a constructor functions .prototype property will set the [[Prototype]] property
// of instances to it. The default prototype property is
//                          {
//                              constructor: Person
//                          }
Person.prototype.calcAge = function() {
    return 2020 - this.birthYear;
};

// john will inherit from
//                          {
//                              constructor: Person,
//                              calcAge: function() { ... }
//                          }
let john = new Person("John", 1990, "teacher");

// Person's [[Prototype]] is the Function Objects prototype property
console.log("PERSON [[PROTOTYPE]]:");
console.dir(Object.getPrototypeOf(Person));

// Person's prototype is an object that all instances will inherit from
console.log("PERSON prototype:");
console.dir(Person.prototype);

// john's [[Prototype]] is Person.prototype
console.log("JOHN'S [[PROTOTYPE]]:");
console.dir(Object.getPrototypeOf(john));

// we can use the constructor property of the instances to create new instances
let mary = new john.constructor("Mary", 1991, "farmer"); // or Object.getPrototypeOf(john).constructor

// mary's [[Prototype]] is Person.prototype (=== John.__proto__)
console.log("MARY'S [[PROTOTYPE]]:");
console.dir(Object.getPrototypeOf(mary));
