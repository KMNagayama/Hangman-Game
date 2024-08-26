document.addEventListener("DOMContentLoaded", () => {

    const selectedWord: string | null = sessionStorage.getItem('selectedWord');
    const selectedHint: string | null = sessionStorage.getItem('selectedHint');

    const wordDisplay = document.querySelector(".word-display") as HTMLElement | null;
    const guessInput = document.getElementById("testar-letra") as HTMLInputElement | null;
    const guessButton = document.querySelector(".botao-adivinhar") as HTMLButtonElement | null;
    const incorrectLettersDisplay = document.querySelector(".game-errors b") as HTMLElement | null;
    const incorrectLettersContainer = document.querySelector(".incorrect-letters") as HTMLElement | null;
    const hangmanImg = document.getElementById("hangman-img") as HTMLImageElement | null;

    const hangmanImages: string[] = [
        "/img/hangman-0.svg",
        "/img/hangman-1.svg",
        "/img/hangman-2.svg",
        "/img/hangman-3.svg",
        "/img/hangman-4.svg",
        "/img/hangman-5.svg",
        "/img/hangman-6.svg"
    ];
    // Tentativas
    let incorrectGuesses: number = 0;
    const maxIncorrectGuesses: number = 6;
    let correctGuesses: Set<string> = new Set();
    let incorrectGuessesSet: Set<string> = new Set();

    function InicializarExibixaoDePalavras() {
        if (wordDisplay && selectedWord) {
            wordDisplay.innerHTML = "";
            for (let i = 0; i < selectedWord!.length; i++) {
                const li = document.createElement("li");
                li.classList.add("letter");
                wordDisplay!.appendChild(li);
            }
        }
    }

    function mostrarPalavraCorreta() {
        if (wordDisplay && selectedWord) {
            const letters: NodeListOf<Element> = wordDisplay.querySelectorAll(".letter");
            for (let i = 0; i < selectedWord!.length; i++) {
                const letterElement = letters[i] as HTMLElement;
                if (correctGuesses.has(selectedWord[i])) {
                    letterElement.textContent = selectedWord![i];
                    letterElement.classList.add("guessed");
                } else {
                    letterElement.textContent = '';
                    letterElement.classList.remove("guessed");
                }
            }
        }
    }

    function AtualizaLetrasIncorretas() {
        if (incorrectLettersContainer) {
            incorrectLettersContainer.innerHTML = "";
            incorrectGuessesSet.forEach(letter => {
                const span = document.createElement("span") as HTMLSpanElement;
                span.textContent = letter;
                span.classList.add("incorrect-letter");
                incorrectLettersContainer.appendChild(span);
            });
        }
    }

    function AtualizaImagemDaForca() {
        if (hangmanImg && incorrectGuesses <= maxIncorrectGuesses) {
            hangmanImg.src = hangmanImages[incorrectGuesses];
        }
    }

    function verificaLetraAdivinhada() {
        if (guessInput) {
            const guess: string = guessInput.value.toLowerCase();
            guessInput.value = "";

            if (!guess || guess.length !== 1 || correctGuesses.has(guess) || incorrectGuessesSet.has(guess)) {
                return;
            }

            if (selectedWord && selectedWord.includes(guess)) {
                correctGuesses.add(guess);
            } else {
                incorrectGuesses++;
                incorrectGuessesSet.add(guess);
                if (incorrectLettersDisplay) {
                    incorrectLettersDisplay.textContent = `${incorrectGuesses} / ${maxIncorrectGuesses}`;
                }
                AtualizaLetrasIncorretas();
                AtualizaImagemDaForca();
            }

            mostrarPalavraCorreta();
            checkGameStatus();
        }
    }

    function checkGameStatus() {
        if (wordDisplay && selectedWord) {
            const letters: NodeListOf<Element> = wordDisplay.querySelectorAll(".letter");
            const allGuessed = [...letters].every(letter => {
                const letterElement = letter as HTMLElement;
                return letterElement.classList.contains("guessed") || letterElement.textContent === '';
            });
            if (incorrectGuesses >= maxIncorrectGuesses) {
                showGameOverModal("Você perdeu!");
            } else if (selectedWord!.split('').every(letter => correctGuesses.has(letter))) {
                showGameOverModal("Você ganhou!");
            }
        }
    }

    function showGameOverModal(message: string) {
        const modal = document.getElementById("game-over-modal") as HTMLElement | null;
        const gameOverMessage = document.getElementById("game-over-message") as HTMLElement | null;
        const newGameButton = document.getElementById("new-game-button") as HTMLButtonElement | null;

        if (modal && gameOverMessage && newGameButton) {
            gameOverMessage.textContent = message;
            modal.style.display = "block";

            newGameButton.addEventListener("click", () => {
                modal.style.display = "none";
                window.location.href = "themes.html";
            });
        }
    }

    const hintElement = document.getElementById('word-hint') as HTMLElement | null;
    if (hintElement && selectedHint) {
        hintElement.innerText = selectedHint;
    }

    if (guessButton) {
        guessButton.addEventListener("click", verificaLetraAdivinhada);
    }

    InicializarExibixaoDePalavras();
});