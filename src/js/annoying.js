const close_annoying = document.getElementById('close_annoying');
const annoying = document.getElementById('modalAnnoying');
const body = document.getElementsByTagName('body')[0];
const btn = document.querySelector(".atuin-btn");
let counter = 0; 
const TIME_OUT_DELAY = 2000; // задержка мс
const MAX_ATTEMPTS = 2; // количество появлений "надоедалки"
const timerId = setTimeout(openAnnoying, 5000);

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
// Клик на закрытие с первого раза
btn.addEventListener("click", closeAnnoying)

