import { createElement } from './custom-create-element';
import { Pagination } from './pagination';
// import 
// Інтерфейс бібліотеки
// 1) программа відмальовування Бібліотеки викликає відрисовку пагінації
// - передає номер сторінки
// - передає загальну кількість сторінок
// 2) програма відрисовки пагінації:
//      - з'ясовуємо, яка поточна сторінка  
//      - з'ясовуємо скільки сторінок міститиме наша пагінація
//      - перевіряємо, чи входить значення нашої стоорінки у правильний інтервал
//      - рисує пагінацію 
//      - вішає відповідні слухачі


export function renderPagination({
    page = 1, 
    totalCountItem = 0, 
    itemPerPage = 20,
    ancestorID,
    insertPlace = 'append',
  }) {
  //      - з'ясовуємо, яка поточна сторінка
  const currentPage = page;
  //      - з'ясовуємо скільки сторінок міститиме наша пагінація
  const countAllPage = countPage(totalCountItem = 1, itemPerPage = 20);
  //      - перевіряємо, чи входить значення нашої стоорінки у правильний інтервал
  if (currentPage < 1 || currentPage > countAllPage) {
    console.warn("ERROR in renderPagination from paginationRender: currentPage has an invalid value");
    return;
  }

  // створюємо контейнер для елементів пагінації 
  if (ancestorID) {
    console.warn("ERROR in ERROR in renderPagination from paginationRender: invalid value of ancestor's ID for pagination container");
    return;    
  }
  createPaginationButtonsContainer(insertPlace, ancestorID);

  // визначаємо, які елементи пагінації актуальні
  const paginationActualElements = defineActualPaginationElemetsTablet(currentPage,countAllPage);

  //вставляємо актуальні елементи пагінації
  createPaginationButtonsList(paginationActualElements);

  //

  //      - рисує пагінацію 
  // renderPagination(currentPage, countAllPage);
  //      - вішає відповідні слухачі
  // addEventListenersPagination ();
};

