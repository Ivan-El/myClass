const themeList = document.querySelector(".theme-list");
const themeButtons = themeList.querySelectorAll(".theme-button");
const viewList = document.querySelector(".card-view-buttons");
const viewButtons = viewList.querySelectorAll(".card-view-button");
const cardsList = document.querySelector(".cards");
const root = document.documentElement;

const toggleActive = (evt, list) => {
  const button = evt.target.closest("button");

  if (!button) {
    return null;
  }

  list.forEach((btn) => {
    btn.classList.toggle("active", btn === button);
  });

  return button;
};

const themeListClickHandler = (evt) => {
  let button;

  if (toggleActive(evt, themeButtons)) {
    button = toggleActive(evt, themeButtons);
    root.dataset.themeName = button.dataset.themeSet;
  } else {
    return;
  }
};

const viewListClickHandler = (evt) => {
  let button;

  if (toggleActive(evt, viewButtons)) {
    button = toggleActive(evt, viewButtons);
    cardsList.className = "cards";
    cardsList.classList.add(`${button.dataset.view}`);
  } else {
    return;
  }
};

themeList.addEventListener("click", themeListClickHandler);
viewList.addEventListener("click", viewListClickHandler);
