let txt = document.getElementById("text-box");
let dropDown = document.getElementById("drop-down");
let addbtn = document.getElementById("additem");
let displayContainer = document.getElementById("display-container");
let uptade = document.getElementById("uptade");
let cancel = document.getElementById("cancel");
let items = document.getElementById("list-items");
let editBtn = document.getElementById("editbtn");
let delBtn = document.getElementById("delbtn");
// let displaybtn = document.getElementById("display-btn");
let boxs = document.getElementById("box-1");
// displaybtn.style.display = "none";
let display = [];

function mapFunction() {
  displayContainer.innerText = "";
  display.map(function (value, index) {
    let btnDiv = document.createElement("div");
    btnDiv.className = " d-flex justify-content-between  mt-3";
    displayContainer.appendChild(btnDiv);
    let div = document.createElement("div");
    div.className = "  mt-3";
    btnDiv.appendChild(div);
    let para1 = document.createElement("li");
    para1.innerText = `${value.day} : ${value.work}`;
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

addbtn.addEventListener("click", addItem);
function addItem() {
  txt = document.getElementById("text-box");
  dropDown = document.getElementById("drop-down");
  display.push({ day: dropDown.value, work: txt.value });
  txt.value = "";
  dropDown.value = "";
  mapFunction();
}

function editItem(value, index) {
  txt.focus();
  txt.value = value.work;
  dropDown.value = value.day;
  uptade.style.display = "block";
  cancel.style.display = "block";
  addbtn.style.display = "none";
  x = index;
}
uptade.addEventListener("click", uptadeItem);
function uptadeItem() {
  display = display.map((items, i) =>
    i == x ? { day: dropDown.value, work: txt.value } : items
  );
  txt = document.getElementById("text-box");
  dropDown = document.getElementById("list");
  uptade.style.display = "none";
  cancel.style.display = "none";
  addbtn.style.display = "block ";
  console.log(display);
  mapFunction();
}

function removeItem(para1, button, button1) {
  para1.remove();
  button.remove();
  button1.remove();
  display.pop();
}
cancel.addEventListener("click", cancelItem);
function cancelItem() {
  txt.value = "";
  dropDown.value = "";
  uptade.style.display = "none";
  cancel.style.display = "none";
  addbtn.style.display = "block ";
}
