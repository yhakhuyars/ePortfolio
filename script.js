// Form submission alert
const contactForm = document.querySelector("form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission for static setup
        alert("Thank you for reaching out! Your message has been submitted.");
        contactForm.reset(); // Optionally reset the form fields after submission
    });
}
