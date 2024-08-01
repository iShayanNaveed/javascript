// let addItem = document.getElementById("additem");
let index = "";
let txt = document.getElementById("text-box");
let dropDown = document.getElementById("drop-down");
let btn = document.getElementById("additem");
let displayContainer = document.getElementById("display-container");
let uptadebtn = document.getElementById("uptade");
let cancelbtn = document.getElementById("cancel");
uptade.style.display = "none";
cancel.style.display = "none";
let display = [];

function mapFunction() {
  displayContainer.innerHTML = "";
  display.map(function (value, index) {
    let btnDiv = document.createElement("div");
    btnDiv.className = " d-flex justify-content-between  mt-3";
    displayContainer.appendChild(btnDiv);
    let div = document.createElement("div");
    div.className = "  mt-3";
    btnDiv.appendChild(div);
    let para1 = document.createElement("li");
    para1.className = "text-white";
    para1.innerText = `${value.day} : ${value.food}`;
    div.appendChild(para1);
    let div1 = document.createElement("div1");
    div1.className = " mt-3";
    btnDiv.appendChild(div1);
    let button1 = document.createElement("button");
    button1.textContent = "Edit";
    button1.className = "btn btn-success  edit px-2 py-0 ms-1";
    div1.appendChild(button1);
    let button = document.createElement("button");
    button.textContent = "Delete";
    button.className = "btn btn-danger  edit px-2 py-0 ms-1";
    div1.appendChild(button);
    button1.onclick = () => editItem(value, index);
    button.onclick = () => removeItem(para1, button1, button);
  });
}

//add function
btn.addEventListener("click", addItem);
function addItem() {
  txt = document.getElementById("text-box");
  dropDown = document.getElementById("drop-down");
  display.push({ day: dropDown.value, food: txt.value });
  txt.value = "";
  dropDown.value = "";
  mapFunction();
}

//edit function
function editItem(value, index) {
  txt = document.getElementById("text-box");
  dropDown = document.getElementById("drop-down");
  txt.focus();
  btn.style.display = "none ";
  txt.value = value.food;
  dropDown.value = value.day;
  uptade.style.display = "block";
  cancel.style.display = "block";
  index = index;
  //   x = value;
}
//remove function
function removeItem(para1, button1, button) {
  para1.remove();
  button1.remove();
  button.remove();
  display.pop();
}
//cancel function
cancel.addEventListener("click", cancelItem);
function cancelItem() {
  txt.value = "";
  dropDown.value = "";
  uptade.style.display = "none";
  cancel.style.display = "none";
  btn.style.display = "block ";
}
// uptade function
uptade.addEventListener("click", uptadeItem);
function uptadeItem() {
  display = display.map((items, i) =>
    i == index ? { day: dropDown.value, food: txt.value } : items
  );
  console.log(txt.value);
  txt = document.getElementById("text-box");
  dropDown = document.getElementById("list");
  uptade.style.display = "none";
  cancel.style.display = "none";
  btn.style.display = "block ";
  console.log(display);
  mapFunction();
}
// txt.value = "";
