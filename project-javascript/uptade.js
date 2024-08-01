let userInput = document.getElementById("userInput");
let updatebtn = document.getElementById("update");
let cancelbtn = document.getElementById("cancel");
let editbtn = document.getElementById("edit");
let listitem = document.getElementsByClassName("item");
const container = document.getElementById("container");
let index = null;
container.addEventListener("click", function (event) {
  if (event.target.classList.contains("edit")) {
    const itemElement = event.target.closest(".item");
    const items = Array.from(container.getElementsByClassName("item"));
    index = items.indexOf(itemElement);
    userInput.value = items[index].querySelector("span").innerText;
    console.log("new val", userInput.value);
    updatebtn.style.display = "block";
    cancelbtn.style.display = "block";
    updatebtn.addEventListener("click", () => {
      let temp = userInput.value;
      uptadeItem(items, temp);
    });
  }
});

cancelbtn.addEventListener("click", cancel);
function cancel() {
  userInput.value = "";
  updatebtn.style.display = "none";
  cancelbtn.style.display = "none";
}

function uptadeItem(a, b) {
  console.log("bbb", b);
  a[index].querySelector("span").innerText = b;
  console.log(`Clicked item index: ${index}`);
  updatebtn.style.display = "none";
  cancelbtn.style.display = "none";
  userInput.value = "";
}

let array = [10, 5, 8, 20, 15];
let arr = [3, 7, 2, 7, 10.1];
function secondbignum() {
  let a = array.values();
  let b = arr.values();
  console.log(a);
  console.log(b);
}
// [10, 5, 8, 20, 15]
// Output: 15
// Input: [3, 7, 2, 7, 10, 10]
// Output: 7
