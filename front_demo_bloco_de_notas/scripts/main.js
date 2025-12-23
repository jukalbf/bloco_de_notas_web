import { getAllNotes, postNewNote } from "./service.js";

const notesData = await getAllNotes();

const listContainer = document.querySelector(".notes-list-container");
const form = document.querySelector(".form");

form.addEventListener("submit", postNewNote);

getAndPlaceData();

function getAndPlaceData() {
  if (!Array.isArray(notesData)) {
    const notesNotFoundElement = document.createElement("h2");
    notesNotFoundElement.className = "not-found-msg";
    notesNotFoundElement.innerText = "Não foi possível encontrar notas";
    listContainer.appendChild(notesNotFoundElement);
    return;
  }

  notesData.forEach((item) => {
    const { liElement, h2Element, paragraphElement, buttonRedirectElement } =
      createListElements();

    listContainer.appendChild(liElement);

    liElement.appendChild(h2Element);
    liElement.appendChild(paragraphElement);
    liElement.appendChild(buttonRedirectElement);

    h2Element.innerText = item.title;
    paragraphElement.innerText = item.content;
    buttonRedirectElement.innerText = "Ver nota";
  });
}

function createListElements() {
  const liElement = document.createElement("li");
  const h2Element = document.createElement("h2");
  const paragraphElement = document.createElement("p");
  const buttonRedirectElement = document.createElement("a");

  liElement.className = "note-item";
  h2Element.className = "note-title";
  paragraphElement.className = "note-content-prev";
  buttonRedirectElement.className = "button-goto-note";

  return {
    liElement,
    h2Element,
    paragraphElement,
    buttonRedirectElement,
  };
}