// < 1 ... 4 5 |6| 7 8 ... > 
function defineActualPaginationElemetsTablet (currentPage, countAllPage) {

  // якщо функція приймає не два аргументи
  if (arguments.length !== 2) {
    console.warn("ERROR in renderPaginationTablet from pagimationRender.js: invalid count of arguments");
    return null;
  }

  // якщо значення поточної сторінки перевищує заагльну кількість сторінок 
  if (currentPage > countAllPage) {
    console.warn("ERROR in renderPaginationTablet from pagimationRender.js: invalid type of arguments");
    return null;
  }

  // Якщо в бібліотеці лише одна сторінка
  if (countAllPage === 1) {
    return null;
  }

  // поточний елемент пагінації для включення у відрисовку
  let counterElements = 0;

  // масив елементів пагінації для відрисовування
  const listPaginationButtom = [];

  // нижня межа, з якої починає відображатися повна пагінація (з трикрапкою)
  const bottomLimitFullPagination = 5;
  // верхня межа, з якої починає відображатися повна пагінація (з трикрапкою)
  const upLimitFullPagination = 5;

  // скільки сторінок до першої сторінки
  const leftPagesBottom = currentPage - 1;
  // скільки сторінок до останньої сторінки
  const leftPagesUp = countAllPage - currentPage;

  //які елементи в пагінації необхідно відображати ліворуч
  // якщо між поточною сторінкою(currentPage) та початковою сторінкою (1)
  // більше-рівне, ніж 1 сторінка < 1 |2| 
  if (leftPagesBottom >= 1) {
    // рисуємо стрілку ліворуч
    listPaginationButtom.push('bottom-arrow');
    counterElements++;

    // рисуємо першу сторінку
    listPaginationButtom.push(`page-${counterElements}`);
    counterElements++;
    //????

    // якщо між поточною сторінкою(currentPage) та початковою сторінкою (1)
    // більше, ніж 3 сторінки < 1 ... 4 5 |6| 
    if (leftPagesBottom >= bottomLimitFullPagination) {
      //рисуємо три крапки ліворуч
      listPaginationButtom.push('seterBottom');

      //додали ще одну кнопку
      counterElements++;
      //???? 
      for (let i = currentPage - 2; i < currentPage; i++) {
        listPaginationButtom.push(`page-${i}`);
      }
    } else {
      // якщо між поточною сторінкою(currentPage) та початковою сторінкою (1)
      // менше-рівне, ніж 3 сторінки < 1 2 3 4 |5| 

      // даємо назви всім кнопкам
      for (let i = counterElements; i < currentPage; i++) {
        listPaginationButtom.push(`page-${i}`);
      }

    }
    listPaginationButtom.push('currentPage');
    counterElements = listPaginationButtom.length;
  } else {
    // якщо поточна сторінка(currentPage) є початковою сторінкою (1)
    listPaginationButtom[counterElements] = `currentPage`;
  }

  // які елементи пагінації необхідно відображати праворуч
  // якщо поточна сторінка(currentPage) не є останньою сторінкою (countAllPage)
  if (leftPagesUp > 0) {
    // даємо назви всім кнопкам

    // якщо між поточною сторінкою(currentPage) та останньою сторінкою (countAllPage)
    // більше, ніж 3 сторінки |5| 6 7 ... 10 > 
    if (leftPagesUp >= upLimitFullPagination) {
      for (let i = currentPage + 1; i < currentPage + 3; i++) {
        listPaginationButtom.push(`page-${i}`);
      }
      // рисуємо три крапки праворуч
      listPaginationButtom.push('seterUp');

      //?????
    } else {
      // якщо між поточною сторінкою(currentPage) та останньою сторінкою (countAllPage)
      // менше-рівне, ніж 3 сторінки |5| 6 7 8 9 > 

      for (let i = currentPage + 1; i <= countAllPage; i++) {
        listPaginationButtom.push(`page-${i}`);
      }
    }
    // рисуємо стрілку праворуч
    listPaginationButtom.push('up-arrow')
  } else {
    // якщо поточна сторінка(currentPage) є останньою сторінкою (countAllPage)

  }
  return listPaginationButtom;
};

/*countPage 
do: Розраховує загальну кількість сторінок, якщо відомо 
    скільки всього елементів, 
    скільки елементів повинно відображатися на 1 сторінці
in: - totalCountItem - загальна кількість елементів
    - itemPerPage - елементів на 1 сторінці
out:-кількість сторінок
 */
function countPage(totalCountItem = 1, itemPerPage = 20) {
  let countAllPage = 1;
  if (totalCountItem === 0) {
    return countAllPage;
  }
  const countFullPage = Math.floor(totalCountItem / itemPerPage);
  countAllPage = countFullPage;
  if (totalCountItem % itemPerPage === 0) {
    return countAllPage;
  }
  return countAllPage + 1;
}

function createPaginationButtonsList(arrayNames) {
  if (!arrayNames) {
    console.warn('ERROR in createPaginationButtons from paginationRender.js: invalid type of argument.');
    return;
  }
  if (arrayNames.length === 0) {
    console.warn('ERROR in createPaginationButtons from paginationRender.js: array-argument is empty.');
    return;
  }
  
  const paginationButtonItemsElementsArray = [];
  for (let i = 0; i < arrayNames.length; i++) {
    const settingsButton = {
      classList: 'pagination-button `${arrayNames[i]}` ',
      id: arrayNames[i],
    }
    const paginationButtonElement = createElement('button', settingsButton);

    const settingsButtonItem = {
      classList: 'pagination-button__item',
      childNodes : [
        paginationButtonElement,
      ],
    }
    const paginationButtonItemElement = createElement('li', settingsButtonItem);
    paginationButtonItemsElementsArray.push(paginationButtonItemElement);
  }
  const settingsButtonsList = {
    classList: 'pagination-button__list list-no-ls',
    childNodes : [paginationButtonItemsElementsArray],
  }
  const paginationButtonItemListElement = createElement ('ul', settingsButtonsList); 

  const paginationButtonsContainer = document.querySelector('#pagination-button__list-container');
  paginationButtonsContainer.append(paginationButtonItemListElement);
}

