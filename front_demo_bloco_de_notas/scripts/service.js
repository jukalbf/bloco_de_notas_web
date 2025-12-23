const PORT = 8000;
const url = `http://localhost:${PORT}`;

export async function getAllNotes() {
  try {
    const getNotesResponse = await fetch(`${url}/notes/`, {
      method: "GET",
    });

    const notesData = await getNotesResponse.json();

    console.log("=== DEBUG ===");
    console.log(`É array? ${Array.isArray(notesData)}`)
    console.log(`Quantidade de dados: ${notesData.length}`);
    return notesData;
  } catch (err) {
    console.log(`Erro ao tentar fazer fetch de dados: ${err.message}`);
    return [{ message: "Não foi possível encontrar os dados" }];
  }
}

export async function postNewNote(event) {
  event.preventDefault();

  const inputTitleValue = document.querySelector(".title-input").value;
  const inputContentValue = document.querySelector(".textarea-content").value;

  try {
    const createNoteResponse = await fetch(`${url}/notes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: inputTitleValue,
        content: inputContentValue,
      }),
    });

    if (!createNoteResponse.ok) {
      console.log("Algo deu errado.");
    }

    console.log("Nota enviada.");
  } catch (err) {
    console.log(`Erro ao enviar nota: ${err.message}`);
  }
}
