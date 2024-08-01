let userInput = document.getElementById("user-inputs");
let sumbitbtn = document.getElementById("sumbit");
let todoContainer = document.getElementById("todo-items");
let update = document.getElementById("uptade");
let cancel = document.getElementById("cancel");

let delALL = document.getElementById("delall");
let activeid = "";

let display = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
function mapFunction(arr) {
  todoContainer.innerHTML = "";
  arr.map(function (value) {
    let h2_addData = document.createElement("h2");
    h2_addData.innerText = `${value.task}`;
    h2_addData.setAttribute("style", "margin-top:10px;");
    let editbtn = document.createElement("button");
    editbtn.innerHTML = `<i class="fa-solid fa-pencil"></i>`;
    let delBtn = document.createElement("button");
    delBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    let div = document.createElement("div");
    let div1 = document.createElement("div");
    div1.className = "items";
    div.appendChild(h2_addData);
    div1.appendChild(editbtn);
    div1.appendChild(delBtn);
    div.appendChild(div1);
    let id = Math.random().toString(16).slice(2);
    div.className = "item";

    todoContainer.appendChild(div);
    // id = display.length;
    // todoContainer.appendChild(div1);
    editbtn.onclick = () => editItems(value, id);
    delBtn.onclick = () => delitems(div);
  });
}
mapFunction(display);
sumbitbtn.addEventListener("click", additems);
function additems() {
  let id = Math.random().toString(16).slice(2);
  // id = activeid;
  userInput = document.getElementById("user-inputs");
  sumbitbtn = document.getElementById("sumbit");
  display.push({ task: userInput.value, id });
  todoContainer.innerHTML = "";
  mapFunction(display);

  userInput.value = "";
  localStorage.setItem("items", JSON.stringify(display));
}
delALL.addEventListener("click", delALLItems);
function delALLItems() {
  localStorage.clear();
  todoContainer.innerHTML = "";
  display = [];
}

function delitems(a) {
  display.pop();
  a.remove();
}
function editItems(value, id) {
  activeid = value.id;
  // let toSearch = activeid;

  userInput.value = value.task;
  update.style.display = "inline-block";
  cancel.style.display = "inline-block";
  sumbitbtn.style.display = "none";
  delALL.style.display = "none";
}
uptade.addEventListener("click", () => uptadeItem());

function uptadeItem() {
  const a = display.map((item) => {
    if (item.id === activeid) {
      // console.log("in if", { ...item, task: userInput.value });
      return { ...item, task: userInput.value };
    }
    return item;
  });
  display = a;
  mapFunction(display);
  userInput.value = "";
  sumbitbtn.style.display = "inline-block";
  delALL.style.display = "inline-block";
  update.style.display = "none";
  cancel.style.display = "none";
  // userInput.value = "";
  localStorage.setItem("items", JSON.stringify(display));
}
cancel.addEventListener("click", cancelItem);
function cancelItem() {
  userInput.value = "";
  sumbitbtn.style.display = "inline-block";
  delALL.style.display = "inline-block";
  update.style.display = "none";
  cancel.style.display = "none";
}