function createPaginationButtonsContainer (insertPlace, ancestorID) {
  const ancestorElement = document.querySelector(`#${ancestorID}`);
  const settingsButtonsContainer = {
    classList: 'pagination-button__list-container',
    id : 'pagination-button__list-container',
  }
  const paginationButtonsContainer = createElement('div', settingsButtonsContainer);
  ancestorElement.insertAdjacentElement(insertPlace, paginationButtonsContainer);
}

//////////////////////
const listItemsRef = [];
const paginationButtonsRef = Object.create(null); // like = {};
const filmContainerRef = document.querySelector('.film-list__container');
const buttonsListRef = document.createElement('ul');


// // names of Buttons to creation // Иимена создаваемых кнопок
// const paginationButtonNames = [
//   'prevPage',
//   'firstPage',
//   'pageSeterFirst',
//   'twiceBefore',
//   'onceBefore',
//   'currentPage',
//   'onceAfter',
//   'twiceAfter',
//   'pageSeterSecond',
//   'lastPage',
//   'nextPage',
// ];

createPagButtons();

export const pagination = (currentPage) => {
  pagButtonDecorator(currentPage);
  pagVisuallyHandler(currentPage);

};


export const moviePagination = new Pagination({
  total: 500,
  onChange(currentPage) {
    pagination(currentPage);
  },
});

// creation (in the memory) list items contained button with ID like a name in inputed array
export function createPagButtons() {
  for (let index = 0; index < paginationButtonNames.length; index++) {
    const btn = createElement('button', {
      classList: 'pagination__button',
      id: paginationButtonNames[index],
    });
    const btnName = paginationButtonNames[index]; // Add reference for current button into ref list
    paginationButtonsRef[btnName] = btn;
    listItemsRef.push(
      createElement('li', {
        // Add list items with created buttons
        classList: 'list-item',
        childNodes: [btn],
      }),
    );
  }

  buttonsListRef.append(...listItemsRef); // listItemsRef = [];
  filmContainerRef.append(buttonsListRef);
  buttonsListRef.classList.add('pagination__buttons-list');
  buttonsListRef.classList.add('list-no-ls');
  paginationButtonsRef.pageSeterFirst.textContent = '...';
  paginationButtonsRef.pageSeterSecond.textContent = '...';
}

export function pagButtonDecorator(page = 1, total = 500) {
  paginationButtonsRef.prevPage.classList.add('pagination__button__prev');
  paginationButtonsRef.nextPage.classList.add('pagination__button__next');
  paginationButtonsRef.currentPage.classList.add('pagination__button__current');

  paginationButtonsRef.prevPage.classList.add('visually-hidden');
  paginationButtonsRef.firstPage.classList.add('visually-hidden');
  paginationButtonsRef.pageSeterFirst.classList.add('visually-hidden');
  paginationButtonsRef.twiceBefore.classList.add('visually-hidden');
  paginationButtonsRef.onceBefore.classList.add('visually-hidden');

  paginationButtonsRef.firstPage.textContent = 1;
  paginationButtonsRef.twiceBefore.textContent = `${page - 2}`;
  paginationButtonsRef.onceBefore.textContent = `${page - 1}`;
  paginationButtonsRef.currentPage.textContent = page;
  paginationButtonsRef.onceAfter.textContent = `${page + 1}`;
  paginationButtonsRef.twiceAfter.textContent = `${page + 2}`;
  paginationButtonsRef.lastPage.textContent = moviePagination.total;
  filmContainerRef.append(buttonsListRef)
}

