import { createElement } from './custom-create-element';
//import { Pagination } from './pagination';

/* renderPagination
do: 1) программа відмальовування Бібліотеки викликає відрисовку пагінації
      - передає номер сторінки
      - передає загальну кількість сторінок
    2) програма відрисовки пагінації:
     - з'ясовуємо, яка поточна сторінка  
     - з'ясовуємо скільки сторінок міститиме наша пагінація
     - перевіряємо, чи входить значення нашої стоорінки у правильний інтервал
     - рисує пагінацію  
in: - об'єкт з налаштуваннями {
      - page = 1 - поточна сторінка, за замовчуванням 1
      - totalCountItem = 0 - кількість елементів у бібліотеці
      - itemPerPage = 20 - кількість елементів на одній сторінці
      - ancestorID - ID пращура, в якому ми будемо відрисовувати пагінацію
      - insertPlace - місце пращура, куди и будемо вставляти пагінацію 
          Додавання елементу відбувається за допомогою методу insertAdjusmentElement
          Варіанти: <> "beforeEnd"  <> "afterEnd"  <> "beforeStart"  <> "afterStart"
      }
*/
export function renderPagination({
  page = 1,
  totalCountItem = 0,
  itemPerPage = 20,
  ancestorID,
  insertPlace = "beforeEnd",
}) {

  // перевіряємо, чи є що відрисовувати;
  if (totalCountItem === 0) {
    console.warn("ERROR in renderPagination from paginationRender: no items to rendering");
    return;
  }
  
  //      - з'ясовуємо, яка поточна сторінка
  const currentPage = Number(page);


  //      - з'ясовуємо скільки сторінок міститиме наша пагінація
  const countAllPage = countPage(totalCountItem, itemPerPage);

  //      - перевіряємо, чи входить значення нашої стоорінки у правильний інтервал
  if (currentPage < 1 || currentPage > countAllPage) {
    console.warn("ERROR in renderPagination from paginationRender: currentPage has an invalid value");
    return;
  }

  // створюємо контейнер для елементів пагінації 
  if (!ancestorID) {
    console.warn("ERROR in ERROR in renderPagination from paginationRender: invalid value of ancestor's ID for pagination container");
    return;
  }
  createPaginationButtonsContainer(insertPlace, ancestorID);

  // !!!!!!!!!!!!!!!!!!!!!!!  
  // Ось тут робимо вилку на різні розміри в'юпорта
  // і по умові визиваємо або для планшета (десктопа), або для мобілки 
  // це мають бути дві різні функції 
  // PaginationElemetsTablet or PaginationElemetsMobile
  // А якщо ми захочемо реалізувати кілька нових пагінацій ще й для екранів десктопів різних розмірів.
  // ми просто помремо в if
  // !!!!!!!!!!!!!!!!!!!!!!!
  
  // визначаємо, які елементи пагінації актуальні
  const paginationActualElements = PaginationElemets(currentPage, countAllPage);

  //вставляємо актуальні елементи пагінації
  createPaginationButtonsList(paginationActualElements, currentPage);

  //

  //      - рисує пагінацію 
  // renderPagination(currentPage, countAllPage);

};

