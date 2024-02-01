// Create an Object: Declare an empty object named person.
// Add Properties: Add properties name, age, and email to the person object with values of your choice.
let person = {
    name: "nigga",
    lastName: "niggerkes",
    Email: "Niga.kok.@gmail.com",
    age: 15
}
// Access Property: Access and log the name property of the person object.
acessname = person["name"]
console.log(acessname)

// Modify Property: Change the age property of the person object to a new value.
person.age = 17
console.log(person.age)
// Add Method: Add a method called introduce to the person object that logs a greeting message with the person's name and age.
let person1 = {
    name: "nigga",
    lastName: "niggerkes",
    Email: "Niga.kok.@gmail.com",
    age: 15,
    introduce: function(){
        console.log(`hello my ${this.name} ${this.lastName}`)
    }
}
person1.introduce();

// Nested Objects: Create an object called address with properties street, city, and postalCode. Add this as a property of the person object.
let person2 = {
    name: "nigga",
    lastName: "niggerkes",
    Email: "Niga.kok.@gmail.com",
    age: 15,
    introduce: function(){
        console.log(`hello my ${this.name} ${this.lastName}`)
    },
    adress : {
        street: "qucha",
        city: "calaci",
        postalCode: "batonibizina"
    }
}
// Access Nested Property: Access and log the city property within the address object.
city_ma_nigga = person2.adress.city
console.log(city_ma_nigga)

// Object Comparison: Create two objects, person1 and person2, with the same properties and values. Check if they are equal.


// Object Iteration: Create a function that loops through and logs all properties and their values of the person object.


// Object Deletion: Remove the email property from the person object.


// Object Length: Write a function that counts and logs the number of properties in the person object.


// Object Keys: Write a function that logs all the keys (property names) of the person object.


// Object Values: Write a function that logs all the values of the properties in the person object.


// Function Declaration: Declare a function named greet that logs "Hello, world!" when called.


// Function Expression: Create a variable sayHi and assign it a function expression that logs "Hi there!" when called.


// Function Parameters: Write a function called add that takes two parameters, a and b, and returns their sum.


// Function Invocation: Call the add function from exercise 3 with arguments 7 and 3, and log the result.



// Function Scope: Declare a variable x inside a function. Try to log the value of x outside of that function. What does it log?



// Arrow Function Exercises:

// Arrow Function Basics: Create an arrow function called double that takes a number as a parameter and returns its double.



// Arrow Function with Implicit Return: Refactor the greet function from exercise 1 using an arrow function with an implicit return.



// Arrow Function in Object: Create an object person with an arrow function property sayHello that logs "Hello!" when called.
// default values in function

