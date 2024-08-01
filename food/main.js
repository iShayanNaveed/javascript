let txt = document.getElementById("text-box");
let dropdown = document.getElementById("drop-down");
let add = document.getElementById("add-btn");
let uptade = document.getElementById("uptade-btn");
let cancel = document.getElementById("cancel-btn");
uptade.style.display = "none";
cancel.style.display = "none";
let displayContainer = document.getElementById("display-container");
let index = "";
let display = [];
function mapFunction() {
  displayContainer.innerHTML = "";
  display.map(function (value, index) {
    let box = document.createElement("div");
    box.className = "d-flex justify-content-between  mt-3";
    displayContainer.appendChild(box);
    let box1 = document.createElement("div");
    box1.className = "mt-3";
    box.appendChild(box1);
    let listItem = document.createElement("li");
    listItem.innerText = `${value.day} : ${value.food}`;
    box1.appendChild(listItem);
    let box2 = document.createElement("div");
    box2.className = "mt-3";
    box.appendChild(box2);
    let editbtn = document.createElement("button");
    editbtn.className = "btn btn-success py-0";
    editbtn.textContent = "Edit";
    box2.appendChild(editbtn);
    let delbtn = document.createElement("button");
    delbtn.className = "btn btn-danger py-0 ms-2";
    delbtn.textContent = "Delete";
    box2.appendChild(delbtn);
    editbtn.onclick = () => editItem(value, index);
    delbtn.onclick = () => removeItem(box1, box2, listItem, editbtn, delbtn);
  });
}

// add items
add.addEventListener("click", additems);
function additems() {
  // if ((txt.value = "" || dropdown.value == "select")) {
  //   alert("please fill the following fields");
  // } else {
  txt = document.getElementById("text-box");
  dropdown = document.getElementById("drop-down");
  display.push({ day: dropdown.value, food: txt.value, id: new Date() });
  txt.value = "";
  dropdown.value = "select";
  mapFunction();
  console.log(display);
}
//edit function
function editItem(value, index) {
  txt.value = value.food;
  dropdown.value = value.day;
  uptade.style.display = "block";
  cancel.style.display = "block";
  add.style.display = "none";
  x = index;
}
//uptade function
uptade.addEventListener("click", uptadeitems);
function uptadeitems() {
  display = display.map((items, i) =>
    i == x ? { day: dropdown.value, food: txt.value } : items
  );
  txt = document.getElementById("text-box");
  dropdown = document.getElementById("drop-down");
  txt.value = "";
  dropdown.value = "select";
  uptade.style.display = "none";
  cancel.style.display = "none";
  add.style.display = "block ";
  console.log(display);
  mapFunction();
}
// cancel function
cancel.addEventListener("click", cancelitem);
function cancelitem() {
  txt.value = "";
  dropdown.value = "select";
  uptade.style.display = "none";
  cancel.style.display = "none";
  add.style.display = "block ";
}
// delete function
function removeItem(listItem, editbtn, delbtn) {
  listItem.remove();
  editbtn.remove();
  delbtn.remove();
  display.pop();
}
