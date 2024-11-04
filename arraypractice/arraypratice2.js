// next
// name hoobies
// const namehoobies = () => {
//   const users = [
//     { id: 1, name: "Alice", hobbies: ["reading", "hiking"] },
//     { id: 2, name: "Bob", hobbies: ["gaming", "cooking"] },
//     { id: 3, name: "Charlie", hobbies: ["cycling", "photography"] },
//   ];
//   for (let x = 0; x < users.length; x++) {
//     console.log(users[x].name, ":", users[x].hobbies.toString());
//   }
// };
// namehoobies();

//next
//sum
// const sum = () => {
//     const matrix = [
//         [1, 2, 3,5],
//         [4, 5, 6],
//         [7, 8, 9]
//     ];
  
//     let totalSum = 0;
    
//     for (let i = 0; i < matrix.length; i++) {//1
//         // console.log(matrix[i]);
//         for (let j = 0; j < matrix[i].length; j++) {//
//             // console.log(matrix[i].length);
//             totalSum += matrix[i][j];//
//             console.log("test",matrix[i][j]);
            
//         }
//     }
    
//     console.log("The sum is:", totalSum);
// }

// sum();
//next
//merge and sum
// const objectA = { a: 1, b: 2, c: 3 };
// const objectB = { b: 3, c: 4, d: 5 };

// let merge = { ...objectA };
// for (let x in objectB) {
    
    
//   if (merge.hasOwnProperty(x)) {
//     merge[x] += objectB[x];
//   } else {
//     merge[x] = objectB[x];
//   }
// }

// console.log(merge);
//next
//count properties
// const count = () =>{
//     const user = {
//         name: 'Alice',
//         age: 25,
//         country: 'USA',
//         hobbies: ['reading', 'hiking'],
//       };
//       let count = 0
//       let length = Object.keys(user).length - 1
//       for(let x in user){
//         count++
//         console.log(x,":",user[x])
//       }
//       console.log("keys excluding hobbies:",length);
      
// }
// count()
//next
//avg sale

// const avgsale = () =>{
//     const salesData = {
//         Q1: 1500,
//         Q2: 2300,
//         Q3: 2200,
//         Q4: 3000,
//       };
//       let array  = Object.values(salesData)
//       let sum = 0;
//       let avg = array.length
//       // console.log(array);
//       for(let x of array){
//         sum = x + sum
//         // console.log(avg);
        
//       }
//       avg = sum/avg
//       console.log("the sum is:",sum,"and the avg is:",avg);
      
      
// }
// avgsale()

//next
//price
// const price = () =>{
//   const products = [
//     { id: 1, name: 'Laptop', price: 999 },
//     { id: 2, name: 'Phone', price: 699 },
//     { id: 3, name: 'Tablet', price: 499 },
//   ];
//   let productAccPrice = []

//   for(let i=0;i<products.length;i++){
    
//    if(products[i].price>500){
//     // delete products[i].id
//       productAccPrice.push(products[i]) 
//       console.log("name:",productAccPrice[i].name,", price:",productAccPrice[i].price);
//     }
//   }
  
  
  
// }
// price()

//next
//depar
// const checkDepartment = () =>{
//   const departments = {
//     HR: ['Alice', 'Bob'],
//     IT: ['Charlie', 'Dave'],
//     Sales: ['Eve', 'Frank'],
//   };
//   for(let x in departments){
//     // console.log(x);
//     // console.log(departments);
//     console.log(x,":",departments[x].join(","));
    
    
    
//   }
// }
// checkDepartment()