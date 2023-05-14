

// Массив с правильными ответами
const correctAnswers = ["a", "b", "c"];

// Функция проверки результатов
function checkAnswers(event) {
  event.preventDefault();

  const form = event.target;
  const answers = [
    form.elements.q1.value,
    form.elements.q2.value,
    form.elements.q3.value,
  ];

  const resultContainer = document.createElement("div");

  let totalCorrect = 0;

  for (let i = 0; i < answers.length; i++) {
    const isCorrect = answers[i] === correctAnswers[i];
    const resultElement = document.createElement("p");

    if (isCorrect) {
      resultElement.textContent = `Вопрос ${i + 1}: Верно!`;
      resultElement.classList.add("correct");
      totalCorrect++;
      
    } else {
      resultElement.textContent = `Вопрос ${i + 1}: Неверно!`;
      resultElement.classList.add("incorrect");
    }

    resultContainer.appendChild(resultElement);
  }
  const scoreElement = document.createElement("p");
  scoreElement.textContent = `Правильных ответов: ${totalCorrect} из ${correctAnswers.length}`;
  resultContainer.appendChild(scoreElement);

  form.appendChild(resultContainer);
}

function changeColorAnswCont1(value)
{
    var color1 = document.getElementById("answ-container1");
    switch(value)
    {
        case 'g':
            color1 = "green";
        break;
        case 'r':
            color1 = "red";
        break;
    }
    document.getElementById("answ-container1").style.backgroundColor = color1;
}

function changeColorAnswCont2(value)
{
    var color2 = document.getElementById("answ-container2");
    switch(value)
    {
        case 'g':
            color2 = "green";
        break;
        case 'r':
            color2 = "red";
        break;
    }
    document.getElementById("answ-container2").style.backgroundColor = color2;
}

function changeColorAnswCont3(value)
{
    var color3 = document.getElementById("answ-container3");
    switch(value)
    {
        case 'g':
            color3 = "green";
        break;
        case 'r':
            color3 = "red";
        break;
    }
    document.getElementById("answ-container3").style.backgroundColor = color3;
}



// Обработчик события для формы
const quizForm = document.getElementById("quiz-form");
quizForm.addEventListener("submit", checkAnswers);

// Обработчики событий для радиокнопок
const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach((button) =>
  button.addEventListener("change", checkAnswers)
);

// Обработчик события для обновления страницы
window.addEventListener("load", checkAnswers);




