// // 1. Question: Reverse a string without using the built-in reverse() method.
// // Solution:

// function stringKoReverseKro(str) {
//     let reverse = " ";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverse += str[i];
//     };
//     return reverse;
// };

// console.log(stringKoReverseKro("Reverse String"));



// -------------------------------------------------------------------------------------------------------------------- //


// // 2. Question: Count the number of vowels in a given string.
// // Solution:

// function countVowels(str) {
//     const vowels = 'aeiouAEIOU';
//     let count = 0;
//     for (let char of str) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels('Isme vowels kitney hn'));


// -------------------------------------------------------------------------------------------------------------------- //


// // 3. Question: Convert the first letter of each word in a sentence to uppercase.
// // Solution:

// function capitalizeFirstLetters(sentence) {
//     let words = sentence.split(' ');
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].substring(1);
//     }
//     let capitalizedSentence = words.join(' ');
//     return capitalizedSentence;
// }

// console.log(capitalizeFirstLetters('sentence ke saray first words capitalize krney wala function'));


// -------------------------------------------------------------------------------------------------------------------- //


// //4. Question: Check if a string is a palindrome.
// //Solution:

// function isPalindrome(str) {
//     let reversedStr = str.split('').reverse().join('');
//     return str === reversedStr;
// }

// console.log(isPalindrome('madam'));
// console.log(isPalindrome('hello'));
// console.log(isPalindrome('racecar'));
// console.log(isPalindrome('level'));


// -------------------------------------------------------------------------------------------------------------------- //


// //5. Question: Find the sum of all positive numbers in an array.
// // Solution:

// function sumOfPositiveNumbers(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }

// const numbers = [3, -2, 6, -8, 10, -4, 7];
// console.log(sumOfPositiveNumbers(numbers));


// -------------------------------------------------------------------------------------------------------------------- //


// // 6. Question: Find the index of the first occurrence of a specific element in an array.
// // Solution:

// function findFirstOccurrence(arr, element) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === element) {
//             return i;
//         }
//     }
//     return "Element is not found in array"; // if element not found
// }

// const numbers = [5, 3, 7, 1, 4, 3, 8];
// console.log(findFirstOccurrence(numbers, 3));
// console.log(findFirstOccurrence(numbers, 1));
// console.log(findFirstOccurrence(numbers, 9)); // if element not found


// -------------------------------------------------------------------------------------------------------------------- //


// 7. Question: Remove all duplicates from an array without built-in methods.
// Solution:

// function removeDuplicates(arr) {
//     let uniqueArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let isDuplicate = false;
//         for (let j = 0; j < uniqueArr.length; j++) {
//             if (arr[i] === uniqueArr[j]) {
//                 isDuplicate = true;
//                 break;
//             }
//         }
//         if (!isDuplicate) {
//             uniqueArr.push(arr[i]);
//         }
//     }
//     return uniqueArr;
// }

// const numbers = [5, 3, 7, 3, 1, 4, 3, 8, 4];
// console.log(removeDuplicates(numbers));


// -------------------------------------------------------------------------------------------------------------------- //


// // 8. Question: Sort the array in ascending and descending without built-in methods.
// // Solution:

// function bubbleSortAscending(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// const numbers = [5, 3, 7, 1, 4, 3, 8];
// console.log(bubbleSortAscending(numbers));


// -------------------------------------------------------------------------------------------------------------------- //


// 9. Question: Print all even numbers between 1 and 20 using a while loop.
// Solution:

// let num = 1;

// while (num <= 20) {
//     if (num % 2 === 0) {
//         console.log(num);
//     }
//     num++;
// }


// -------------------------------------------------------------------------------------------------------------------- //


// // 10. Question: Calculate the factorial of a number using a do-while loop.
// // Solution:

// function calculateFactorial(n) {
//     let factorial = 1;
//     let num = n;

//     do {
//         factorial *= num;
//         num--;
//     } while (num > 1);

