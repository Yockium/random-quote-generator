const randomQuotes = [
    "Quote number one",
    "Quote number two",
    "Quote number three",
    "Quote number four",
    "Quote number five",
];

const quoteDiv = document.getElementById("quote");
const quoteButton = document.getElementById("random-button");

function randomQuote() {
    quoteDiv.textContent = randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
}

quoteButton.addEventListener("click", randomQuote);