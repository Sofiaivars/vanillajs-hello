// import "./bootstrap";
// import "./style.css";


// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let first = "My";
  let who = ["hamster", "mother", "horse", "duck"];
  let action = ["crushed", "broke", "ate", "canceled"];
  let what = ["my food", "my phone", "the window", "my t-shirt"];
  let when = ["at the morning", "last night", "when i was outside", "during my shower"]

  let exc1 = Math.floor(Math.random() * who.length);
  let exc2 = Math.floor(Math.random() * action.length);
  let exc3 = Math.floor(Math.random() * what.length);
  let exc4 = Math.floor(Math.random() * when.length);


  // document.querySelector("#excuse").innerHTML = first + " " + who[exc1] + " " + action[exc2] + " " + what[exc3] + " " + when[exc4];

  let excuse = first + " " + who[exc1] + " " + action[exc2] + " " + what[exc3] + " " + when[exc4];
  document.querySelector("#excuse").innerHTML = excuse;

}