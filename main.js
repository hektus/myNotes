const addBtn = document.querySelector(".add");
const saveBtn = document.querySelector(".save");
const popupAdd = document.querySelector(".popup-add");
const allNotes = document.querySelector(".notes");
const error = document.querySelector(".error");

const categorySelect = document.querySelector("#select");
const noteInput = document.querySelector(".note-input");

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
    <div class="title">
      <p class="note-title">${selectedOption.textContent}</p>
      <p class="delete-note">X</p>
    </div>
    <p class="note-content">${noteInput.value}</p>
  `;
}

//show popup add notes
addBtn.addEventListener("click", () => {
  popupAdd.style.display = "flex";
});

saveBtn.addEventListener("click", saveNote);
