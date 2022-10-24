import {createHeaderProfile, createFilmCard, createMainNavigation, createMainSort, createPopupFilmDetails, createSectionFilms, createTopFilmsList, createButtonShowMoreFilms} from "./templates-index"
import {FILMS_COUNT, TOP_CATEGORIES_COUNT, TOP_FILMS_COUNT} from "./variables.js";

// Функция для рендеринга элементов
const rendering = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const mainHeader = document.querySelector(`.header`);
const main = document.querySelector(`.main`);

rendering(mainHeader, createHeaderProfile(), `beforeend`);
rendering(main, createMainNavigation(), `beforeend`);
rendering(main, createMainSort(), `beforeend`);
rendering(main, createSectionFilms(), `beforeend`);

const filmsSection = document.querySelector(`.films`);
const filmsList = filmsSection.querySelector(`.films-list`);
const filmsListContainer = filmsSection.querySelector(`.films-list__container`);

for (let i = 0; i < FILMS_COUNT; i++) {
  rendering(filmsListContainer, createFilmCard(), `beforeend`);
}

rendering(filmsList, createButtonShowMoreFilms(), `beforeend`);

for (let i = 0; i < TOP_CATEGORIES_COUNT; i++) {
  rendering(filmsSection, createTopFilmsList(), `beforeend`);
}

const topFilmsList = filmsSection.querySelectorAll(`.films-list--extra`);

topFilmsList.forEach(element => {
  const topFilmsLictContainer = element.querySelector(`.films-list__container`);
  for (let i = 0; i < TOP_FILMS_COUNT; i++) {
    rendering(topFilmsLictContainer, createFilmCard(), `beforeend`);
  }
});


// Рендеринг popup - Детальная информация о фильме
// rendering(document.body, createPopupFilmDetails(), `beforeend`);
