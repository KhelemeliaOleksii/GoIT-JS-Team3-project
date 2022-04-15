const close_annoying = document.getElementById('close_annoying');
const annoying = document.getElementById('modalAnnoying');
const body = document.getElementsByTagName('body')[0];
const btn = document.querySelector(".atuin-btn");
const text = document.querySelector(".annoying-txt");
let counter = 0; 
const TIME_OUT_DELAY = 2000; // задержка мс
const MAX_ATTEMPTS = 2; // количество появлений "надоедалки"
const timerId = setTimeout(openAnnoying, 5000);

// function createAnnoying() {
//     body.innerHTML = '<div id="modalAnnoying" class="annoying bounceIn"><div id="close_annoying">+</div>  < div class="annoying_txt" > <img src="https://vafk.com.ua/wp-content/uploads/2022/03/image_2022-03-01_09-47-20.png" width="320px" alt="ukraine" class="annoying_img"> <p class="annoying-txt">Русский военный корабль, пошёл на х#й! </p> <button class="annoying-btn"><div class="btn-text">Допомогти ЗСУ</div><div class="atuin-btn"></div></button> </div></div>';
// }
function openAnnoying() {     
        annoying.classList.add('annoying_vis'); // добавляем видимость окна
        annoying.classList.remove('bounceOutDown'); // удаляем эффект закрытия
        body.classList.add('body_block'); // убираем прокрутку
};
function closeAnnoying() { 
    annoying.classList.add('bounceOutDown'); // добавляем эффект закрытия
    window.setTimeout(function () { // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
        annoying.classList.remove('annoying_vis');
        body.classList.remove('body_block'); // возвращаем прокрутку
    }, 500);
};
close_annoying.onclick = function() { // клик на закрытие
    closeAnnoying();
    if (counter === MAX_ATTEMPTS) {
        return
    } else {
        setTimeout(openAnnoying, TIME_OUT_DELAY);
        counter+=1
    }
};
function closeHandle() {
    setTimeout(closeAnnoying, 800);
    btn.style.setProperty("transform", "translate(10px, 100px) rotate(90deg)");
    text.classList.add("annoying-txt-vis");

};
// Клик на закрытие с первого раза
btn.addEventListener("click", closeHandle)

