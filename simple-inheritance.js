let parent = {
    key1: "parent value1",
    key2: "parent value2",
    method1: function() {
        console.log(this.key1);
    }
};

let child = {
    key2: "child value2",
    method2: function() {
        console.log(this.key2);
    }
};

// we can make child inherit parent
Object.setPrototypeOf(child, parent);

console.log("PARENT");
console.dir(parent);
console.log("key1", parent.key1);
console.log("key2", parent.key2);
console.log("method 1");
parent.method1();

console.log("---------------------------");

console.log("CHILD");
console.dir(child);

console.log("key1", child.key1);
console.log("key2", child.key2);
console.log("method 1");
child.method1();
console.log("method 2");
child.method2();
