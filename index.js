function Person() {}

Person.prototype.calcAge = function() {
    return 2020 - this.birthYear;
};

let john = new Person();

console.dir(Object.getPrototypeOf(Person));
console.dir("PERSON prototype:", JSON.stringify(Person.prototype));
console.dir(
    "JOHN'S [[PROTOTYPE]]:",
    JSON.stringify(Object.getPrototypeOf(john))
);
