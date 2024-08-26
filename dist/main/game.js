"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const selectedWord = sessionStorage.getItem('selectedWord');
    const selectedHint = sessionStorage.getItem('selectedHint');
    const wordDisplay = document.querySelector(".word-display");
    const guessInput = document.getElementById("testar-letra");
    const guessButton = document.querySelector(".botao-adivinhar");
    const incorrectLettersDisplay = document.querySelector(".game-errors b");
    const incorrectLettersContainer = document.querySelector(".incorrect-letters");
    const hangmanImg = document.getElementById("hangman-img");
    const hangmanImages = [
        "/img/hangman-0.svg",
        "/img/hangman-1.svg",
        "/img/hangman-2.svg",
        "/img/hangman-3.svg",
        "/img/hangman-4.svg",
        "/img/hangman-5.svg",
        "/img/hangman-6.svg"
    ];
    // Tentativas
    let incorrectGuesses = 0;
    const maxIncorrectGuesses = 6;
    let correctGuesses = new Set();
    let incorrectGuessesSet = new Set();
    function InicializarExibixaoDePalavras() {
        if (wordDisplay && selectedWord) {
            wordDisplay.innerHTML = "";
            for (let i = 0; i < selectedWord.length; i++) {
                const li = document.createElement("li");
                li.classList.add("letter");
                wordDisplay.appendChild(li);
            }
        }
    }
    function mostrarPalavraCorreta() {
        if (wordDisplay && selectedWord) {
            const letters = wordDisplay.querySelectorAll(".letter");
            for (let i = 0; i < selectedWord.length; i++) {
                const letterElement = letters[i];
                if (correctGuesses.has(selectedWord[i])) {
                    letterElement.textContent = selectedWord[i];
                    letterElement.classList.add("guessed");
                }
                else {
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
                const span = document.createElement("span");
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
            const guess = guessInput.value.toLowerCase();
            guessInput.value = "";
            if (!guess || guess.length !== 1 || correctGuesses.has(guess) || incorrectGuessesSet.has(guess)) {
                return;
            }
            if (selectedWord && selectedWord.includes(guess)) {
                correctGuesses.add(guess);
            }
            else {
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
            const letters = wordDisplay.querySelectorAll(".letter");
            const allGuessed = [...letters].every(letter => {
                const letterElement = letter;
                return letterElement.classList.contains("guessed") || letterElement.textContent === '';
            });
            if (incorrectGuesses >= maxIncorrectGuesses) {
                showGameOverModal("Você perdeu!");
            }
            else if (selectedWord.split('').every(letter => correctGuesses.has(letter))) {
                showGameOverModal("Você ganhou!");
            }
        }
    }
    function showGameOverModal(message) {
        const modal = document.getElementById("game-over-modal");
        const gameOverMessage = document.getElementById("game-over-message");
        const newGameButton = document.getElementById("new-game-button");
        if (modal && gameOverMessage && newGameButton) {
            gameOverMessage.textContent = message;
            modal.style.display = "block";
            newGameButton.addEventListener("click", () => {
                modal.style.display = "none";
                window.location.href = "themes.html";
            });
        }
    }
    const hintElement = document.getElementById('word-hint');
    if (hintElement && selectedHint) {
        hintElement.innerText = selectedHint;
    }
    if (guessButton) {
        guessButton.addEventListener("click", verificaLetraAdivinhada);
    }
    InicializarExibixaoDePalavras();
});
