let amount = document.getElementById("amount");
let guest = document.getElementById("guest");
let service = document.getElementById("quality");
let tipAmount = document.getElementById("show2");
let calbtn = document.getElementById("calculate");

const calculate = () => {
  let tip = ((amount.value * service.value) / guest.value).toFixed(2);
  amount.value = "";
  guest.value = "";

  if (tip === "NaN") {
    tipAmount.innerHTML = "Tip $0 each";
    showTipAmount();
  } else {
    tipAmount.innerHTML = "Tip $" + tip + "each";
    showTipAmount();
  }
};
calbtn.addEventListener("click", calculate);

const showTipAmount = () => {
  tipAmount.classList.add("tip-amount");

  
};
