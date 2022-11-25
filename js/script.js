const themeList = document.querySelector(".theme-list");
const buttons = themeList.querySelectorAll(".theme-button");

const themeListClickHandler = (evt) => {
  const button = evt.target.closest("button");

  if (!button) {
    return;
  }

  buttons.forEach((btn) => {
    console.log(btn);
    btn.classList.toggle("active", btn === button);
  });
};

themeList.addEventListener("click", themeListClickHandler);
