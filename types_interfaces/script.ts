type Carro = {
  marca: string;
  modelo: string;
  autoamtico: boolean;
}

function preencheDados(dado: Carro){
  document.body.innerHTML +=`
    <div>
      <h2>${dado.marca}</h2>
      <p>${dado.modelo}</p>
      <p>Automatico: ${dado.autoamtico ? 'sim' : 'não' } </p>
    </div>
  `
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