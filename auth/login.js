document.getElementById('toggleSenha').addEventListener('click', function() {
    const senha = document.getElementById('senha');
    senha.type = senha.type === 'password' ? 'text' : 'password';
    this.classList.toggle('fa-eye-slash');
});
