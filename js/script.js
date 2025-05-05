const imgs = document.querySelectorAll(".header-slider ul img");
const prev_btn = document.querySelector(".control-previous");
const next_btn = document.querySelector(".control-next");

// Initialisation : affiche la première image lorsque n est égal à 0
let n = 0; // quand c'est à 0, ça affiche la première image
/**
 * Change le slide des images en fonction de l'index spécifié.
 * @param {number} index - L'index de l'image à afficher.
 */
function changeSlide() {
  for (let i = 0; i < imgs.length; i++) {
    // Cache toutes les images
    imgs[i].style.display = "none";
  }
  // Affiche l'image à l'index spécifié
  imgs[n].style.display = "block";
}
changeSlide();

prev_btn.addEventListener("click", (e) => {
  if (n > 0) {
    n--;
  } else {
    n = imgs.length - 1;
  }
  changeSlide();
});

next_btn.addEventListener("click", (e) => {
  if (n < imgs.length - 1) {
    n++;
  } else {
    n = 0;
  }
  changeSlide();
});

const scrollContainer = document.querySelectorAll(".products");

for (const item of scrollContainer) {
  item.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
  });
}
