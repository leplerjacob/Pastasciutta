document.querySelector(".toggle").addEventListener("click", (e) => {
  const overlay = document.querySelector(".overlay");

  overlay.style.display = "flex";

  console.log(overlay.className);

  e.preventDefault();
});

document.querySelector('.close-toggle').addEventListener("click", (e) => {
    const overlay = document.querySelector(".overlay");

    overlay.style.display = "none";

    e.preventDefault();
})

