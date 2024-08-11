// scripts.js

// Exemplo: Altera a cor de fundo do header ao clicar no título
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const title = document.querySelector('h1');

    title.addEventListener('click', function () {
        // Altera a cor de fundo do header
        header.style.backgroundColor = header.style.backgroundColor === 'lightblue' ? '' : 'lightblue';
    });
});
