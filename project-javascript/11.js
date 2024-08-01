let newCard = document.getElementById("add-card");
let closeCard = document.getElementById("remove-card");
let questions = document.getElementById("question");
let answers = document.getElementById("answers");
let savebtn = document.getElementById("save");
let closebtn = document.getElementById("close");
let instructors = document.getElementById("instructors");
let uptadebtn = document.getElementById("uptade");
let cancelbtn = document.getElementById("cancel");
uptadebtn.style.display = "none";
cancelbtn.style.display = "none";
let displayContaniner = document.getElementsByClassName("flashCards")[0];
let createBox = document.getElementsByClassName("create-box")[0];
let display = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
let activeid = "";
display.forEach(divMaker);
function divMaker(text) {
  displayContaniner.value = "";
  let div = document.createElement("div");
  let div1 = document.createElement("div");
  let h2_questions = document.createElement("h2");
  let h2_answers = document.createElement("h2");
  let h2_instructors = document.createElement("h2");
  let editbtn = document.createElement("button");
  let delbtn = document.createElement("button");
  div.className = "flashcard ";
  editbtn.innerHTML = " Edit";
  delbtn.innerHTML = " Delete";
  delbtn.setAttribute("style", "margin-left:10px");
  h2_instructors.innerHTML = text.our_instructors;
  h2_instructors.setAttribute("style", "text-align:center;");
  h2_questions.setAttribute("style", "border-top:1px solid red;padding:10px");
  h2_questions.innerHTML = text.my_questions;
  h2_answers.setAttribute("style", "text-align:center;display:none; color:red");
  h2_answers.innerHTML = text.my_answers;
  div.appendChild(h2_questions);
  div.appendChild(h2_answers);
  div.appendChild(h2_instructors);
  div1.appendChild(editbtn);
  div1.appendChild(delbtn);
  div.appendChild(div1);
  div.addEventListener("click", function () {
    if (h2_answers.style.display === "none") {
      h2_answers.style.display = "block";
    } else {
      h2_answers.style.display = "none";
    }
  });
  displayContaniner.appendChild(div);
  editbtn.onclick = () => editItems(text);
  delbtn.onclick = () => removeitems(div);
  uptadebtn.onclick = () =>
    uptadeItem(h2_answers, h2_instructors, h2_questions);
  // uptadebtn.addEventListener("click", uptadeItem);
}
savebtn.addEventListener("click", () => addFlashCard());
function addFlashCard() {
  if (questions.value == "" || answers.value == "" || instructors.value == "") {
    alert("Please fill the following fields");
  } else {
    let id = Math.random().toString(16).slice(2);
    let flash_card_info = {
      id,
      my_questions: questions.value,
      my_answers: answers.value,
      our_instructors: instructors.value,
    };
    display.push(flash_card_info);
    localStorage.setItem("items", JSON.stringify(display));
    divMaker(display[display.length - 1]);
    questions.value = "";
    answers.value = "";
    instructors.value = "";
  }
  console.log(instructors.value);
  console.log(display);
  //   display.forEach(divMaker);
}

closeCard.addEventListener("click", removeCards);
function removeCards() {
  localStorage.clear();
  displayContaniner.innerHTML = "";
  display = [];
}
newCard.addEventListener("click", showCreateBox);
function showCreateBox() {
  createBox.style.display = "block";
}
closebtn.addEventListener("click", hideCreateBox);
function hideCreateBox() {
  createBox.style.display = "none";
}

function removeitems(a) {
  // localocalStorage.setItem("items", JSON.stringify(display));
  // localStorage.clear();
  // let y = display.map((z) => {
  a.remove();
  display.pop();
  localStorage.clear();
  localStorage.setItem("items", JSON.stringify(display));

  // });
}

function editItems(text) {
  activeid = text.id;
  questions.value = text.my_questions;
  answers.value = text.my_answers;
  instructors.value = text.our_instructors;
  savebtn.style.display = "none";
  closebtn.style.display = "none";
  uptadebtn.style.display = "inline-block";
  cancelbtn.style.display = "inline-block";
  console.log(activeid);
}

cancelbtn.addEventListener("click", backtoplace);
function backtoplace() {
  questions.value = "";
  answers.value = " ";
  instructors.value = "";
  savebtn.style.display = "inline-block";
  closebtn.style.display = "inline-block";
  uptadebtn.style.display = "none";
  cancelbtn.style.display = "none";
}

function uptadeItem(a, b, c) {
  let x = display.map((item) => {
    if (item.id === activeid) {
      console.log("in if");
      return {
        ...item,
        my_questions: questions.value,
        my_answers: answers.value,
        our_instructors: instructors.value,
      };
    }
    return item;
  });
  display = x;
  console.log(display);
  displayContaniner.innerHTML = "";
  display.forEach(divMaker);
  console.log(divMaker);
  savebtn.style.display = "inline-block";
  closebtn.style.display = "inline-block";
  uptadebtn.style.display = "none";
  cancelbtn.style.display = "none";
  localStorage.setItem("items", JSON.stringify(display));
}
