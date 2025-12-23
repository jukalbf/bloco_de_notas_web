const fakeData = [
  { title: "Teste_01", content: "Teste de nota apenas para previa" },
  { title: "Teste_02", content: "Teste de nota apenas para previa" },
  { title: "Teste_03", content: "Teste de nota apenas para previa" },
  { title: "Teste_04", content: "Teste de nota apenas para previa" },
];

const listContainer = document.querySelector(".notes-list-container");

getAndPlaceData();

function getAndPlaceData() {
  fakeData.forEach((item) => {
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
