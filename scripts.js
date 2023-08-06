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
        }, 2000); // Вернуть текст обратно через 2 секунды
    });

    const parallaxContainer = document.querySelector('.parallax-container');
    const layers = document.querySelectorAll('.parallax-layer');
    const initialPositions = []; // Store initial translation values

    // Get and store initial translation values
    layers.forEach((layer) => {
        const computedStyle = getComputedStyle(layer);
        const transform = new DOMMatrix(computedStyle.transform);
        initialPositions.push({
            x: transform.m41,
            y: transform.m42
        });
    });

    // Smooth transition function
    function smoothTransition(layer, x, y) {
        layer.style.transform = `translate(${x}px, ${y}px)`;
    }

    parallaxContainer.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;

        layers.forEach((layer, index) => {
            const speed = (index + 1) * 0.1;
            const xOffset = x * speed * 500;
            const yOffset = y * speed * 500;

            smoothTransition(layer, xOffset, yOffset)
        });
    });

    parallaxContainer.addEventListener('mouseleave', () => {
        layers.forEach((layer, index) => {
            const initialX = initialPositions[index].x;
            const initialY = initialPositions[index].y;

            smoothTransition(layer, initialX, initialY);
        });
    });

});