// < 1 ... 4 5 |6| 7 8 ... > 
function PaginationElemets(currentPage, countAllPage) {
  // якщо функція приймає не два аргументи
  if (arguments.length !== 2) {
    console.warn("ERROR in renderPaginationTablet from pagimationRender.js: invalid count of arguments");
    return null;
  }

  // якщо значення поточної сторінки перевищує загальну кількість сторінок 
  if (currentPage > countAllPage) {
    console.warn("ERROR in renderPaginationTablet from pagimationRender.js: invalid type of arguments");
    return null;
  }

  // Якщо в бібліотеці лише одна сторінка
  if (countAllPage === 1) {
    return null;
  }
      // отримуємо тип пристрою за величиниою viewport
      let viewportSize
      document.documentElement.clientWidth >= document.documentElement.clientHeight ? viewportSize = document.documentElement.clientWidth : viewportSize = document.documentElement.clientHeight;
      // console.log(viewportSize)
  // поточний елемент пагінації для включення у відрисовку
  let counterElements = 0;

  // масив елементів пагінації для відрисовування
  const listPaginationButtom = [];
  // нижня межа, з якої починає відображатися повна пагінація (з трикрапкою)
  let bottomLimitFullPagination = 5;
  // верхня межа, з якої починає відображатися повна пагінація (з трикрапкою)
  let upLimitFullPagination = 5;
  
    if (viewportSize >= 768) {
        bottomLimitFullPagination = 3;  // якщо мобільна версія малюємо менше кнопок  
        upLimitFullPagination = 3;      // якщо мобільна версія малюємо менше кнопок
    }
    
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
    if (viewportSize >= 768){
    listPaginationButtom.push(`page-${counterElements}`);
    counterElements++;
    } 
    //????

    // якщо між поточною сторінкою(currentPage) та початковою сторінкою (1)
    // більше, ніж 3 сторінки < 1 ... 4 5 |6| 
    if (leftPagesBottom >= bottomLimitFullPagination) {
      //рисуємо три крапки ліворуч
      if (viewportSize >= 768) {
      listPaginationButtom.push('seterBottom');
      }
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
    // та якщо - то є мобільна версія
    // if (leftPagesUp >= upLimitFullPagination && viewportSize >= 768) {
    if (leftPagesUp >= upLimitFullPagination ) {
      for (let i = currentPage + 1; i < currentPage + 3; i++) {
        listPaginationButtom.push(`page-${i}`);
      }
      // рисуємо три крапки праворуч
      if (viewportSize >= 768) {
      listPaginationButtom.push('seterUp');
      }
      //?????
    } else {
      // якщо між поточною сторінкою(currentPage) та останньою сторінкою (countAllPage)
      // менше-рівне, ніж 3 сторінки |5| 6 7 8 9 > 

      for (let i = currentPage + 1; i <= countAllPage-1; i++) {
        listPaginationButtom.push(`page-${i}`);
      }
    }
    //остання сторінка
    if (viewportSize >= 768) {
    listPaginationButtom.push(`page-${countAllPage}`);
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

/* getPageNumber
do: - exclude page number from string "value" like 'page-1'
in: - string "value"
out: - if (pageNumber is number) return pageNumber 
      else return NaN
 */
export function getPageNumber(value) {
  const arrayOfValueElements = value.split('-');
  const pageNumber = parseInt(arrayOfValueElements.pop());
  return pageNumber;
}

/* createPaginationButtonsList
do: - Створює в контейнері div#pagination-button__list-container
      розмітку для пагінації, типу
      <ul> li li li </ul>
      < 1 ... 4 5 |6| 7 8 ... > 
    - кнопки *** та поточна сторінки мають клас "pagination-button--passive"
    - кнопки "стрілки" та номера сторінок мають клас pagination-button--active
    - номера сторінок зберігаються в атрибуті "data-pageNumber" у вигляді string
    - пасивні кнопки такого атрибута не мають
in: - arrayNames - масив з назвами кнопок пагінації
    - currentPage - значення поточної сторінки
 */
function createPaginationButtonsList(arrayNames, currentPage) {
  if (!arrayNames) {
    console.warn('ERROR in createPaginationButtons from paginationRender.js: invalid type of argument.');
    return;
  }
  if (arrayNames.length === 0) {
    console.warn('ERROR in createPaginationButtons from paginationRender.js: array-argument is empty.');
    return;
  }

  //  масив для зберігання елементів списку (пагінації)
  const paginationButtonItemsElementsArray = [];

  // створення елементів пагінації з атрибутами
  for (let i = 0; i < arrayNames.length; i++) {
    // отримуємо номер сторінки
    const pageNumber = getPageNumber(arrayNames[i]);
    // console.log(pageNumber);
    let settingsButton = {};
    if (!isNaN(pageNumber)) { // якщо це не NaN (результат parseInt)
      settingsButton = {
        classList: 'pagination-button pagination-button--active',
        attributes:
          [
            { key: 'data-pageNumber', value: `${pageNumber}` },
          ],
        childNodes: [
          `${pageNumber}`,
        ]
      }
    } else { // якщо це NaN 
      if (arrayNames[i] === "bottom-arrow") { //якщо це стрілка вниз
        settingsButton = {
          classList: 'pagination-button pagination-button--active bottom-arrow',
          attributes:
            [
              { key: 'data-pageNumber', value: `${currentPage - 1}` },
            ],
          childNodes: [
            ''
          ]
        }
      }
      if (arrayNames[i] === "up-arrow") { // якщо це стрілка вгору
        settingsButton = {
          classList: 'pagination-button pagination-button--active up-arrow',
          attributes:
            [
              { key: 'data-pageNumber', value: `${currentPage + 1}` },
            ],
          childNodes: [
            ''
          ]
        }
      }
      if (arrayNames[i] === "seterBottom") { // якщо це сеттер
        settingsButton = {
          classList: 'pagination-button pagination-button--passive seterBottom',
          childNodes: [
            '···'
          ]
        }
      }
      if (arrayNames[i] === "seterUp") { // якщо це сеттер
        settingsButton = {
          classList: 'pagination-button pagination-button--passive seterUp',
          childNodes: [
            '···'
          ]
        }
      }
      if (arrayNames[i] === "currentPage") { // якщо це поточна сторінка
        settingsButton = {
          classList: 'pagination-button pagination-button--passive currentPage',
          childNodes: [
            Number(currentPage).toString(),
          ]
        }
      }
    }

    const paginationButtonElement = createElement('button', settingsButton);
    // створення елементів списку
    const settingsButtonItem = {
      classList: 'pagination-button__item',
      childNodes: [
        paginationButtonElement,
      ],
    }
    const paginationButtonItemElement = createElement('li', settingsButtonItem);
    // додаємо елемент списку в масив
    paginationButtonItemsElementsArray.push(paginationButtonItemElement);
  }
  // console.log("value", paginationButtonItemsElementsArray);
  
  //створення списку, що міститиме елементи пагінації
  const settingsButtonsList = {
    classList: 'pagination-button__list list-no-ls',
    childNodes: paginationButtonItemsElementsArray,
  }
    const paginationButtonItemListElement = createElement('ul', settingsButtonsList);
  
  // виділення DOM-елементу з ID = #pagination-button__list-container;
  const paginationButtonsContainer = document.querySelector('#pagination-button__list-container');
  // додавання до DOM-елементу з ID = #pagination-button__list-container списку елементів пагінації
  paginationButtonsContainer.append(paginationButtonItemListElement);
}
/* createPaginationButtonsContainer
do: створюємо контейнер div#pagination-button__list-container
      в DOM-елементі з ID = ancestorID, місце додавання визначається "insertPlace"
in: - ancestorID - ID DOM-елемента, в якому ми хочемо розмістити нашу пагінацію
    - insertPlace - місце додавання контейнера div#pagination-button__list-container
        в DOM-елемент, який є для нього пращуром
 */
export function createPaginationButtonsContainer(insertPlace, ancestorID) {
  const ancestorElement = document.querySelector(`#${ancestorID}`);
  const prevContainer = document.querySelector('#pagination-button__list-container');
  if (prevContainer) {
    prevContainer.remove();
  }
  const settingsButtonsContainer = {
    classList: 'pagination-button__list-container',
    id: 'pagination-button__list-container',
  }
  const paginationButtonsContainer = createElement('div', settingsButtonsContainer);
  ancestorElement.insertAdjacentElement(insertPlace, paginationButtonsContainer);
}
