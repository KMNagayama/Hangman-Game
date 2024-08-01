document.addEventListener("DOMContentLoaded", () => {
    const selectedWord = sessionStorage.getItem('selectedWord');
    const selectedHint = sessionStorage.getItem('selectedHint');

    if (!selectedWord) {
        console.error("Nenhuma palavra selecionada encontrada.");
        return;
    }

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

    let incorrectGuesses = 0;
    const maxIncorrectGuesses = 6;
    let correctGuesses = new Set();
    let incorrectGuessesSet = new Set();

    function initializeWordDisplay() {
        wordDisplay.innerHTML = "";
        for (let i = 0; i < selectedWord.length; i++) {
            const li = document.createElement("li");
            li.classList.add("letter");
            wordDisplay.appendChild(li);
        }
    }

    function updateWordDisplay() {
        const letters = wordDisplay.querySelectorAll(".letter");
        for (let i = 0; i < selectedWord.length; i++) {
            if (correctGuesses.has(selectedWord[i])) {
                letters[i].textContent = selectedWord[i];
                letters[i].classList.add("guessed");
            } else {
                letters[i].textContent = '';
                letters[i].classList.remove("guessed");
            }
        }
    }

    function updateIncorrectLettersDisplay() {
        incorrectLettersContainer.innerHTML = "";
        incorrectGuessesSet.forEach(letter => {
            const span = document.createElement("span");
            span.textContent = letter;
            span.classList.add("incorrect-letter");
            incorrectLettersContainer.appendChild(span);
        });
    }

    function updateHangmanImage() {
        if (incorrectGuesses <= maxIncorrectGuesses) {
            hangmanImg.src = hangmanImages[incorrectGuesses];
        }
    }

    function checkGuess() {
        const guess = guessInput.value.toLowerCase();
        guessInput.value = "";

        if (!guess || guess.length !== 1 || correctGuesses.has(guess) || incorrectGuessesSet.has(guess)) {
            return;
        }

        if (selectedWord.includes(guess)) {
            correctGuesses.add(guess);
        } else {
            incorrectGuesses++;
            incorrectGuessesSet.add(guess);
            incorrectLettersDisplay.textContent = `${incorrectGuesses} / ${maxIncorrectGuesses}`;
            updateIncorrectLettersDisplay();
            updateHangmanImage();
        }

        updateWordDisplay();
        checkGameStatus();
    }

    function checkGameStatus() {
        const letters = wordDisplay.querySelectorAll(".letter");
        const allGuessed = [...letters].every(letter => letter.classList.contains("guessed") || letter.textContent === '');

        if (incorrectGuesses >= maxIncorrectGuesses) {
            showGameOverModal("Você perdeu!");
        } else if (selectedWord.split('').every(letter => correctGuesses.has(letter))) {
            showGameOverModal("Você ganhou!");
        }
    }

    function showGameOverModal(message) {
        const modal = document.getElementById("game-over-modal");
        const gameOverMessage = document.getElementById("game-over-message");
        const newGameButton = document.getElementById("new-game-button");

        gameOverMessage.textContent = message;
        modal.style.display = "block";

        newGameButton.addEventListener("click", () => {
            modal.style.display = "none";
            window.location.href = "themes.html";
        });
    }

    // Exibe a dica
    const hintElement = document.getElementById('word-hint');
    if (hintElement && selectedHint) {
        hintElement.innerText = selectedHint;
    }

    guessButton.addEventListener("click", checkGuess);
    initializeWordDisplay();
});
