const addBtn = document.querySelector(".add");
const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");
const popupAdd = document.querySelector(".popup-add");
const allNotes = document.querySelector(".notes");
const error = document.querySelector(".error");

const categorySelect = document.querySelector("#select");
const noteInput = document.querySelector(".note-input");

function titleColor() {
  if (categorySelect.selectedIndex === 1) {
    return "title title-red";
  } else if (categorySelect.selectedIndex === 2) {
    return "title";
  } else {
    return "title title-blue";
  }
}

function contentColor() {
  if (categorySelect.selectedIndex === 1) {
    return "note-content note-red";
  } else if (categorySelect.selectedIndex === 2) {
    return "note-content";
  } else {
    return "note-content note-blue";
  }
}

function saveNote() {
  const selectedOption = categorySelect.options[categorySelect.selectedIndex];
  if (!categorySelect.selectedIndex || !noteInput.value) {
    error.style.display = "block";
    return;
  }
  error.style.display = "none";
  const newNote = document.createElement("div");
  newNote.classList.add("note");
  allNotes.appendChild(newNote);

  newNote.innerHTML = `
    <div class="${titleColor()}">
      <p class="note-title">${selectedOption.textContent}</p>
      <p class="delete-note">X</p>
    </div>
    <p class="${contentColor()}">${noteInput.value}</p>
  `;
}

//show popup add notes
addBtn.addEventListener("click", () => {
  popupAdd.style.display = "flex";
});

saveBtn.addEventListener("click", saveNote);
cancelBtn.addEventListener("click", () => {
  popupAdd.style.display = "none";
});
