/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/rendering-DOM-elements.js":
/*!**************************************************!*\
  !*** ./src/components/rendering-DOM-elements.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates-index */ "./src/components/templates-index.js");
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables.js */ "./src/components/variables.js");



// Функция для рендеринга элементов
const rendering = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const mainHeader = document.querySelector(`.header`);
const main = document.querySelector(`.main`);

rendering(mainHeader, (0,_templates_index__WEBPACK_IMPORTED_MODULE_0__.createHeaderProfile)(), `beforeend`);
rendering(main, (0,_templates_index__WEBPACK_IMPORTED_MODULE_0__.createMainNavigation)(), `beforeend`);
rendering(main, (0,_templates_index__WEBPACK_IMPORTED_MODULE_0__.createMainSort)(), `beforeend`);
rendering(main, (0,_templates_index__WEBPACK_IMPORTED_MODULE_0__.createSectionFilms)(), `beforeend`);

const filmsSection = document.querySelector(`.films`);
const filmsList = filmsSection.querySelector(`.films-list`);
const filmsListContainer = filmsSection.querySelector(`.films-list__container`);

for (let i = 0; i < _variables_js__WEBPACK_IMPORTED_MODULE_1__.FILMS_COUNT; i++) {
  rendering(filmsListContainer, (0,_templates_index__WEBPACK_IMPORTED_MODULE_0__.createFilmCard)(), `beforeend`);
}

rendering(filmsList, (0,_templates_index__WEBPACK_IMPORTED_MODULE_0__.createButtonShowMoreFilms)(), `beforeend`);

for (let i = 0; i < _variables_js__WEBPACK_IMPORTED_MODULE_1__.TOP_CATEGORIES_COUNT; i++) {
  rendering(filmsSection, (0,_templates_index__WEBPACK_IMPORTED_MODULE_0__.createTopFilmsList)(), `beforeend`);
}

const topFilmsList = filmsSection.querySelectorAll(`.films-list--extra`);

topFilmsList.forEach(element => {
  const topFilmsLictContainer = element.querySelector(`.films-list__container`);
  for (let i = 0; i < _variables_js__WEBPACK_IMPORTED_MODULE_1__.TOP_FILMS_COUNT; i++) {
    rendering(topFilmsLictContainer, (0,_templates_index__WEBPACK_IMPORTED_MODULE_0__.createFilmCard)(), `beforeend`);
  }
});


// Рендеринг popup - Детальная информация о фильме
// rendering(document.body, createPopupFilmDetails(), `beforeend`);


/***/ }),

/***/ "./src/components/templates-index.js":
/*!*******************************************!*\
  !*** ./src/components/templates-index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createButtonShowMoreFilms": () => (/* binding */ createButtonShowMoreFilms),
/* harmony export */   "createFilmCard": () => (/* binding */ createFilmCard),
/* harmony export */   "createHeaderProfile": () => (/* binding */ createHeaderProfile),
/* harmony export */   "createMainNavigation": () => (/* binding */ createMainNavigation),
/* harmony export */   "createMainSort": () => (/* binding */ createMainSort),
/* harmony export */   "createPopupFilmDetails": () => (/* binding */ createPopupFilmDetails),
/* harmony export */   "createSectionFilms": () => (/* binding */ createSectionFilms),
/* harmony export */   "createTopFilmsList": () => (/* binding */ createTopFilmsList)
/* harmony export */ });

const createHeaderProfile = () => {
  return (`
  <section class="header__profile profile">
  <p class="profile__rating">Movie Buff</p>
  <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`
  );
};

const createMainNavigation = () => {
  return (`
  <nav class="main-navigation">
  <div class="main-navigation__items">
    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
    <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
    <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
  </div>
  <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`
  );
};

const createMainSort = () => {
  return (`
  <ul class="sort">
  <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
  <li><a href="#" class="sort__button">Sort by date</a></li>
  <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`
  );
};

const createSectionFilms = () => {
  return (`
  <section class="films">
  <section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    <div class="films-list__container"</div>
  </section>
  </section>`
  );
};

const createFilmCard = () => {
  return (`
  <article class="film-card">
      <h3 class="film-card__title">The Dance of Life</h3>
      <p class="film-card__rating">8.3</p>
      <p class="film-card__info">
          <span class="film-card__year">1929</span>
          <span class="film-card__duration">1h 55m</span>
          <span class="film-card__genre">Musical</span>
      </p>
      <img src="./images/posters/the-dance-of-life.jpg" alt="" class="film-card__poster">
      <p class="film-card__description">Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…</p>
      <a class="film-card__comments">5 comments</a>
      <form class="film-card__controls">
          <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
          <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
          <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>
      </article>`
  );
};

const createTopFilmsList = () => {
  return (`
  <section class="films-list--extra">
   <h2 class="films-list__title">Top rated</h2>
   <div class="films-list__container"></div>
  </section>`
  );
};

