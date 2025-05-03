document.addEventListener("DOMContentLoaded", () => {
  const flashcards = [
    { question: "魚", answer: "さかな\nFish" },
    { question: "図書館", answer: "としょかん\nLibrary" },
    { question: "動物", answer: "どうぶつ\nAnimal" },
  ];

  let currentCard = 0;

  const flashcardElement = document.getElementById("flashcard");
  const questionElement = document.getElementById("question");
  const answerElement = document.getElementById("answer");

  function displayCard() {
    questionElement.textContent = flashcards[currentCard].question;
    answerElement.textContent = flashcards[currentCard].answer;
  }

  document.getElementById("flip-card").addEventListener("click", () => {
    flashcardElement.classList.toggle("is-flipped");
  });

  document.getElementById("next-card").addEventListener("click", () => {
    currentCard = (currentCard + 1) % flashcards.length;
    displayCard();
  });

  displayCard();
});
