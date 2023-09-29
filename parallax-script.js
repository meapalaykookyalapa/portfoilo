document.addEventListener("DOMContentLoaded", function () {
  const emailParagraph = document.getElementById("email");

  emailParagraph.addEventListener("click", function () {
    const textToCopy = this.textContent.trim();

    const textarea = document.createElement("textarea");
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();

    document.execCommand("copy");

    document.body.removeChild(textarea);
    emailParagraph.setAttribute("data-tooltip", "Copied!");

    setTimeout(() => {
      emailParagraph.setAttribute("data-tooltip", "Click to copy");
    }, 2000);
  });

  // const parallaxContainer = document.querySelector('.parallax-container');
  // const layers = document.querySelectorAll('.parallax-layer');

  // parallaxContainer.addEventListener('mousemove', (e) => {
  //     const x = e.clientX / window.innerWidth - 0.5;
  //     const y = e.clientY / window.innerHeight - 0.5;

  //     layers.forEach((layer, index) => {
  //         const speed = (index + 1) * 0.1;
  //         const xOffset = x * speed * 800;
  //         const yOffset = y * speed * 800;

  //         layer.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
  //         layer.style.transitionDuration = `0.15s`;
  //     });
  // });

  const parallaxContainer = document.querySelector(".parallax-container");
  const layers = document.querySelectorAll(".parallax-layer");

  function handleParallax(e) {
    if (window.innerWidth >= 694) {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;

      layers.forEach((layer, index) => {
        const speed = (index + 1) * 0.2;
        const xOffset = x * speed * 800;
        const yOffset = y * speed * 800;

        layer.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        layer.style.transitionDuration = `0.15s`;
      });
    } else {
      layers.forEach((layer) => {
        layer.style.transform = "translate(0, 0)";
        layer.style.transitionDuration = "0s";
      });
    }
  }

  parallaxContainer.addEventListener("mousemove", handleParallax);
  window.addEventListener("resize", handleParallax);
});
