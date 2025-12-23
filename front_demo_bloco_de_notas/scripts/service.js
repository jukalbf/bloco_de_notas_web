const PORT = 8000;
const url = `http://localhost:${PORT}`;

export async function getAllNotes() {
  try {
    const getNotesResponse = await fetch(`${url}/notes/`, {
      method: "GET",
    });

    const notesData = await getNotesResponse.json();
    return notesData;
  } catch (err) {
    console.log(`Erro ao tentar fazer fetch de dados: ${err.message}`);
    return [{ message: "Não foi possível encontrar os dados" }];
  }
}
