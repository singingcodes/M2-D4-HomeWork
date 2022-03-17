let inputOne = document.getElementById("inputOneId");
let inputTwo = document.getElementById("inputTwoId");
let inputThree = document.getElementById("inputThreeId");
let inputFour = document.getElementById("inputFourId");

const addToTeamOne = function () {
  let inputNode = document.createElement("li");
  let inputValue = inputOne.value;
  let textNode = document.createTextNode(inputValue);
  inputNode.appendChild(textNode);
  let newList = document.getElementById("teamOne").appendChild(inputNode);
  newList.classList.add("list-group-item");
  //
};

const addToTeamTwo = function () {
  let inputNode = document.createElement("li");
  let inputValue = inputTwo.value;
  let textNode = document.createTextNode(inputValue);
  inputNode.appendChild(textNode);
  let newList = document.getElementById("teamTwo").appendChild(inputNode);
  newList.classList.add("list-group-item");
  //
};

const addToTeamThree = function () {
  let inputNode = document.createElement("li");
  let inputValue = inputThree.value;
  let textNode = document.createTextNode(inputValue);
  inputNode.appendChild(textNode);
  let newList = document.getElementById("teamThree").appendChild(inputNode);
  newList.classList.add("list-group-item");
  //
};
const addToTeamFour = function () {
  let inputNode = document.createElement("li");
  let inputValue = inputFour.value;
  let textNode = document.createTextNode(inputValue);
  inputNode.appendChild(textNode);
  let newList = document.getElementById("teamFour").appendChild(inputNode);
  newList.classList.add("list-group-item");
  //
};
