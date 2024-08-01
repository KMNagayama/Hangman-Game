document.querySelector('.button-play').addEventListener('click', function() {
    const button = document.querySelector('.button-play');
    const images = document.querySelectorAll('.image-moeda');
    let delay = 0;

    // Altera o texto do botão para "Loading..."
    button.textContent = 'Loading...';

    images.forEach((image, index) => {
        setTimeout(() => {
            image.style.opacity = 1;
            // Redireciona após a última imagem aparecer
            if (index === images.length - 1) {
                setTimeout(() => {
                    window.location.href = '/game.html'; // Redireciona para game.html
                }, 1000); // Atraso extra para garantir que a última imagem esteja visível
            }
        }, delay);
        delay += 1000; // Atraso de 1 segundo entre as imagens
    });
});