const themeList = document.querySelector(".theme-list");
const buttons = themeList.querySelectorAll(".theme-button");
const root = document.documentElement;

const themeListClickHandler = (evt) => {
  const button = evt.target.closest("button");

  if (!button) {
    return;
  }

  buttons.forEach((btn) => {
    btn.classList.toggle("active", btn === button);
  });

  root.dataset.themeName = button.dataset.themeSet;
};

themeList.addEventListener("click", themeListClickHandler);
