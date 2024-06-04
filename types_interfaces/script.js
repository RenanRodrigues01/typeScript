"use strict";
function preencheDados(dado) {
    document.body.innerHTML += `
    <div>
      <h2>${dado.marca}</h2>
      <p>${dado.modelo}</p>
      <p>Automatico: ${dado.autoamtico ? 'sim' : 'não'} </p>
    </div>
  `;
}
preencheDados({
    marca: "Chevrolet",
    modelo: "Celta",
    autoamtico: false
});
preencheDados({
    marca: "Volkswagen",
    modelo: "Gol",
    autoamtico: false
});
