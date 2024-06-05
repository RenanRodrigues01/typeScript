"use strict";
async function fetchCursos() {
    const responese = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await responese.json();
    console.log(data);
    showCursos(data);
}
;
;
fetchCursos();
function showCursos(data) {
    data.map((item) => {
        if (item.nivel === "iniciante") {
            document.body.innerHTML += `
      <div>
        <h2 style="color:blue">${item.nome}</h2>
      </div>
      `;
        }
        else {
            document.body.innerHTML += `
      <div>
        <h2 style="color:red">${item.nome}</h2>
      </div>
      `;
        }
    });
}
;
