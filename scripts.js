document.addEventListener('DOMContentLoaded', () => {
    updateYear();
});

function updateYear() {
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('footer p');
    footerText.textContent = footerText.textContent.replace('[Current Year]', currentYear);
}