const createPopupFilmDetails = () => {
  return (`
  <section class="film-details">
<form class="film-details__inner" action="" method="get">
  <div class="form-details__top-container">
    <div class="film-details__close">
      <button class="film-details__close-btn" type="button">close</button>
    </div>
    <div class="film-details__info-wrap">
      <div class="film-details__poster">
        <img class="film-details__poster-img" src="./images/posters/the-great-flamarion.jpg" alt="">

        <p class="film-details__age">18+</p>
      </div>

      <div class="film-details__info">
        <div class="film-details__info-head">
          <div class="film-details__title-wrap">
            <h3 class="film-details__title">The Great Flamarion</h3>
            <p class="film-details__title-original">Original: The Great Flamarion</p>
          </div>

          <div class="film-details__rating">
            <p class="film-details__total-rating">8.9</p>
          </div>
        </div>

        <table class="film-details__table">
          <tr class="film-details__row">
            <td class="film-details__term">Director</td>
            <td class="film-details__cell">Anthony Mann</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Writers</td>
            <td class="film-details__cell">Anne Wigton, Heinz Herald, Richard Weil</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Actors</td>
            <td class="film-details__cell">Erich von Stroheim, Mary Beth Hughes, Dan Duryea</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Release Date</td>
            <td class="film-details__cell">30 March 1945</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Runtime</td>
            <td class="film-details__cell">1h 18m</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Country</td>
            <td class="film-details__cell">USA</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Genres</td>
            <td class="film-details__cell">
              <span class="film-details__genre">Drama</span>
              <span class="film-details__genre">Film-Noir</span>
              <span class="film-details__genre">Mystery</span></td>
          </tr>
        </table>

        <p class="film-details__film-description">
          The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback. The Great Flamarion (Erich von Stroheim) is an arrogant, friendless, and misogynous marksman who displays his trick gunshot act in the vaudeville circuit. His show features a beautiful assistant, Connie (Mary Beth Hughes) and her drunken husband Al (Dan Duryea), Flamarion's other assistant. Flamarion falls in love with Connie, the movie's femme fatale, and is soon manipulated by her into killing her no good husband during one of their acts.
        </p>
      </div>
    </div>

    <section class="film-details__controls">
      <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
      <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

      <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
      <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

      <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
      <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
    </section>
  </div>

  <div class="form-details__bottom-container">
    <section class="film-details__comments-wrap">
      <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">4</span></h3>

      <ul class="film-details__comments-list">
        <li class="film-details__comment">
          <span class="film-details__comment-emoji">
            <img src="./images/emoji/smile.png" width="55" height="55" alt="emoji-smile">
          </span>
          <div>
            <p class="film-details__comment-text">Interesting setting and a good cast</p>
            <p class="film-details__comment-info">
              <span class="film-details__comment-author">Tim Macoveev</span>
              <span class="film-details__comment-day">2019/12/31 23:59</span>
              <button class="film-details__comment-delete">Delete</button>
            </p>
          </div>
        </li>
        <li class="film-details__comment">
          <span class="film-details__comment-emoji">
            <img src="./images/emoji/sleeping.png" width="55" height="55" alt="emoji-sleeping">
          </span>
          <div>
            <p class="film-details__comment-text">Booooooooooring</p>
            <p class="film-details__comment-info">
              <span class="film-details__comment-author">John Doe</span>
              <span class="film-details__comment-day">2 days ago</span>
              <button class="film-details__comment-delete">Delete</button>
            </p>
          </div>
        </li>
        <li class="film-details__comment">
          <span class="film-details__comment-emoji">
            <img src="./images/emoji/puke.png" width="55" height="55" alt="emoji-puke">
          </span>
          <div>
            <p class="film-details__comment-text">Very very old. Meh</p>
            <p class="film-details__comment-info">
              <span class="film-details__comment-author">John Doe</span>
              <span class="film-details__comment-day">2 days ago</span>
              <button class="film-details__comment-delete">Delete</button>
            </p>
          </div>
        </li>
        <li class="film-details__comment">
          <span class="film-details__comment-emoji">
            <img src="./images/emoji/angry.png" width="55" height="55" alt="emoji-angry">
          </span>
          <div>
            <p class="film-details__comment-text">Almost two hours? Seriously?</p>
            <p class="film-details__comment-info">
              <span class="film-details__comment-author">John Doe</span>
              <span class="film-details__comment-day">Today</span>
              <button class="film-details__comment-delete">Delete</button>
            </p>
          </div>
        </li>
      </ul>

      <div class="film-details__new-comment">
        <div for="add-emoji" class="film-details__add-emoji-label"></div>

        <label class="film-details__comment-label">
          <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
        </label>

        <div class="film-details__emoji-list">
          <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
          <label class="film-details__emoji-label" for="emoji-smile">
            <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
          </label>

          <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
          <label class="film-details__emoji-label" for="emoji-sleeping">
            <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
          </label>

          <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
          <label class="film-details__emoji-label" for="emoji-puke">
            <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
          </label>

          <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
          <label class="film-details__emoji-label" for="emoji-angry">
            <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
          </label>
        </div>
      </div>
    </section>
  </div>
</form>
</section>`
  );
};

const createButtonShowMoreFilms = () => {
  return (`<button class="films-list__show-more">Show more</button>`);
};






/***/ }),

/***/ "./src/components/variables.js":
/*!*************************************!*\
  !*** ./src/components/variables.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FILMS_COUNT": () => (/* binding */ FILMS_COUNT),
/* harmony export */   "TOP_CATEGORIES_COUNT": () => (/* binding */ TOP_CATEGORIES_COUNT),
/* harmony export */   "TOP_FILMS_COUNT": () => (/* binding */ TOP_FILMS_COUNT)
/* harmony export */ });
const FILMS_COUNT = 5;
const TOP_CATEGORIES_COUNT = 2;
const TOP_FILMS_COUNT = 2;





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_rendering_DOM_elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/rendering-DOM-elements.js */ "./src/components/rendering-DOM-elements.js");


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map