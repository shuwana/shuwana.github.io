var add = document.getElementById("add-btn");

var input = document.getElementById("userInput");

//Add checked class
var ul = document.querySelector("ul");
ul.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

function isInvalid() {
  var invalid = document.getElementById("invalid");
  var input = document.getElementById("userInput");

  invalid.style.display = "block";
  input.classList.add("is-invalid");
}

function removeInvalid() {
  var invalid = document.getElementById("invalid");
  var input = document.getElementById("userInput");

  invalid.style.display = "none";
  input.classList.remove("is-invalid");
}

function createNewTask() {
  if (input.value === "") {
    isInvalid();
  } else {
    removeInvalid();
    var task = document.createTextNode(input.value);

    var due = document.getElementById("duedate");
    var dueDisplay = document.createElement("span");
    dueDisplay.classList.add("badge");

    dueDisplay.classList.add("rounded-pill");
    dueDisplay.append("by ", due.value);

    var li = document.createElement("li");
    li.classList.add("list-group-item");
    li.prepend(task, " ", dueDisplay);
    ul.prepend(li);
    input.value = ""; //Resets input field

    var trashButton = document.createElement("button");
    trashButton.innerHTML = "x";
    trashButton.classList.add("trash-btn");
    li.appendChild(trashButton);

    var close = document.getElementsByClassName("trash-btn");
    for (var i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
      };
    }
  }
}