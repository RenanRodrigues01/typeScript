/*
Por padrão o Typescript usa a inferencia para identifcar tipos, desse modo podemos diminuir a quantidade de código que escrevemos, quando uma varialvél recebe um valor de qualquer tipo o TS assume que esse sera o tipo definido da variavél 

let produto: string = "livro";
let preco: number = 200;

const carro: {
  marca: string;
  portas: number
} = {
  marca: "Audi",
  portas: 4
};*/

let produto = "livro";
let preco = 200;

const carro = {
  marca: "Audi",
  portas: 4
};

const barato = 200 < 400 ? true : "produto caro"

function somar(a: number, b: number) {
  return a + b
};

somar(4, 10);
//somar("4", "10")

// exencicio 1 enterder os erros apontados pelo TS 
function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();
}

console.log(normalizarTexto("DesiGn"));


const input = document.querySelector("input");

const total = localStorage.getItem("total");

if( input ) {

    if( total){
      input.value= total;
      calcularGanho(Number(input.value));
    };
   function calcularGanho(value: number ) {

  const p = document.querySelector("p");
    if(p){
      p.innerText = `Ganho total: ${value + 100 - value * 0.2}`
    }
  };

  function totalMudou( ) {
    if( input ){
      const value = input.value;
      localStorage.setItem("total",value );
      calcularGanho(Number(value));
    };
    
  }

  input.addEventListener("keyup", totalMudou);
}






