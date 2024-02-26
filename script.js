const lamp = document.querySelector(".lamp");
const btnOff = document.querySelector(".btnOff");
const btnOn = document.querySelector(".btnOn");

function lampReset() {
  return lamp.src.indexOf("quebrada") > -1;
}

function lampOn() {
  if (!lampReset()) {
    lamp.src = "./img/ligada.png";
  }
}

function lampOff() {
  if (!lampReset()) {
    lamp.src = "./img/desligada.png";
  }
}

function lampBroken() {
  lamp.src = "./img/quebrada.png";
}

btnOn.addEventListener("click", lampOn); //Liga lampada no botão
btnOff.addEventListener("click", lampOff); //Desliga lampada no botão
lamp.addEventListener("mouseover", lampOn); // Ascende lampada quando passa mouse
lamp.addEventListener("mouseleave", lampOff); // Desliga lampada quando tira mouse
lamp.addEventListener("dblclick", lampBroken);