//     return factorial;
// }

// const number = 5;
// console.log(`Factorial of ${number} is: ${calculateFactorial(number)}`);


// -------------------------------------------------------------------------------------------------------------------- //


// // 11. Question: Iterate through the properties of an object using a for-in loop.
// // Solution:

// const student = {
//     name: "Azeen",
//     age: 20,
//     grade: "A",
//     city: "Karachi"
// };

// for (let property in student) {
//     if (student.hasOwnProperty(property)) {
//         console.log(`${property}: ${student[property]}`);
//     }
// }


// -------------------------------------------------------------------------------------------------------------------- //


// // 12. Question: Loop through an array using a for-of loop and double each element.
// // Solution:

// let numbers = [1, 2, 3, 4, 5];

// let index = 0;
// for (let number of numbers) {
//     numbers[index] = number * 2;
//     index++;
// }

// console.log(numbers);


// -------------------------------------------------------------------------------------------------------------------- //


// // 13. Question: Check if a number is even or odd and return a corresponding message.
// // Solution:

// function checkEvenOrOdd(number) {
//     if (number % 2 === 0) {
//         return `${number} is even.`;
//     } else {
//         return `${number} is odd.`;
//     }
// }

// const number1 = 4;
// const number2 = 7;

// console.log(checkEvenOrOdd(number1));
// console.log(checkEvenOrOdd(number2));


// -------------------------------------------------------------------------------------------------------------------- //


// // 14. Question: Find the maximum of three numbers using nested ternary operators.
// // Solution:

// const num1 = 5;
// const num2 = 8;
// const num3 = 3;

// const max = (num1 > num2) ?
//     ((num1 > num3) ? num1 : num3) :
//     ((num2 > num3) ? num2 : num3);

// console.log(`The maximum number is: ${max}`);


// -------------------------------------------------------------------------------------------------------------------- //


// // 15. Question: Determine if a year is a leap year or not.
// // Solution:

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return `${year} is a leap year.`;
//     } else {
//         return `${year} is not a leap year.`;
//     }
// }

// const year1 = 2020;
// const year2 = 2021;
// const year3 = 1900;
// const year4 = 2000;

// console.log(isLeapYear(year1));
// console.log(isLeapYear(year2));
// console.log(isLeapYear(year3));
// console.log(isLeapYear(year4));


// -------------------------------------------------------------------------------------------------------------------- //


// // 16. Rewrite the following code using a ternary operator:
// //                                                        let result;
// //                                                        if (score >= 80) {
// //                                                            result = "Pass";
// //                                                        } else {
// //                                                            result = "Fail";
// //                                                        }
// // Solution:

// let score1 = 85;
// let score2 = 75;

// let result1 = (score1 >= 80) ? "Pass" : "Fail";
// let result2 = (score2 >= 80) ? "Pass" : "Fail";

// console.log(result1);
// console.log(result2);


// -------------------------------------------------------------------------------------------------------------------- //


// // 17. How does the optional chaining operator (?.) work, and how can it be used to access nested properties of an object?
// // Solution:

// ANS. The optional chaining operator (?.) in JavaScript allows you to safely access nested properties of an object. If a reference is null or undefined at any point in the chain, the expression returns undefined instead of throwing an error.

// Example:
// let user = {
//     address: {
//         city: "Karachi"
//     }
// };

// let city = user?.address?.city; // "Karachi"

// let user2 = {};
// let city2 = user2?.address?.city; // undefined

// In this example, city gets the value "New York", and city2 safely returns undefined instead of causing an error because address is not defined in user2.


// -------------------------------------------------------------------------------------------------------------------- //


// // 18.Compare the for...in loop and the for...of loop in terms of their use cases and the types of values they iterate over.
// // Solution:

// 1) for...in loop:
//        *)Iterates over enumerable properties of an object.
//        *)Returns keys (property names) as strings.
//        *)Used for iterating over object properties.

