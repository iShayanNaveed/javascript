// var today = new Date();

// var day = today.getDay();

// var daylist = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// console.log("Today is: " + daylist[day] + ".");

// var hour = today.getHours();
// var minute = today.getMinutes();
// var second = today.getSeconds();

// var prepand = hour >= 12 ? " PM " : " AM ";

// hour = hour >= 12 ? hour - 12 : hour;

// if (hour === 0 && prepand === " PM ") {
//   if (minute === 0 && second === 0) {
//     hour = 12;
//     prepand = " Noon";
//   } else {
//     hour = 12;
//     prepand = " PM";
//   }
// }

// if (hour === 0 && prepand === " AM ") {
//   if (minute === 0 && second === 0) {
//     hour = 12;
//     prepand = " Midnight";
//   } else {
//     hour = 12;
//     prepand = " AM";
//   }
// }

// console.log(
//   "Current Time: " + hour + prepand + " : " + minute + " : " + second
// );
// to get date and time

//next
// let date = new Date();
// let dateConversion = date.toLocaleDateString()
// console.log(date,"date");
// console.log(dateConversion,"datecon");

//next
// let userinput = prompt('Enter a Year');
// if(userinput % 4 === 0){
//     console.log("leap year");

// }else{
//     console.log("lop year");

// }

//next
// function alert1(){

//     let userNumber = prompt('Guess a number b/w 1-10');
//     let guessNumber = Math.floor(Math.random() * 5)
//     console.log(guessNumber);

//     if(userNumber == guessNumber){
//         alert("Good job")
//     }else{
//         alert("bad")
//         alert1()
//     }
// }

// alert1()

//next
// let userinput = prompt('Enter First no');
// let userinput1 = prompt('Enter Second no');
// let userChoice = prompt('Please select  1 for multi 2 for div')
// let userinput2 = parseInt(userinput);
// let userinput3 = parseInt(userinput1);
// let userChoice1 = parseInt(userChoice)

// if(userChoice == 1){
//     alert(userinput2 * userinput3)
// }else if(userChoice == "2"){
//     alert(userinput2/userinput3)
// }

//next
// let temp = prompt("Enter temperature")
// let tempcel = parseInt(temp)
// let celtofar = tempcel*9/5+32;
// alert(celtofar)

//next
// alert(document.URL)

//next
// function showReverse(){
//      let userChoice = prompt("Enter a 4 digit number")
//     //  let userChoice1 = parseInt(userChoice)
//     //  console.log(userChoice,"before");

//    let  userChoice1 = userChoice.split('').reverse().join('')
//     console.log(userChoice1,"after");
//     alert(userChoice1)
//  }
//  showReverse()

//next
// function check(){
//     let userChoice = prompt('Enter a string data')
//     let  vowel_list = 'aeiouAEIOU';
//     let count = 0
//     for (x= 0;x< userChoice.length;x++){

//         if(vowel_list.indexOf(userChoice[x]) !== -1 ){

//             count +=1
//         }
//         //    return count
//     }
//     alert(`count: ${count}`)
// }
// check()

//next

// for(let x=0;x<=10;x++){
//     console.log(x);

// }

//next

// for(let x=1; x<=100; x += 2){

//     console.log(x);

// }

// for(let n=0;n<=10;n++){
// for(let i=0;i<=10;i++){
//         let result = n*i;

//         console.log(n +"x" + i + "="+ result);
//     }

// }
// for(let n=0;n<=10;n++){
//     console.log(n+n);

// }
// for (x=10;x<=30;x+=2){
//     console.log(x+x);

// }
// let temp = prompt
//next
//array sort
// let nums1 = [1,2,3,0,0,0];
// let m =3;
// let n=3;
// let nums2 = [2,5,6]
// nums1 = nums1.splice(0,3);
// console.log(nums1.concat(nums2).sort());

// let num1 = [0];
// let num2 = [1];
// let m=0;
// let n=1;
// num1 = num1.splice(1,1)
// console.log(num1.concat(num2));

// let val = 2;
// let nums = [0,1,2,2,3,0,4,2];

// var removeElement = function () {
//   let number = nums.filter(function (num) {
//     return num !== val;
//   });
//   console.log(number);
// };
// removeElement();
//next
// let nums = [0,0,1,1,1,2,2,3,3,4];
// var removeDuplicates = function() {
//   let number = nums.filter((num,index) =>{
//       return nums.indexOf(num) === index
//   })
//   console.log(number)

// };
// removeDuplicates();

//next
// let nums = [2, 2, 1, 1, 1, 2, 2];
// for (x of nums) {
//  let repeat =  jko

// }
// nums.findIndex(multiple);
// function multiple() {}
//next
// function rotateArray(arr,rotateby){
//   const num = arr.length;
//   rotateby %= num;
//   return arr.slice(rotateby).concat(arr.slice(0, rotateby));

// }
// const nums = [1,2,3,4,5,6,7]
// const rotate = rotateArray(nums,6);
// console.log(rotate);

//next
// let prices = [7,1,5,3,6,4];
// function price(){

// }
// let s = "III"
// let roman = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
// var romanToInt = function() {
//     let ans = 0
//     for(let i = s.length-1 ;~i;i--){
//         let num = roman[s.charAt(i)]
//         if(3 * num < ans) ans -= num
//         else ans += num
//     }
//     return ans
// };

// romanToInt()

// var intToRoman = function(num) {
//   const M = ['', 'M', 'MM', 'MMM'];
//    const C = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
//    const X = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
//    const I = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

