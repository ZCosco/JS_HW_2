//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


function displayFavoriteFoods(person) {
    for (let key in person) {
        if (Array.isArray(person[key])) {
            if (typeof person[key][0] === "object") {
                console.log(`${key}:`);
                for (let subKey in person[key][0]) {
                    console.log(`    ${subKey}: ${person[key][0][subKey]}`);
                }
            } else {
                console.log(`${key}: ${person[key].join(", ")}`);
            }
        } else {
            console.log(`${key}: ${person[key]}`);
        }
    }
}


// Call the function with person3 object
displayFavoriteFoods(person3);


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function Person(name, age) {
    this.name = name;
    this.age = age;
    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    };
    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age
    this.addAge = () => {
        this.age++;
    };
}

// Create two people using the 'new' keyword
let me = new Person("Zachariah", 20);
let person2 = new Person("Joe Mamma", 25);

// Print both of their infos
me.printInfo();
person2.printInfo();

// Increment one person's age by 3 years
me.addAge();
me.addAge();
me.addAge();

// Print the updated info of the person
me.printInfo();

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const checkStringLength = (str) => {
    return new Promise((resolve, reject) => {
        if(str.length > 10) {
            resolve("Big word");
        } else {
            reject("Small Number");
        }
    });
};

checkStringLength("Hello World")
    .then(console.log)
    .catch(console.log);

checkStringLength("Hello")
    .then(console.log)
    .catch(console.log);
