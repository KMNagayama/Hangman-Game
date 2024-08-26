document.querySelector('.button-play')!.addEventListener('click', function () {
    const button = document.querySelector('.button-play') as HTMLElement;
    const images = document.querySelectorAll('.image-moeda') as NodeListOf<HTMLImageElement>;
    let delay: number = 0;

    alterarTextoBotaoLoading(button)
    const umSegundoInMilliseconds: number = 1000;
    images.forEach((image, index) => {
        setTimeout(() => {
            image.style.opacity = '1';
           
            if (index === images.length - 1) {
                setTimeout(() => {
                    window.location.href = '/game.html';
                }, umSegundoInMilliseconds);
            }
        }, delay);
        delay += umSegundoInMilliseconds;
    });
});

function alterarTextoBotaoLoading(button: HTMLElement) {
    button.textContent = 'Loading...';
}