//    return (
//        M[Math.floor(num / 1000)] +
//        C[Math.floor((num % 1000) / 100)] +
//        X[Math.floor((num % 100) / 10)] +
//        I[num % 10]
//    );

// };

//next
// let nums = [1,2,2,3,3,3];
// let count =1
// for(i = 0;i<nums.length;i++){
//     if(nums[i] === nums[i - 1]){
//        count++
//     }else{
//         count = 1
//     }

//     if(count >=3 ){
//         nums = nums.filter((num)=>num != nums[i])
//         console.log(nums);

//         return nums
//     }
// }

//next
// let nums = [2,2,1,1,1,2,2];
// let count =1;
// let maxCount =1
// for(i=0;i<nums.length;i++){
//     if(nums[i] === nums[i-1]){
//         count ++;
//         maxCount++;
//     }else{
//         count = 1;
//         maxCount =1;
//     }

//     if (maxCount > count){
//         console.log("1122",count);
//        return maxCount = count;

//     }else{
//         console.log("test",maxCount);
//         return maxCount
//     }

// }

//next
// let nums = [1,2,3,4,5,6,7];
// let k =3
// // var rotate = function() {

// //     let number = nums.slice(k+1) ;
// //     nums = number.concat(nums)
// //     console.log(nums)

// //     };
// //     rotate()\
// let a = nums.splice(4,k+1)
// // nums = [...a,...nums]
// // nums = a.concat(...nums)
// console.log(a.concat(nums))

//next
// let  nums = [2,3,1,1,4];
// let jump = function() {
//     let goal = nums.length - 1;

// for(let i =goal;i>= 0;i--){
//     if(i + nums[i] >= goal){
//         goal = i
//     }
// }
// console.log("test",goal)
// return goal == 0
// };
// jump()

// let product = {
//     id: 1,
//     name: 'Smartphone',
//     price: 499.99,
//     details: {
//         brand: 'TechCo',
//         model: 'SmartX1',
//         specifications: {
//             display: '6.2 inches',
//             camera: '12 MP',
//             storage: '64 GB'
//         }
//     }
// };

// // Shallow copy using the spread operator
// let copiedProduct = { ...product };

// copiedProduct.name = 'Smartwatch'; // Disconnected

// // Changes in the nested object are connected
// copiedProduct.details.model = 'WatchPro';
// copiedProduct.details.specifications.display = '1.3 inches';

// console.log("Shallow Copy - Copied Product:", copiedProduct);
// console.log("Shallow Copy - Original Product:", product);

// // Deep Copy Example
// let productDeep = {
//     id: 1,
//     name: 'Smartphone',
//     price: 499.99,
//     details: {
//         brand: 'TechCo',
//         model: 'SmartX1',
//         specifications: {
//             display: '6.2 inches',
//             camera: '12 MP',
//             storage: '64 GB'
//         }
//     }
// };

// // Deep copy using JSON methods
// let copiedProductDeep = JSON.parse(JSON.stringify(productDeep));

// copiedProductDeep.name = 'Laptop'; // Disconnected

// // Changes in the nested object are also disconnected
// copiedProductDeep.details.model = 'LaptopPro';
// copiedProductDeep.details.specifications.display = '15.6 inches';

// console.log("Deep Copy - Copied Product:", copiedProductDeep);
// console.log("Deep Copy - Original Product:", productDeep);
// -----------------------------------------------------------------------------------------------------










//to string
// const string = ()=>{
// let arr = ["Banana", "Orange", "Apple", "Mango"];
// let str = arr.toString()
// console.log(str);

// }
// string()

//next
//sort
// const sort = () =>{
//   let arr = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
//   let str = arr.sort((a,b)=> a-b);
//   console.log(str);

// }
// sort()

//next
//frequent
// const frequent = () =>{
// let array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// let most  = {}
// let count = 0
// let mostfre = null
// for(let x =0;x<array.length ;x++){
//   let item = array[x]
//   if(most[item]){
//     most[item]++
//     // console.log("test");

//   }else{
//     most[item] = 1
//     // console.log("test123");

//   }

//   if(most[item] > count){
//     count = most[item]
//     mostfre = item
//   }

// }
// console.log("the most frequent item is ",mostfre,"it occurs ",count,"times");

// }
// frequent()
//next
//swap
// function swap() {
//   let str = prompt("Enter data");
//   let newstr = "";

//     for(let i = 0; i<str.length; i++){
//         if(str[i] === str[i].toLowerCase()){
//             newstr += str[i].toUpperCase();
//         }else {
//             newstr += str[i].toLowerCase();
//         }
//     }
//     console.log(newstr);
//     // return str;
// }
// swap();

//swap

//next
// const product = () => {
//   let userinput = prompt("Enter array");
//   let sum = 0;
//   let multiple = 1;
//   try {
//     userinput = JSON.parse(userinput);
//     for (let i = 0; i < userinput.length; i++) {
//       sum = userinput[i] + sum;
//       multiple = userinput[i] * multiple;
//     }
//     alert(`the sum is ${sum}and the product is ${multiple}`);
//   } catch {
//     alert("Please enter a valid data");
//   }
// };
// product();

//next
//sum of two
// function sum(){
//   let arr1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
//   let arr2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
//   let sum1 = 0
//   for(let x of arr1){
//     console.log(x - 1);

//     sum1 = arr1[x] + sum1
//   }
//   // console.log(sum1);

// }
// sum()

