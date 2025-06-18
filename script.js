document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling (client-side only for this example)
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            // In a real application, you would send this data to a server
            // using fetch() or XMLHttpRequest.
            // For this example, we'll just simulate a successful submission.

            formStatus.textContent = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';
            formStatus.style.color = 'green';
            contactForm.reset(); // Clear the form fields

            // Optionally, clear the status message after a few seconds
            setTimeout(() => {
                formStatus.textContent = '';
            }, 5000);
        });
    }
});
