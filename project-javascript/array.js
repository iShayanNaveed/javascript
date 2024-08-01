// const product = [
//   { name: "bike", price: 100 },
//   { name: "bat", price: 50 },
//   { name: "ball", price: 20 },
//   { name: "glove", price: 150 },
//   { name: "bag", price: 200 },
// ];

// let total = product.reduce((total, product) => {
//   return product.price + total;
// }, 10);
// console.log(total);
// let total = product.every((product) => {
//   return product.price <= 0;
// });
// let some= product.forEach((product) => {
//   console.log(product.name);
// });
//  let findproduct = product.find((product) => {
//   return product.name === "bag";
// });
// console.log(findproduct);

// let findproduct = product.filter((product) => {
//   return product.price <= 100;
// });
// console.log(filterproducts);
//to change colors

// let index = 0;

// let change = document.getElementById("change");
// change.addEventListener("click", changeColors);
// function changeColors() {
//   let mixcolor = ["red", "green", "blue", "purple", "orange", "black"];
//   document.getElementsByTagName("body")[0].style.background = mixcolor[index++];
//   if (index > mixcolor.length - 1) {
//     index = 0;
//   }
// }

//to generate quote
let btn = document.getElementById("quote-btn");
let click = document.getElementById("Click");
let display = document.getElementById("quote-display");
btn.addEventListener("click", addQuote);
function addQuote() {
  click.style.display = "none";
  display.style.display = "none";
  let quotes = {
    "― Jules Renard, The Journal of Jules Renard":
      "“The truly free man is the one who can turn down an invitation to dinner without giving an excuse.”",
    "― Pierce Brown, Red Rising":
      "“Man cannot be freed by the same injustice that enslaved it.”",
    "― Jenny Valentine, Broken Soup":
      "“Even when you’d lost everything you thought there was to lose, somebody came along and gave you something for free.”",
    "― Nenia Campbell, Crowned by Fire":
      "“You want to be free. You also want to be mine. You can't be both.”",
  };
  let authors = Object.keys(quotes);
  let author = authors[Math.floor(Math.random() * authors.length)];
  let quote = quotes[author];
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("arthur").innerHTML = author;
}
