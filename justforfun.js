const targetNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
    const userInput = document.getElementById('user-input').value;

    if (userInput == targetNumber) {
        document.getElementById('result').innerText = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
    } else {
        attempts++;
        document.getElementById('result').innerText = 'Try again!';
    }
}