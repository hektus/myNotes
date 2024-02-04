const addBtn = document.querySelector(".add");
const popupAdd = document.querySelector(".popup-add");

//show popup add notes
addBtn.addEventListener("click", () => {
  popupAdd.style.display = "flex";
});
