const contactForm = document.getElementById('contactForm');
const responseAlert = document.getElementById('response-alert');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const userName = document.getElementById('name').value;
    responseAlert.textContent = `Thank you, ${userName}! Your message has been sent to our team.`;
    responseAlert.style.display = 'block';
    contactForm.reset();
    setTimeout(() => {
        responseAlert.style.display = 'none';
    }, 5000);
});