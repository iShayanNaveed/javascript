let message = document.getElementById("message-input");
let btn = document.getElementById("btn");
btn.addEventListener("click", messageDisplay);
function messageDisplay() {
  document.getElementById("display").innerHTML = message.value;
  message.value = "";
}
message.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    messageDisplay();
  }
});
