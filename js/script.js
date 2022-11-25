const themeList = document.querySelector(".theme-list");
const themeButtons = themeList.querySelectorAll(".theme-button");
const viewList = document.querySelector(".card-view-buttons");
const viewButtons = viewList.querySelectorAll(".card-view-button");
const cardsList = document.querySelector(".cards");
const root = document.documentElement;

const themeListClickHandler = (evt) => {
  const button = evt.target.closest("button");

  if (!button) {
    return;
  }

  themeButtons.forEach((btn) => {
    btn.classList.toggle("active", btn === button);
  });

  root.dataset.themeName = button.dataset.themeSet;
};

const viewListClickHandler = (evt) => {
    const button = evt.target.closest("button");

  if (!button) {
    return;
  }

  viewButtons.forEach((btn) => {
    btn.classList.toggle("active", btn === button);
  });

  cardsList.className = "cards";
  cardsList.classList.add(`${button.dataset.view}`)



}

themeList.addEventListener("click", themeListClickHandler);
viewList.addEventListener("click", viewListClickHandler)
