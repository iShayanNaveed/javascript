//next

//to find the factorial

// let userInput = parseInt(
//   prompt("Enter a number whose factorial you wan to check")
// );
// const factorial = () => {
//   let result = 1;
//   for (let i = userInput; i > 1; i--) {
//     //userinput=5,4
//     result *= i; //result=5,4,3,2,1
//   }
//   alert(`the factrial is ${result}`);
//   console.log(result);
// };
// factorial();
//end
//next
//for of loop sum
// const sum = () => {
//   let numbers = prompt("Enter a list of numbers as a array like [1,2,3]");
// let input;
// try{

//   input = JSON.parse(numbers);
//   if (!Array.isArray(input)) {
//     alert("Please Enter a valid input");
//   }

//     let result = 0;
//     for (let x of input) {
//       result += x;
//     }
//     alert(`the sum your data you entered is ${result}`);
//     console.log(result);

// }catch{
//   alert("Please enter a array");

// }
// };
// sum();

//end

//next
//count properties
// const count = () => {
//   let object = {
//     name: "M Shayan Naveed",
//     age: 18,
//     country: "Pakistan",
//   };
//   let keys = 0;
//   for (let x in object) {
//     keys++;
//     console.log(x,":",object[x]);

//   }
//   console.log("interations:",keys);
// };

// count();

//next
//even number
// const even = () => {
//   let userChoice = parseInt(
//     prompt("Enter a number you want to see even numbers of")
//   );
//   let result = [];
//   for (let i = 0; i <= userChoice; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//       result.push(i);
//     }
//   }
//   alert(`then even numbers till ${userChoice} are ${result.join("-")}`);
// };
// even();

//next

//table
// const count = () => {

// //   for(let i=1;i<=10;i++){
// //    for(let x=1;x<=10;x++){
// //         console.log(i+"x"+x+"="+i*x)
// //     }
// //     console.log("\n");
// //   }

// // };

// // count();

//next
//string to object
// function count() {
//   let userInput = prompt("Enter a charater string");
//   let result = {};
// //   let array = Object.values(userInput)
//   for (let x of userInput) {
//     // if (result[x] == result[x]) {
//     //   result[x] = result[x] + 1;
//       console.log("test", result[x]);
//     // }
//     //     console.log("test1");

//     //   result[x] = result[x];
//     // }
//     // console.log(result[x]);
//   }

//   console.log(result);
// }
// count();
//next

//odd number

// const check = () => {
//   let userChoice = prompt("Please Enter data sepearted by comma");

//   let results = userChoice.split(",");
//   let ans = [];
//   console.log(results);

//   if (Array.isArray(results)) {
//     for (let x of results) {
//       if (x % 2 != 0) {
//         ans.push(x);
//       }
//     }
//     alert(`the odd numbers in your data are ${ans.join("-")}`);
//   }
// };
// check();

//next

//key-value-pair
// const key = () => {
//   let object = {
//     name: "shayan",
//     age: 18,
//     city: "Jhelum",
//     country: "Pakistan",
//   };
//   let keys = 0;
//   let value  = 0
//   for (let x in object) {
//       keys ++;
//       value ++
//     console.log(x, ":", object[x]);

//   }
// //   console.log("interations :", keys+value);
// };
// key();

//next

// function count() {
//   let userInput = prompt("Enter a string"); 
//   let result = {};
//   for (let x of userInput) {
//     if(result[x] = result[x]){
//         result[x] += 1
//         console.log(result[x]+1);
        
//     }
//     else{
//         result[x] = 1
//     }
// //    result[x] = result[x] ? result[x] +1 : 1
// //    console.log(result[x]);
   
//   }    
//   console.log(result);
   
// }
// count();
