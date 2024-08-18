document.addEventListener('DOMContentLoaded', () => {
    // Example: Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example: Form submission (you can expand this for more functionality)
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted!');
        // Add your form submission logic here (e.g., send to server)
    });
});