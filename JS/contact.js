document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name && !email) {
        alert('Por favor, preencha o nome e o e-mail antes de enviar.');
        return;
    }
    if (!name) {
        alert('Por favor, preencha o nome antes de enviar.');
        return;
    }
    if (!email) {
        alert('Por favor, preencha o e-mail antes de enviar.');
        return;
    }

    const btn = this.querySelector('.submit-btn');
    btn.textContent = 'Enviando…';
    btn.disabled = true;

    setTimeout(() => {
        document.getElementById('successMsg').classList.add('visible');
        btn.textContent = 'Enviado ✓';
        btn.style.backgroundColor = '#2e7d32';
    }, 800);
});