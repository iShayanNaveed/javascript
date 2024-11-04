//nested array

// function sumNestedArray(){
//      const nestedArray = [[1, 2, 3], [4, 5], [6]];
//     //  let merge = nestedArray.flat();
//      let sum = 0
//      for(let i=0;i<nestedArray.length;i++){
//         for(let j = 0;j<nestedArray[i].length;j++){

//             sum += nestedArray[i][j];
//         }

//      }
//      console.log("the sum is:",sum);

// }
// sumNestedArray()

//next

//flat array
// function flatenArray(){

// const nestedStrings = [['hello', 'world'], ['foo', 'bar', ['baz', 'qux']]];
// let result = []
// for(let i = 0;i<nestedStrings.length;i++){
//     for(let j=0;j<nestedStrings[i].length;j++){
//       if(Array.isArray(nestedStrings[i][j])){
//         for(let k=0;k<nestedStrings[i][j].length;k++){

//             result.push(nestedStrings[i][j][k])
//         }
//       }else{
//         result.push(nestedStrings[i][j])
//       }
//     }
// }
// // let merge = nestedStrings.flat(Infinity)
// // console.log(merge);
// console.log(result);

// }
// flatenArray()

//next
//find max
// function findMax() {
//     const numbersArray = [[1, 2, 3], [4, 5], [6, 7, 8]];
//     // let flat = numbersArray.flat()
//     // let max = Math.max(...flat)
//     let max = 0
//     // console.log("Max Number is :",max);
//     for(let i = 0;i<numbersArray.length;i++){
//         for(let j=0;j<numbersArray[i].length;j++){
//              max = Math.max(numbersArray[i][j])

//         }
//     }
//     console.log("Max Number is :",max);
// }
// findMax()

//next
//find repeat
// function generateFrequencyObject(){
//     const stringsArray = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];
//     let result = {};
//       for (let x of stringsArray) {
//         result[x] = result[x] ? result[x] + 1 : 1;
//       }

//       console.log(result);

// }
// generateFrequencyObject()

//next
// function uniqueValues(){
//     const mixedArray = [[1, 2, 3], [2, 3, 4], [3, 4, 5]];
// //     let flat  = mixedArray.flat()
// //     let results = flat.filter((value,index)=>flat.indexOf(value)===index)
// //    console.log(results);
// let results = []
// for(let i = 0;i<mixedArray.length;i++){
//     for(let j =0;j<mixedArray[i].length;j++){
//         let value = mixedArray[i][j]
//          if(!results.includes(value)){
//             results.push(value)
//          }
//     }

// }
// console.log(results);

// }
// uniqueValues()

// const numbers = [
//   5, 12, 8, 21, 34, 55, 3, 9, 16, 42, 27, 33, 14, 19, 23, 44, 51, 6, 11, 18, 29,
//   31, 37, 48, 25, 2, 10, 39, 17, 26,
// ];

// let input = document.getElementById("demo1");

// function test() {
//   if (Math.sign(input.value) === -1) {
//     console.log("negative bvalue");

//     alert(numbers[numbers.length - input.value * -1]);
//   } else if (!Number(input.value)) {
//     alert("Please enter a number ");
//   } else if (input.value > 0) {
//     alert(numbers[input.value]);
//   }
// }

//dsa part2
// function test() {
//   const numbers = [
//     5, 12, 8, 21, 34, 55, 3, 9, 16, 42, 27, 33, 14, 19, 23, 44, 51, 6, 11, 18,
//     29, 31, 37, 48, 25, 2, 10, 39, 17, 26,
//   ];
//   let position = document.getElementById("demo1").value;

//   let value = document.getElementById("demo2").value;
//   // value = parseInt(value);
//   // for (let i = numbers.length - 1; i >= 0; i--) {
//   //   if (i >= position) {
//   //     numbers[i + 1] = numbers[i];
//   //     if (i == position) {
//   //       numbers[i] = value;
//   //     }
//   //   }
//   // }
//   numbers.splice(position,1)
//   console.log(numbers);
// }
// function test() {
//   const numbers = [5, 12, 8, 21, 34, 55, 3, 9, 16];

//   let position = document.getElementById("demo1").value;
//   position = parseInt(position);
//   // for (let i = position; i < numbers.length - 1; i++) {
//   //   // numbers[i] = numbers[i + 1];

//   // }

//   let filteredNumns = numbers.filter((num, index) => index !== position);
//   console.log("filteressssss", filteredNumns);

//   // numbers.length = numbers.length - 1;
//   // alert(numgbers);
// }

//todo dsa3
// function test() {
//   const numbers = [5, 12, 8, 21, 34, 55, 3, 9, 16];
//   let position = document.getElementById("demo1").value;
//   position = parseInt(position);
//   numbers[position] = numbers[numbers.length - 1];
//   numbers.length = numbers.length - 1;

//   console.log(numbers);
// }
//       test()

//?dsa 4

// // function test() {
// //   const numbers = [5, 12, 8, 21, 34, 55, 3, 9, 16];
// //   let position = document.getElementById("demo1").value;
// //   position = parseInt(position);
// //   let index;
// //   // for (let i = 0; i < numbers.length; i++) {
// //   //   if (numbers[i] == position) {
// //   //     index = i;
// //   //   }
// //   // }

// //   // console.log(index);
// //   // console.log("test", numbers);
// //   // numbers.splice(index, 1);
// //   // console.log("test1", numbers);
// //   // numbers.filter((value,index)=>{
// //   //   if(value === position){
// //   //     console.log(index);

// //   //   }

// //   // })
// //   // numbers.reduce((total, num, index, arr) => {
// //   //   // console.log(total, num, index, arr);
// //   //   if (arr.indexOf(position) == index) {
// //   //     console.log(num);
// //   //   }
// //   // });
// //   // numbers.map((value, index, arr) => {
// //   //   if (value === position) {
// //   //     console.log(index);
// //   //   }
// //     // if(arr.indexOf(position)==index){
// //     //   console.log(value,index);

// //     // }
// //   // });
// // //  numbers.find((value,index,arr)=>{

// // //   if(value === position){
// // //     console.log(index,value);

// // //   }
// // //  })

// }
//dsa 4
// const array1 = [3, 8, 12, 5, 9];
// const array2 = [20, 14, 9, 27, 15];
// //  let finalArr = [...array1, ...arr

// let finalArr = array1.map((item, index) => {
//   return [item, array2[index]];
// });
// // let finalArr = Array.from([...array1, ...array2]);

// // Array.prototype.push.apply(finalArr, array1);
// // Array.prototype.push.apply(finalArr, array2);
// // // finalArr.concat(array1, array2);
// // // for (let i = 0; i < array1.length; i++) {
// // //   // finalArr[i] = array1[i];
// // //   finalArr.push(array1[i]);
// // // }
// // // for (let i = 0; i < array2.length; i++) {
// // //   finalArr.push(array2[i]);

// // //   // finalArr[array1.length + i] = array2[i];
// // // }

// console.log("finalArr", finalArr);

//dsa 5
const array1 = [3, 5, 8, 9, 12];
const array2 = [9, 14, 15, 20, 27];
let final = [];

let d1 = 0;
let d2 = 0;
let d3 = 0;
while (d2 < array2.length && d1 < array1.length) {
  if (array2[d2] < array1[d1]) {
    final[d3] = array2[d2];
    d2++;
  } else {
    final[d3] = array1[d1];
    d1++;
  }
  d3++;
}
while (d2 < array2.length) {
  final[d3] = array2[d2];
  d2++;
  d3++;
}
console.log(final);
