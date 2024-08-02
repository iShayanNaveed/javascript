// palindorme
// function check() {
//   let input = prompt(`Enter numbers:`);
//   try {
//     arrayEqual(JSON.parse(input), JSON.parse(input).reverse());
//   } catch {
//     alert("please enter a valid input");
//   }
// }

// function arrayEqual(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return ;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       alert("The array you entered is not a palindorme");
//       return;
//     }
//   }
//   alert("The array you entered is a palindorme");
//   return;
// }

// for (let x = 0; x > -1; x++) {
//   check();
// }
//end
// 1
//  12
//  123
//  1234
// let temp = "1 \n 12 ";
// for (let x = 1; x <= 4; x++) {
//   let temp = "";
//   for (let y = 1; y <= x; y++) {
//     temp += y + " ";
//   }
// }
// console.log(temp);
//end
// //pyramid
// for (let x = 1; x <= 4; x++) {
//   let temp = "";
//   let spaces = "";
//   for (let a = 5; a >= x; a--) {
//     spaces += " ";
//   }
//   for (let y = 1; y <= x; y++) {
//     temp += y === 1 ? spaces + y : " " + y;
//   }
//   console.log(temp);
// }
// //end
// 1234
// 123
// 12
// 1
// for (let x = 4; x >= 1; x--) {
//   let temp = "";
//   for (let y = 1; y <= x; y++) {
//     temp += y + " ";
//   }
//   console.log(temp);
// }
// 1234
// 123
//  12
//   1
//pyramid
// for (let x = 4; x >= 1; x--) {
//   let temp = "";
//   let spaces = "";
//   for (let a = 5; a >= x; a--) {
//     spaces += " ";
//   }
//   for (let y = 1; y <= x; y++) {
//     temp += y === 1 ? spaces + y : " " + y;
//   }
//   console.log(temp);
// }
//prime number
// function check() {
//   let num = prompt(`Enter a number:`);
//   if (num == 1) {
//     alert("The number you entered is prime number");
//   }
//   if (num == 2) {
//     alert("The number you entered is prime number");
//   }
//   if (num < 1) {
//     alert("Please Enter a Valid Input:");
//     return false;
//   } else {
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         alert("The number you entered is not a prime number");
//         return false;
//       } else {
//         alert("The number you entered is prime number");
//         return true;
//       }
//     }
//   }
// }
// for (x = 0; x > -1; x++) {
//   check();
// }
//end
// //leap year
// function checkyear() {
//   let userInput = prompt(`Enter The Year:`);
//   let year = userInput;
//   if (year % 4 == 0) {
//     alert("The Year you Entered is a leap year");
//   } else {
//     alert("The Year you Entered is not a leap year");
//   }
// }
// for (let i = 0; i > -1; i++) {
//   checkyear();
// }
//end
//sum
// function checkNumber() {
//   let userInput1 = prompt(`Enter first numbers:`);
//   let userInput2 = prompt(`Enter second numbers:`);
//   let x = parseInt(userInput1) + parseInt(userInput2);
//   if (userInput1 === userInput2) {
//     x = x * 3;
//     console.log(x);
//     console.log("in if");
//   }
//   alert(x);
// }
// while (1) {
//   checkNumber();
// }

//end
//50
// function checkNumber() {
//   let userInput1 = prompt(`Enter first Number:`);
//   let userInput2 = prompt(`Enter second Number:`);
//   let x = parseInt(userInput1) + parseInt(userInput2);
//   if (x == 50) {
//     alert("the input is true");
//   } else if (userInput1 == 50 || userInput2 == 50) {
//     alert("the input is true");
//     console.log("inif");
//   } else {
//     alert("the input is false");
//   }
// }
// while (1) {
//   checkNumber();
// }
//end
//0 to end the prompt
// let array = [];

// while (1) {
//   let userInput = prompt(`Enter input:`);
//   if (userInput != 0) {
//     array.push(userInput);
//   }
//   if (userInput == 0) {
//     break;
//   }
// }
// console.log(array);

//end
//adding data
let userInput1 = prompt(`Enter the amount of students you want to enter:`);
let x = parseInt(userInput1);
let display = [];
for (let i = 0; i < x; i++) {
  let userInput2 = prompt(`Enter the name of each student`);
  let userInput3 = prompt(`Enter the age of each student`);
  let userInput4 = prompt(`Enter the rollno of each student`);
  let studentData = {
    name: userInput2,
    age: userInput3,
    rollno: userInput4,
  };
  display.push(studentData);
}
console.log(display);
//end