/*
function pagVisuallyHandler(page, total = 500) {
  pagVisuallyChecker(paginationButtonsRef.firstPage, page, total, 1);
  pagVisuallyChecker(paginationButtonsRef.twiceBefore, page, total, 2);
  pagVisuallyChecker(paginationButtonsRef.onceBefore, page, total, 1);
  pagVisuallyChecker(paginationButtonsRef.onceAfter, page, total, 1);
  pagVisuallyChecker(paginationButtonsRef.twiceAfter, page, total, 2);
  pagVisuallyChecker(paginationButtonsRef.lastPage, page, total, 1);
}
function pagVisuallyChecker(btn, page, total, condition) {
  if (page <= condition || page >= total - condition) btn.classList.add('visually-hidden');
  if (page > condition || page < total - condition) btn.classList.remove('visually-hidden');
}*/
function pagVisuallyHandler(page, total = 500) {
  if (page <= 1) paginationButtonsRef.prevPage.classList.add('visually-hidden');
  if (page <= 1) paginationButtonsRef.firstPage.classList.add('visually-hidden');
  if (page <= 1) paginationButtonsRef.pageSeterFirst.classList.add('visually-hidden');
  if (page <= 2) paginationButtonsRef.twiceBefore.classList.add('visually-hidden');
  if (page <= 1) paginationButtonsRef.onceBefore.classList.add('visually-hidden');
  if (page > total - 1) paginationButtonsRef.onceAfter.classList.add('visually-hidden');
  if (page > total - 2) paginationButtonsRef.twiceAfter.classList.add('visually-hidden');
  if (page > total - 2) paginationButtonsRef.pageSeterSecond.classList.add('visually-hidden');
  if (page > total - 1) paginationButtonsRef.lastPage.classList.add('visually-hidden');
  if (page > total - 1) paginationButtonsRef.nextPage.classList.add('visually-hidden');
  if (page > 1) paginationButtonsRef.prevPage.classList.remove('visually-hidden');
  if (page > 1) paginationButtonsRef.firstPage.classList.remove('visually-hidden');
  if (page > 1) paginationButtonsRef.pageSeterFirst.classList.remove('visually-hidden');
  if (page > 2) paginationButtonsRef.twiceBefore.classList.remove('visually-hidden');
  if (page > 1) paginationButtonsRef.onceBefore.classList.remove('visually-hidden');
  if (page < total - 1) paginationButtonsRef.onceAfter.classList.remove('visually-hidden');
  if (page < total - 2) paginationButtonsRef.twiceAfter.classList.remove('visually-hidden');
  if (page < total - 2) paginationButtonsRef.pageSeterSecond.classList.remove('visually-hidden');
  if (page < total - 1) paginationButtonsRef.lastPage.classList.remove('visually-hidden');
  if (page < total - 1) paginationButtonsRef.nextPage.classList.remove('visually-hidden');
}
//////////////////// Add Event Listener //////////////////////////////////

buttonsListRef.addEventListener('click', event => {
  if (event.target === paginationButtonsRef.prevPage) {
    moviePagination.prevPage();
  }
  if (event.target === paginationButtonsRef.nextPage) {
    moviePagination.nextPage();
  }
  //////////////////////////////////////////////////
  if (event.target === paginationButtonsRef.onceBefore) {
    moviePagination.onceBefore();
  }
  if (event.target === paginationButtonsRef.twiceBefore) {
    moviePagination.twiceBefore();
  }
  if (event.target === paginationButtonsRef.onceAfter) {
    moviePagination.onceAfter();
  }
  if (event.target === paginationButtonsRef.twiceAfter) {
    moviePagination.twiceAfter();
  }
  ////////////////////////////////////////////////////
  //   if (event.target === paginationButtonsRef.currentPage) {moviePagination.prevPage();}
  //   if (event.target === ) {moviePagination.prevPage();}
  //   if (event.target === ) {moviePagination.prevPage();}
});
