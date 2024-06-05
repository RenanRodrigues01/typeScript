"use strict";
;
;
;
async function fetchProducts() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    preencheDados(data);
}
fetchProducts();
function preencheDados(data) {
    document.body.innerHTML += `
    <div>
      <h2>${data.nome}</h2>
      <h4>${data.descricao}</h4>
      <ul>
        <li>Preço: $${data.preco}</li>
        <li>Tempo de garantia: ${data.garantia}</li>
        <li>Seguros contra acidentes: ${data.seguroAcidentes ? "SIM" : "NÃO"}</li>
      </ul>
      <h3>Fabricante: ${data.empresaFabricante.nome}</h3>
      <ul>
        <li>Pais de origem ${data.empresaFabricante.pais}</li>
        <li>Ano da fundação ${data.empresaFabricante.fundacao}</li>
      </ul>
      <h3>Montadora: ${data.empresaMontadora.nome}</h3>
      <ul>
        <li>Pais de origem ${data.empresaMontadora.pais}</li>
        <li>Ano da fundação ${data.empresaMontadora.fundacao}</li>
      </ul>
    </div>
  `;
}
/*preencheDados({
  marca: "Chevrolet",
  modelo: "Celta",
  autoamtico: false
});

preencheDados({
  marca: "Volkswagen",
  modelo: "Gol",
  autoamtico: false
});*/ 
