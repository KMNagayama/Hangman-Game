"use strict";
document.querySelector('.button-play').addEventListener('click', function () {
    const button = document.querySelector('.button-play');
    const images = document.querySelectorAll('.image-moeda');
    let delay = 0;
    alterarTextoBotaoLoading(button);
    const umSegundoInMilliseconds = 1000;
    images.forEach((image, index) => {
        setTimeout(() => {
            image.style.opacity = '1';
            if (index === images.length - 1) {
                setTimeout(() => {
                    window.location.href = 'game.html';
                }, umSegundoInMilliseconds);
            }
        }, delay);
        delay += umSegundoInMilliseconds;
    });
});
function alterarTextoBotaoLoading(button) {
    button.textContent = 'Loading...';
}
