const phrases = [
  "Simple. Rapide. Efficace.",
  "Bump toutes les 1h pas 2.",
  "Le bot qu'il vous faut.",
];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      current = phrases[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      current = phrases[i].substring(0, j--);
    }

    document.getElementById("typed").innerText = current;

    if (!isDeleting && j === phrases[i].length) {
      isDeleting = true;
      setTimeout(type, 1200);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 50 : 80);
    }
  }
}

type();
