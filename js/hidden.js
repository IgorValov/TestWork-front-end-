const settingDescription = document.querySelector(".setting__description");
const headerForm = document.querySelector(".header__form");
const category = document.querySelector(".setting__return");
console.log(headerForm.value);

headerForm.addEventListener("change", function hide() {
  settingDescription.classList.remove("hidden");
});
