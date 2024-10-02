var person1 = {
    names: "yash",
    age: 25,

};
// person2 object person1 property as a prototype
console.log(person1); 
var person2 = Object.create(person1);
console.log(person2); 
console.log(person2.names); 
console.log(person2.__proto__ == person1);
person2.names = "krish";
var person3 = Object.create(person2);
console.log(person3);
console.log(person3.age);
console.log(person2.names);

console.log(person3.__proto__ == person2);
console.log(person2.__proto__ == person1);
console.log(person1.__proto__ == Object.prototype);
console.log(Object.prototype.__proto__);


console.log(person1.hasOwnProperty("names"));
var a = 10;
console.log(a.__proto__ == Number.prototype);

var str = "krish";
console.log(str.__proto__ == String.prototype);