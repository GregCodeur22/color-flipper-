// changer la couleur de fond et afficher le nom de la couleur dans le span

//au click sur le boutton
//   -- lance une  fonction qui calcule une nouvelle couleur        aléatoire

//trouver un moyen pour récupere le nom de la couleur et l'afficher dans le span

const button = document.querySelector("button");
let span = document.querySelector(".color");
console.log(span);

function change() {
  let i = Math.random();
  if (i < 0.5) {
    i = -1;
  } else {
    i = 1;
  }

  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255 * i);
  let result = `rgb(${r}, ${g}, ${b})`;
  console.log(result);
  document.body.style.background = result;
  button.style.background = result;
  document.body.style.transition = "1s";
  span.textContent = result;
}

button.addEventListener("click", () => {
  change();
});
