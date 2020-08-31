let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");

  if (
    mySrc ===
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Firefox_Logo%2C_2017.svg/1024px-Firefox_Logo%2C_2017.svg.png"
  ) {
    myImage.setAttribute(
      "src",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png"
    );
  } else {
    myImage.setAttribute(
      "src",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Firefox_Logo%2C_2017.svg/1024px-Firefox_Logo%2C_2017.svg.png"
    );
  }
};

let myButton = document.querySelector("button");
let myHeding = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Plaese enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeding.textContent = "Mozilla is cool, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeding.textContent = "Mozilla is cool, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
