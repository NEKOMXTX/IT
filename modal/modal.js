// получаем элементы, с которыми будем работать
var modal = document.getElementById("modal");
var modalBtn = document.getElementById("modal-btn");
var closeBtn = document.getElementsByClassName("close")[0];

// функция для открытия модального окна
function openModal() {
  modal.style.display = "block";
}

// функция для закрытия модального окна
function closeModal() {
  modal.style.display = "none";
}

// обработчик события на кнопку "Открыть модальное окно"
modalBtn.addEventListener("click", openModal);

// обработчик события на кнопку "Закрыть модальное окно"
closeBtn.addEventListener("click", closeModal);

// обработчик события на клик вне модального окна
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    closeModal();
  }
});
