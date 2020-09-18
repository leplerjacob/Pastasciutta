document.querySelector(".toggle").addEventListener("click", (e) => {
  const overlay = document.querySelector(".overlay");

  overlay.style.display = "grid";

  e.preventDefault();
});

document.querySelector(".close-toggle").addEventListener("click", (e) => {
  const overlay = document.querySelector(".overlay");

  overlay.style.display = "none";

  e.preventDefault();
});

document.querySelector(".btn-order").addEventListener("click", (e) => {
  const overlay = document.querySelector(".menu-order");

  overlay.style.display = "grid";

  e.preventDefault();
});

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) {
    const overlay = document.querySelector(".menu-order");

    overlay.style.display = "none";
  }

  e.preventDefault();
});