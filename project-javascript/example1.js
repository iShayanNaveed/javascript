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
function check() {
  let num = prompt(`Enter a number:`);
  if (num == 1) {
    alert("The number you entered is prime number");
  }
  if (num == 2) {
    alert("The number you entered is prime number");
  }
  if (num < 1) {
    alert("Please Enter a Valid Input:");
    return false;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        alert("The number you entered is not a prime number");
        return false;
      } else {
        alert("The number you entered is prime number");
        return true;
      }
    }
  }
}
for (x = 0; x > -1; x++) {
  check();
}
//end
// //leap year
// let userInput = prompt(`Enter The Year:`)
