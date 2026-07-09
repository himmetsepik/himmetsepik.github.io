const buttons = document.querySelectorAll(".link-button");

buttons.forEach((button, index) => {
    button.style.opacity = "0";
    button.style.transform = "translateY(20px)";

    setTimeout(() => {
        button.style.transition = "0.4s ease";
        button.style.opacity = "1";
        button.style.transform = "translateY(0)";
    }, index * 120);
});