// 2) for...of loop:
//        *)Iterates over iterable objects (arrays, strings, etc.).
//        *)Returns values of the iterable directly.
//        *)Used for iterating over values of iterable objects.


// -------------------------------------------------------------------------------------------------------------------- //


// // 19. Define a function calculateAverage that takes an array of numbers as an argument and returns the average value.
// // Solution:

// function calculateAverage(numbers) {
//     if (numbers.length === 0) return 0;
//     let sum = numbers.reduce((acc, curr) => acc + curr, 0);
//     return sum / numbers.length;
// }
// console.log(calculateAverage([10, 20, 30, 40, 50]));
// console.log(calculateAverage([5, 10, 15]));
// console.log(calculateAverage([]));


// -------------------------------------------------------------------------------------------------------------------- //


// // 20. Explain the concept of "closures" in JavaScript and provide an example of their practical use.
// // Solution:

// ANS. Closures in JavaScript allow functions to retain access to variables from their lexical scope even after the outer function has finished executing. They are commonly used for encapsulation, creating private variables, and managing state in asynchronous operations.

// Example of Practical Use:

// function outerFunction() {
//     let outerVariable = "Hello";

//     function innerFunction() {
//         console.log(outerVariable); 
//     }

//     return innerFunction;
// }

// let closureExample = outerFunction();
// closureExample(); // Output: "Hello"

// In this example, `innerFunction` forms a closure over `outerVariable`, maintaining access to it even after `outerFunction` completes execution.


// -------------------------------------------------------------------------------------------------------------------- //


// // 21. Create an object named student with properties name, age, and grades. Add a method calculateAverage that calculates the average of the grades.
// // Solution:

// let student = {
//     name: "Azeen Shah",
//     age: 20,
//     grades: [85, 90, 75, 95],

//     calculateAverage: function() {
//         let sum = this.grades.reduce((acc, grade) => acc + grade, 0);
//         return sum / this.grades.length;
//     }
// };

// console.log(student.calculateAverage());


// -------------------------------------------------------------------------------------------------------------------- //


