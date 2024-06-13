document.addEventListener('DOMContentLoaded', () => {
    const registerAccount = document.querySelector("body > form");

    const stopRefresh = (event) => {
        event.preventDefault();
    }

    const validateForm = (event) => {
        const formElements = registerAccount.elements;
        const mail = formElements["email"].value.trim();
        const pwd = formElements["password"].value.trim();

        if (mail === "" || pwd === "") {
            alert('All form fields must be filled in');
        } else {
            // Tworzenie obiektu z wartościami pól formularza
            const formData = {
                email: mail,
                password: pwd
            };

            console.log(formData); 

            registerAccount.reset(); 
        }
    };

    registerAccount.addEventListener("submit", (event) => {
        stopRefresh(event);
        validateForm(event);
    });
});