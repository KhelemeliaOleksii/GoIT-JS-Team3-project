

export function pageTransitions() {
    const themeBtn = document.querySelector('.btn-toggle');
    themeBtn.addEventListener('click',() =>{
        let element = document.body;
        element.classList.toggle('light-mode')
})
}

    // pageTransitions();