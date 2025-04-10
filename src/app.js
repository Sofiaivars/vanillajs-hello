
window.onload = function() {
  //write your code here
let who = ['Mi tortuga', 'El vecino', 'Un fantasma'];
let action = ['rompio', 'robo', 'se comio'];
let what = ['las plantas', 'la comida del perro', 'el sofa'];
let when = ['hace un momento', 'anoche', 'el año pasado'];

  let whoRandom = Math.floor(Math.random() * who.length);
  let actionRandom = Math.floor(Math.random() * action.length);
  let whatRandom = Math.floor(Math.random() * what.length);
  let whenRandom = Math.floor(Math.random() * when.length);

  let excuse = who[whoRandom] + " " + action[actionRandom] + " " + what[whatRandom] + " " + when[whenRandom];
  document.querySelector("#excuse").innerHTML = excuse;
     }
  

