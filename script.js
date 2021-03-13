var chrs = [
  { name: "Optimus Prime", class: "leader", afl: "autobot", vehicle: "truck" },
  { name: "Megatron", class: "leader", afl: "decepticon", vehicle: "tank" },
  { name: "Bumblebee", class: "scout", afl: "autobot", vehicle: "car" },
  { name: "Starscream", class: "scout", afl: "decepticon", vehicle: "plane" },
  { name: "Ironhide", class: "soldier", afl: "autobot", vehicle: "truck" },
  { name: "Brawl", class: "soldier", afl: "decepticon", vehicle: "tank" }
];

function transformerMaker(obj) {
  var tranEle = document.createElement("div");
  tranEle.classList.add("character");

  var nameEle = document.createElement("div");
  nameEle.innerHTML = "Name: " + obj.name;

  var classEle = document.createElement("div");
  var uppercaseClass = obj.class.toUpperCase();
  classEle.innerHTML = "Class: " + uppercaseClass;

  var vehicleEle = document.createElement("div");
  vehicleEle.innerHTML = "Vehicle: " + obj.vehicle;

  var autoImg = document.createElement("img");
  autoImg.src =
    "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";

  var decImg = document.createElement("img");
  decImg.src =
    "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";

  if (obj.vehicle === "truck") {
    vehicleEle.style.color = "blue";
  } else if (obj.vehicle === "tank") {
    vehicleEle.style.color = "green";
  } else if (obj.vehicle === "car") {
    vehicleEle.style.color = "gold";
  } else {
    vehicleEle.style.color = "white";
  }

  if (obj.afl === "autobot") {
    tranEle.classList.add("autobot");
    tranEle.appendChild(autoImg);
  } else {
    tranEle.classList.add("decepticon");
    tranEle.appendChild(decImg);
  }

  tranEle.appendChild(nameEle);
  tranEle.appendChild(classEle);
  tranEle.appendChild(vehicleEle);
  document.body.appendChild(tranEle);
}

for (var i = 0; i < chrs.length; i++) {
  transformerMaker(chrs[i]);
}