// // 23. Write a loop that iterates over an array of numbers and logs whether each number is even or odd, using a ternary operator.
// // Solution:

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let number of numbers) {
//     let message = (number % 2 === 0) ? `${number} is even` : `${number} is odd`;
//     console.log(message);
// }


// -------------------------------------------------------------------------------------------------------------------- //


// // 24. Describe the differences between the for loop, while loop, and do...while loop in JavaScript. When might you use each?
// // Solution:

// 1) for loop:
//            Used for known iterations with a structured setup of initialization, condition, and iteration. 

// 2) while loop:
//            Iterates based on a condition before entering the loop body.

// 3) do...while loop: 
//            Similar to while loop but ensures the loop body executes at least once before checking the condition.



// -------------------------------------------------------------------------------------------------------------------- //


// // 25. Provide an example of using optional chaining within a loop to access a potentially missing property of an object.
// // Solution:

// let users = [
//     { id: 1, name: 'Azeen', address: { city: 'Karachi' } },
//     { id: 2, name: 'Ali', address: null },
//     { id: 3, name: 'Amjad' }
// ];

// for (let user of users) {
//     let cityName = user.address && user.address.city ? user.address.city : 'Unknown';

//     console.log(`${user.name}'s city: ${cityName}`);
// }



// -------------------------------------------------------------------------------------------------------------------- //


// // 26. Write a for...in loop that iterates over the properties of an object and logs each property name and value.
// // Solution:

// let person = {
//     name: 'Azeen Shah',
//     age: 30,
//     city: 'Karachi'
// };

// for (let key in person) {
//     console.log(`${key}: ${person[key]}`);
// }


// -------------------------------------------------------------------------------------------------------------------- //


// // 27. Explain the use of the break and continue statements within loops. Provide scenarios where each might be used.
// // Solution:

// 1) break statement: Stops the execution of a loop entirely based on a condition. Used to exit a loop early. 
//          Example: Exiting a loop when a specific item is found.

// 2) continue statement: Skips the current iteration of a loop based on a condition and moves to the next iteration. 
//          Example: Skipping processing for certain elements in an array.


// -------------------------------------------------------------------------------------------------------------------- //


// // 28. Write a function calculateTax that calculates and returns the tax amount based on a given income. Use a ternary operator to determine the tax rate.
// // Solution:

// function calculateTax(income) {
//     let taxRate = income <= 50000 ? 0.1 : income <= 100000 ? 0.2 : 0.3;
//     let taxAmount = income * taxRate;
//     return taxAmount;
// }

// console.log(calculateTax(40000));
// console.log(calculateTax(70000));
// console.log(calculateTax(120000));


// -------------------------------------------------------------------------------------------------------------------- //


// // 29. Create an object car with properties make, model, and a method startEngine that logs a message. Instantiate the object and call the method.
// // Solution:

// let car = {
//     make: 'Toyota',
//     model: 'Camry',
//     startEngine: function() {
//         console.log(`The ${this.make} ${this.model}'s engine has started.`);
//     }
// };

// car.startEngine();


// -------------------------------------------------------------------------------------------------------------------- //


// // 30.Explain the differences between regular functions and arrow functions in terms of scope, this binding, and their use as methods.
// // Solution:

// 1) Regular Functions:
//            *)Scope: Create their own scope.
//            *)this Binding: Dynamic, depends on how the function is called.
//            *)Use as Methods: Suitable for object methods.

// 2) Arrow Functions:
//            *)Scope: Inherit scope from their parent.
//            *)this Binding: Lexical, inherits this from surrounding code.
//            *)Use as Methods: Not suitable for object methods due to lexical this.

// Examples:
// Regular Function:
//                 let person = {
//                     name: 'Azeen',
//                     greet: function() {
//                         console.log(`Hello, my name is ${this.name}`);
//                     }
//                 };

//                 person.greet();

// Arrow Function:
//                 let person = {
//                     name: 'Azeen',
//                     greet: () => {
//                         console.log(`Hello, my name is ${this.name}`);
//                     }
//                 };

//                 person.greet();


// Regular functions are better for object methods; arrow functions inherit this from the parent scope.


// -------------------------------------------------------------------------------------------------------------------- //

// // **Map Transformation:**
// // 31.Given an array of integers, use the `map` method to square each element and return a new array with the squared values.
// // Solution:

// let numbers = [1, 2, 3, 4, 5];

// let squaredNumbers = numbers.map(num => num * num);

// console.log(squaredNumbers);


// -------------------------------------------------------------------------------------------------------------------- //

// // **Filter and Map Combination:**
// // 32.Take an array of strings, filter out the ones with a length less than 5, and then capitalize the remaining strings using the `map` method.
// // Solution:


// let strings = ['apple', 'banana', 'cat', 'dog', 'elephant'];


// let result = strings
//     .filter(str => str.length >= 5)
//     .map(str => str.toUpperCase());


// console.log(result);


// -------------------------------------------------------------------------------------------------------------------- //

// // **Sorting Objects:**
// // 33.Given an array of objects with a 'price' property, use the `sort` method to arrange them in descending order based on their prices.
// // Solution:

// let items = [
//     { name: 'item1', price: 50 },
//     { name: 'item2', price: 30 },
//     { name: 'item3', price: 40 },
//     { name: 'item4', price: 100 }
// ];

// items.sort((a, b) => b.price - a.price);

// console.log(items);


// -------------------------------------------------------------------------------------------------------------------- //

// // **Reduce for Aggregation:**
// // 34. Use the `reduce` method to find the total sum of all even numbers in an array of integers.
// // Solution:

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let totalSumOfEvens = numbers.reduce((sum, num) => {
//     if (num % 2 === 0) {
//         return sum + num;
//     }
//     return sum;
// }, 0);

// console.log(totalSumOfEvens);


// -------------------------------------------------------------------------------------------------------------------- //

// // **Find and Modify:**
// // Q. Given an array of objects with 'id' properties, use the `find` method to locate an object with a specific 'id' and update its 'status' property to 'completed'.
// // Solution:

// let items = [
//     { id: 1, name: 'item1', status: 'pending' },
//     { id: 2, name: 'item2', status: 'pending' },
//     { id: 3, name: 'item3', status: 'pending' }
// ];

// let targetId = 2;
// let item = items.find(obj => obj.id === targetId);

// if (item) {
//     item.status = 'completed';
// }
// console.log(items);


// -------------------------------------------------------------------------------------------------------------------- //

// // **Chaining Methods:**
// // Q. Create a chain of array methods to find the average of all positive numbers in an array of mixed integers and return the result rounded to two decimal places.
// // Solution:

// let numbers = [1, -2, 3, 4, -5, 6, -7, 8, 9, -10];

// let average = numbers
//     .filter(num => num > 0)
//     .reduce((sum, num, _, arr) => sum + num / arr.length, 0)
//     .toFixed(2);

// console.log(average);


// -------------------------------------------------------------------------------------------------------------------- //

// // **Conditional Filtering:**
// // Q.  Implement a function that takes an array of objects with 'age' properties and returns an array of those who are adults (age 18 and above) using the `filter` method.
// // Solution:

// function getAdults(people) {
//     return people.filter(person => person.age >= 18);
// }

// let people = [
//     { name: 'Abar', age: 17 },
//     { name: 'Jabar', age: 20 },
//     { name: 'Gaffar', age: 15 },
//     { name: 'Mustaqeem', age: 22 }
// ];

// let adults = getAdults(people);

// console.log(adults);


// -------------------------------------------------------------------------------------------------------------------- //

// // **Advanced Sorting:**
// // Q. Sort an array of strings based on their lengths in ascending order. If two strings have the same length, maintain their relative order in the sorted array.
// // Solution:

// let strings = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'grape'];

// strings.sort((a, b) => {
//     if (a.length === b.length) {
//         return 0;
//     }
//     return a.length - b.length;
// });

// console.log(strings);


// -------------------------------------------------------------------------------------------------------------------- //

// // **Nested Array Operations:**
// // Q. Given an array of arrays containing numbers, use a combination of array methods to flatten the structure and then calculate the sum of all the numbers.
// // Solution:

// let arrays = [
//     [1, 2, 3],
//     [4, 5],
//     [6, 7, 8]
// ];

// let flattened = arrays.flat();

// let sum = flattened.reduce((total, num) => total + num, 0);

// console.log(sum);


// -------------------------------------------------------------------------------------------------------------------- //

// // **Error Handling with Find:**
// // Q. Modify the `find` method to handle the scenario where the desired element is not found, returning a custom default object instead.
// // Solution:

// let items = [
//     { id: 1, name: 'item1' },
//     { id: 2, name: 'item2' },
//     { id: 3, name: 'item3' }
// ];

// let targetId = 4;

// let foundItem = items.find(item => item.id === targetId) || { id: targetId, name: 'Default Item' };

// console.log(foundItem);


// -------------------------------------------------------------------------------------------------------------------- //

// // **Map Method:**
// // Q. How does the `map` method work in JavaScript, and can you provide an example of when you might use it to manipulate an array of objects?
// // Solution:

// let people = [
//     { name: 'Abar', age: 25 },
//     { name: 'Jabar', age: 30 },
//     { name: 'Gaffar', age: 35 }
// ];

// let namesInUpperCase = people.map(person => person.name.toUpperCase());

// console.log(namesInUpperCase);


// -------------------------------------------------------------------------------------------------------------------- //

// **Filter Method:**
// Q.Explain the purpose of the `filter` method. Provide an example where you use `filter` to extract elements from an array based on a specific condition.
// Solution:

// The filter method creates a new array with elements that pass a test specified in a callback function.
// Example:
// Extract even numbers from an array:

//             let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//             let evenNumbers = numbers.filter(number => number % 2 === 0);
//             console.log(evenNumbers); // [2, 4, 6, 8, 10]

// Explanation:
// 1) filter method: Tests each element, keeps only the ones where the callback returns true.
// 2) Result: evenNumbers contains only even numbers from numbers.


// -------------------------------------------------------------------------------------------------------------------- //

// // **Error Handling:**
// // Q .How would you handle potential errors when using array methods like `find` or `reduce`? Provide an example of error handling in such a scenario.
// // Solution:

// Handle errors in find and reduce with default values and initial values.

// Example with find:
// Use a default value if not found:

//             let items = [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }];
//             let foundItem = items.find(item => item.id === 3) || { id: 3, name: 'Default Item' };
//             console.log(foundItem); // { id: 3, name: 'Default Item' }


// Example with reduce:
// Use an initial value:

//             let numbers = [];
//             let sum = numbers.reduce((total, num) => total + num, 0);
//             console.log(sum); // 0

// Summary:

// 1) find: Use || to provide a default value.
// 2) reduce: Use an initial value to handle empty arrays.


// -------------------------------------------------------------------------------------------------------------------- //

// // **Immutable Operations:**
// // Q .Discuss the importance of immutability when working with array methods. Demonstrate how you would perform immutable operations using methods like `map` or `filter`.
// // Solution:

// Ans) Immutability is important in JavaScript because it helps prevent unintended side effects by ensuring that the original data remains unchanged. This makes the code easier to debug, test, and reason about.

// Example with map:
// Creating a new array by doubling each element without changing the original array:

//                 let numbers = [1, 2, 3, 4, 5];
//                 let doubledNumbers = numbers.map(num => num * 2);

//                 console.log(doubledNumbers); // [2, 4, 6, 8, 10]
//                 console.log(numbers); // [1, 2, 3, 4, 5] (original array remains unchanged)

// Example with filter:
// Creating a new array by filtering out odd numbers without changing the original array:

//                 let numbers = [1, 2, 3, 4, 5];
//                 let evenNumbers = numbers.filter(num => num % 2 === 0);

//                 console.log(evenNumbers); // [2, 4]
//                 console.log(numbers); // [1, 2, 3, 4, 5] (original array remains unchanged)

// Summary:

// *) Immutability: Prevents changing the original data.
// *) map and filter: Methods that create new arrays, preserving the original arrays.


// -------------------------------------------------------------------------------------------------------------------- //

// //  **Performance Considerations:**
// // Q .Compare the performance implications of using `map` versus `forEach`. In what scenarios would you prefer one over the other, and why?
// // Solution:

// Ans) Performance Considerations: map vs. forEach

// 1)map:
//     *)Creates a new array: Each element is processed and a new array is returned.
//     *)Performance: Slightly slower than forEach due to the creation of a new array.
//     *)Use case: When you need to transform an array and create a new one.

// 2)forEach:
//     *)No new array: Executes a provided function once for each array element without returning a new array.
//     *)Performance: Generally faster as it doesn't create a new array.
//     *)Use case: When you need to perform side effects like logging or modifying existing elements.

// Example Usage:
// map: Use when you need to create a new transformed array.

//         let numbers = [1, 2, 3, 4, 5];
//         let doubled = numbers.map(num => num * 2);
//         console.log(doubled); // [2, 4, 6, 8, 10]

// forEach: Use when you need to perform operations on existing elements.

//         let numbers = [1, 2, 3, 4, 5];
//         numbers.forEach((num, index, arr) => {
//             arr[index] = num * 2;
//         });
//         console.log(numbers); // [2, 4, 6, 8, 10]

// Summary:

// 1)Use map when you need a new array with transformed values.
// 2)Use forEach for operations where you don't need a new array.