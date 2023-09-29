document.addEventListener("DOMContentLoaded", function () {
  const targetDiv = document.getElementById("phrase");
  const offsetPercentage = 70;
  const windowHeight = window.innerHeight;
  const offset = (offsetPercentage / 100) * windowHeight;

  window.addEventListener("scroll", () => {
    const divTop = targetDiv.getBoundingClientRect().top;
    const header = document.querySelector("header");
    const logo = document.querySelector(".logo");
    const svgIcons = document.querySelectorAll(".svg-icon");
    const secTexts = document.querySelectorAll(".about-me-sec-text");
    const roundButtons = document.querySelectorAll(".round-button");

    if (divTop <= offset) {
      document.body.style.transition = "background-color 0.5s ease";
      document.body.style.backgroundColor =
        "#242424"; /* Когда div касается верха страницы */
      header.style.transition = "background-color 0.5s ease";
      header.style.backgroundColor = "rgba(36, 36, 36, 0.5)";
      logo.style.transition = "color 0.3s ease";
      logo.style.color = "#ffffff";
      svgIcons.forEach((svgIcon) => {
        svgIcon.classList.remove("light-svg-icon");
      });
      secTexts.forEach((secText) => {
        secText.style.transition = "color 0.5s ease";
        secText.style.color = "#ffffff";
      });
      roundButtons.forEach((roundButton) => {
        roundButton.classList.remove("light-round-button");
      });
    } else {
      /* Возвращаем начальный */
      document.body.style.backgroundColor = "#EEEEEE";
      header.style.backgroundColor = "rgba(238, 238, 238, 0.5)";
      logo.style.color = "#212121";
      svgIcons.forEach((svgIcon) => {
        svgIcon.classList.add("light-svg-icon");
      });
      secTexts.forEach((secText) => {
        secText.style.color = "#212121";
      });
      roundButtons.forEach((roundButton) => {
        roundButton.classList.add("light-round-button");
      });
    }
  });
});
