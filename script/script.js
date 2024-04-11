const button = document.querySelector("button");
const redes = document.querySelector(".redes");

if (button && redes) {
  button.addEventListener("click", ativarMenu);
}

function ativarMenu() {
  redes.classList.toggle("ativa");
}
