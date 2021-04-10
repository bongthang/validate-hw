function validate() {
  var mainMenu = document.body.querySelector(".mainmenu");
  var userInput = document.body.querySelector(".userinput");
  var nextMenu = document.body.querySelector(".nextmenu");
  var userName = document.body.querySelector(".username").value;

  if (userName === "coolStudent123") {
    mainMenu.innerHTML = "";
    userInput.innerHTML = "";
    writeStuff(pages[0].content);
    for (i = 0; i < pages.length; i++) {
      new pageMaker(pages[i]);
    }
  } else {
    mainMenu.innerHTML = "Username Incorrect";
  }
}

document.body.querySelector(".validate").addEventListener("click", function () {
  validate();
});
var pages = [
  { title: "Home", content: "Home" },
  {
    title: "About",
    contetnt: "Some More About Content"
  },
  {
    title: "View",
    content: "none"
  }
];
var nextMenu = document.body.querySelector(".nextmenu");
var display = document.body.querySelector(".display");
var nav = document.body.querySelector(".nav");
var makenote = document.body.querySelector(".makenote");
var list = document.body.querySelector(".list");

function pageMaker(pg) {
  this.button = document.createElement("button");
  this.button.addEventListener("click", function () {
    writeStuff(pg.content, pg.title);
  });
  this.button.innerHTML = pg.title;
  nav.appendChild(this.button);
}
function writeStuff(stuff, pg) {
  if (pg!== "View") {
    display.innerHTML = stuff;
  } else {
    writePage();
    submit();
  }
}

function renderList() {
  var listEle = document.body.querySelector(".list");
   listEle.innerHTML = "";
}
function writePage() {
  display.innerHTML = "";
  var classbutn = document.createElement("button");
  classbutn.innerHTML = "Add Note";
  display.appendChild(classbutn);
}

function addNote() {
  makeNote.innerHTML = "";
  var input = document.createElement("input");
  input.placeholder = "add note...";
  display.appendChild(input);
}

function addNumbers() {
  var addnum = document.createElement("input");
  addnum.placeholder = "add importance...";
  display.appendChild(addnum);
}
function submit() {
  addNote();
  addNumbers();
  var text = document.body.querySelector("input").value;
  if (text.length > 0) {
    list.push(text);
   document.body.querySelector(".makenote").innerHTML = "";
  } else if (text.length < 0) {
    document.body.querySelector(".makenote").innerHTML = "Not enough characters";
  } else {
    render(list);
  }
}