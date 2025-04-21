
const actionList = ['rompio', 'robo', 'se comio'];
const whatList = ['las plantas', 'la comida del perro', 'el sofa'];
const whenList = ['hace un momento', 'anoche', 'el año pasado'];
const whoList = ['Mi tortuga', 'El vecino', 'Un fantasma'];


const _getRandomPosition = (maxNumber)=>{
  return (Math.floor(Math.random() * maxNumber));
};

const _getRandomListItem = (list)=>{
  const position=  _getRandomPosition(list.length);
  return list[position];
};

const _actionRandom = ()=> _getRandomListItem(actionList);
const _whatRandom = ()=> _getRandomListItem(whatList);
const _whenRandom = ()=> _getRandomListItem(whenList);
const _whoRandom = ()=> _getRandomListItem(whoList);

const excuseGenerator = () =>{
  const action= _actionRandom();
  const what= _whatRandom();
  const when= _whenRandom();
  const who= _whoRandom();
  const excuse = `${who} ${action} ${what} ${when}`;
  console.log(excuse);
  document.querySelector("#excuse").innerHTML = excuse;
  
};
const button = document.createElement("button");
button.textContent = "Generar Excusa";
button.addEventListener("click", excuseGenerator);
button.style.backgroundColor = "green";
button.style.borderRadius = "5px";
button.style.color = "white";       
button.style.padding = "10px 20px";
document.body.appendChild(button);


