document.addEventListener('DOMContentLoaded', () => {
    const yourName = document.querySelector("#name-input");
    const helloName = document.querySelector("#name-output");

    yourName.addEventListener("input", (event) => {
        const inputValue = event.currentTarget.value;
        if (inputValue.trim() === "") {
            helloName.textContent = "Anonymous";
        } else {
            helloName.textContent = `${inputValue}`;
        }
    });
});