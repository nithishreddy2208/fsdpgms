   const person = {
    name: "Bob",
    age: 16,
    greet: function() {
        console.log(`Hello! My name is ${this.name}, and I'm ${this.age} years old.`);
    }
};

person.isAdult = function() {
    return this.age >= 18;
};

console.log("Name:", person.name);     
console.log("Age:", person.age);        
console.log("Is Adult:", person.isAdult()); 
person.greet();      