// Получаем элементы DOM
var overlay = document.getElementById('overlay');
var fullscreenImage = document.getElementById('fullscreenImage');
var myImage = document.getElementById('myImage');
var closeButton = document.getElementById('closeButton');

// При клике на изображение отображаем его на полный экран
myImage.onclick = function() {
    overlay.style.display = 'block';
    fullscreenImage.src = this.src;
}

// При клике на кнопку "Закрыть" скрываем полноэкранный режим
closeButton.onclick = function() {
    overlay.style.display = 'none';
}

overlay.onclick = function(event) {
    if (event.target === overlay) {
        overlay.style.display = 'none';
    }
    }