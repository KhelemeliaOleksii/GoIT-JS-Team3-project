const headerBox = document.querySelector('.header-js');
const preview = document.querySelector('.preview');
const containerEl = document.querySelector('.container');
const visuallyHiddenHeaderBox = document.querySelector('.visually-hidden');
const visuallyHiddenHeaderBoxLib = document.querySelector('.library-header-img');
const headerLibBtn = document.querySelector('.header__lib_link');
const headerHomeBtn = document.querySelector('.header__home_link');

// // вешаем слушателя на кнопку library
// headerLibBtn.addEventListener('click', renderHeaderLib);
// // вешаем слушателя на кнопку home
// headerHomeBtn.addEventListener('click', renderHeaderHome);

// удаляет картинку-заставку через 2 сек
function previewEl() {
  setTimeout(() => {
    preview.innerHTML = '';
    preview.remove();
  }, 2000);
}
previewEl();

// отрисовываем секцию header-home
function addMainHeaderEl() {
  setTimeout(() => {
    headerBox.classList.add('main-header-img');
    headerBox.setAttribute('id', 'header');
    visuallyHiddenHeaderBox.classList.remove('visually-hidden');
  }, 2000);
}
addMainHeaderEl();

// удаляем хедер home, убираем класс visually-hidden для отрисовки хедера library
function renderHeaderLib() {
  clearHeaderBox();
  // alert('перейти в library?');
  headerBox.classList.add('visually-hidden');
  visuallyHiddenHeaderBoxLib.classList.remove('visually-hidden');
}

function renderHeaderHome() {
  // alert('перейти в home?');
  clearHeaderBox();
  visuallyHiddenHeaderBoxLib.classList.add('visually-hidden');
  visuallyHiddenHeaderBox.remove('visually-hidden');
}

// удаляет отрисовку header
function clearHeaderBox() {
  headerBox.innerHTML = '';
}
