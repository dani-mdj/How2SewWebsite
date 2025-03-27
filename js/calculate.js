const locType = document.querySelector("[name=lessonType]");
const machineRental = document.querySelector("[name=machine]");
const sergerRental = document.querySelector("[name=serger]");
const hours = document.querySelector("[name=hours1]");
const hours2 = document.querySelector("[name=hours2]");
const hours0 = document.querySelector("[name=hours0]");
const cost = document.querySelector("[id=cost]");

function updateForm() {
  if (locType.value === "hours1") {
    document.getElementById("hours2").setAttribute("disabled", true);
    document.getElementById("hours1").removeAttribute("disabled");
    document.getElementById("machine").setAttribute("disabled", true);
    document.getElementById("serger").setAttribute("disabled", true);
    document.getElementById("hours0").setAttribute("disabled", true);
  } else if (locType.value === "hours2") {
    document.getElementById("hours1").setAttribute("disabled", true);
    document.getElementById("hours2").removeAttribute("disabled");
    document.getElementById("serger").removeAttribute("disabled");
    document.getElementById("machine").removeAttribute("disabled");
    document.getElementById("hours0").setAttribute("disabled", true);
  } else {
    document.getElementById("hours1").setAttribute("disabled", true);
    document.getElementById("hours2").setAttribute("disabled", true);
    document.getElementById("hours0").removeAttribute("disabled");
    document.getElementById("serger").removeAttribute("disabled");
    document.getElementById("machine").removeAttribute("disabled");
  }
}

function updateTotal() {
  let price = 0;
  let rentTime = 0;
  if (locType.value === "hours2") {
    rentTime = hours2.value;
    price += rentTime * 30;
  } else if (locType.value === "hours1") {
    rentTime = hours.value;
    price += rentTime * 30;
  } else {
    rentTime = hours0.value;
    price += rentTime * 30;
  }
  if (machineRental.checked) {
    price += machineRental.value * rentTime;
  }
  if (sergerRental.checked) {
    price += sergerRental.value * rentTime;
  }
  cost.innerText = "$" + price;
}

locType.addEventListener("change", updateForm);
hours.addEventListener("change", updateTotal);
hours2.addEventListener("change", updateTotal);
sergerRental.addEventListener("change", updateTotal);
machineRental.addEventListener("change", updateTotal);
locType.addEventListener("change", updateTotal);
hours0.addEventListener("change", updateTotal);
