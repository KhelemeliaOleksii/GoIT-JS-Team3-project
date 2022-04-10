const headerBox = document.querySelector('.header');

headerBox.setAttribute("id", "header");
const preview = document.querySelector('.preview');


// удаляет картинку-заставку через 2 сек
function previewEl () {
    setTimeout(() => {
    preview.innerHTML = '';
    }, 2000);
}
previewEl();


headerBox.classList.add('main-header-img');


// удаляет отрисовку header
function clearHeaderBox() {
    headerBox.innerHTML = '';
}

