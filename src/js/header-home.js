const headerBox = document.querySelector('.header');
const preview = document.querySelector('.preview');
const containerEl = document.querySelector('.container');

//------------------------- удаляет картинку-заставку через 2 сек----------------------------------
function previewEl() {
    setTimeout(() => {
        preview.innerHTML = '';
        preview.remove();
    }, 2000);
}
previewEl();


// ------------------------отрисовываем секцию header-home---------------------------------------
// 1 разметка
const sectionHeader = `
        <nav class="header__site-nav">
                <a class="logo link-no-tdn" href="" id="header__link--home">
                    <img class="logo__svg" src="https://svgshare.com/i/gEU.svg" alt="logo">
                    <span class="logo__text">Filmoteka</span>
                </a>
                <ul class="header__nav_links list-no-ls">
                    <li class="header__nav_list_item ">
                        <button type="button" class="header__home_link site-nav__link current" id="header__btn--home">home</button>
                    </li>
            
                    <li class="header__nav_list_item">
                        <button type="button" class="header__lib_link site-nav__link" id="header__btn--library">my
                            library</button>
                    </li>
                </ul>
        </nav>
        <form class="header__input_box" id="header__search-form">
            <input type="text" name="input" class="header__input" placeholder="Search movies" autocomplete="off"  />
            <button class="header__search_btn">
                <img class="header__search-btn-icon" src="https://svgshare.com/i/gEa.svg" alt="search">
            </button>
        </form>
        <div class="header__input_msg_error" id="header__container-msg"></div>
        </div>`;


const sectionHeaderLib = `
        <div class="container header__site-nav"
            <div class="header__site-nav">
                <a class="logo link-no-tdn" href="" id="header__link--home">
                    <img class="logo__svg" src="https://svgshare.com/i/gEU.svg" alt="logo">
                    <span class="logo__text">Filmoteka</span>
                </a>
                <ul class="header__nav_links list-no-ls">
                    <li class="header__nav_list_item ">
                        <button type="button" class="header__home_link site-nav__link " id="header__btn--home">home</button>
                    </li>
            
                    <li class="header__nav_list_item">
                        <button type="button" class="header__lib_link site-nav__link current" id="header__btn--library">my
                            library</button>
                    </li>
                </ul>
            </div>
            <div class="header__library_btm">
                <button class="header__library_btm_item transparent-btn watched-btn-js" id="header__btn--watched">Watched</button>
                <button class="header__library_btm_item queue-btn-js " id="header__btn--queue">Queue</button>
            </div>
        </div>
    `;



// 2 функция отрисовки 
function addMainHeaderEl() {
    setTimeout(() => {
        headerBox.classList.add('main-header-img');
        headerBox.setAttribute('id', 'header');
        containerEl.insertAdjacentHTML('afterbegin', sectionHeader);

        // -------------------- кнопки home, library -----------------------
        const headerLibBtn = document.querySelector('.header__lib_link');
        const headerHomeBtn = document.querySelector('.header__home_link');
        console.log(headerLibBtn);
        console.log(headerHomeBtn);

        // вешаем слушателя на кнопку library 
        headerLibBtn.addEventListener('click', renderHeaderLib);
        

    }, 2000);
}
addMainHeaderEl();



// удаляем хедер home, отрисовка header library
function renderHeaderLib() {
    clearHeaderBox();
    headerBox.classList.add('library-header-img');
    headerBox.classList.remove('main-header-img');
    headerBox.insertAdjacentHTML('afterbegin', sectionHeaderLib);
    

const btnQueue = document.querySelector('.queue-btn-js');
const btnWatched = document.querySelector('.watched-btn-js');

// вешаем слушателя на кнопки QUEUE та WATCHED
btnQueue.addEventListener('click', ()=>{ alert ('click on btnQueue')});
btnWatched.addEventListener('click', () => { alert('click on btnWatched') });
// вешаем слушателя на кнопку home 
headerHomeBtn.addEventListener('click', addMainHeaderEl);
}



// удаляет отрисовку header
function clearHeaderBox() {
    headerBox.innerHTML = '';
}


