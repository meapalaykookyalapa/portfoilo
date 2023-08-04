document.addEventListener("DOMContentLoaded", function() {
    const emailParagraph = document.getElementById("email");

    emailParagraph.addEventListener("click", function() {
        const tooltip = this.getAttribute("data-tooltip");
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
});
