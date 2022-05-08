'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

const displayNumber = function(number) {
    document.querySelector('.number').textContent = number;
};

const displayScore = function(score) {
    document.querySelector('.score').textContent = score;
};

const displayHighscore = function(highscore) {
    document.querySelector('.highscore').textContent = highscore;
};

const displayGuess = function(guess) {
    document.querySelector('.guess').value = guess;
};

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('Please enter a number!');
    } else if (guess === number) {
        displayMessage('Correct number!');
        displayNumber(number);
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            displayHighscore(highscore);
        }
        displayHighscore(highscore);
    } else if (guess !== number) {
        if (score > 1) {
            displayMessage(guess > number ? 'Too high!' : 'Too low!');
            score--;
            displayScore(score);
        } else {
            displayMessage('You lose!');
            displayScore((score = 0));
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    displayNumber('?');
    displayScore(score);
    displayGuess('');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});