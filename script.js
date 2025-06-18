document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle the "Agende seu Serviço" button click
    const ctaButton = document.getElementById('ctaButton');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert('Excelente escolha! Em breve entraremos em contato para agendar seu serviço.');
            // You could also redirect to a contact form or a specific booking page
            // window.location.href = '#contact'; // Example: scroll to contact section
        });
    }

    // Handle the contact form submission
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent default form submission

            // Here you would typically send the form data to a server
            // For this simple example, we'll just simulate a submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simple validation
            if (name && email && message) {
                formMessage.style.color = 'green';
                formMessage.textContent = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';
                contactForm.reset(); // Clear the form
            } else {
                formMessage.style.color = 'red';
                formMessage.textContent = 'Por favor, preencha todos os campos do formulário.';
            }
        });
    }
});
