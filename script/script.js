
//Script Confete
let clicks = 0;
const minhaFoto = document.querySelector("#foto");

minhaFoto.addEventListener('click', () => {
  clicks++;

  if (clicks === 5) {
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 }

    });

    clicks = 0;
  }
});

//Script troca abilities
function openCity(evt, abilities) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(abilities).style.display = "flex";
  evt.currentTarget.className += " active";
}

window.onload = () => {
  document.querySelector(".tablinks").click();
};

//Script menu-hamburguer
const btnHambuguer = document.querySelector(".btn-hamburguer");
const nav = document.querySelector(".nav");

btnHambuguer.addEventListener('click', () => {
  nav.classList.toggle("active");
});