document.addEventListener("DOMContentLoaded", function () {
  const targetDiv = document.getElementById("footer");
  const offsetPercentage = 10;
  const windowHeight = window.innerHeight;
  const offset = (offsetPercentage / 100) * windowHeight;

  window.addEventListener("scroll", () => {
    const divTop = targetDiv.getBoundingClientRect().top;
    const header = document.querySelector("header");

    if (divTop <= offset) {
      header.style.transition = "display 0.5s ease";
      header.style.display = "none";
    } else {
      header.style.display = "flex";
    }
  });
});
