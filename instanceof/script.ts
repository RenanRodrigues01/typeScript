class Produto {
  nome: string;
  preco: number;
  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco
  }

  precoReal(){
    return `R$${this.preco}`
  };

}

const link = document.getElementById("#origamid");

if ( link instanceof HTMLAnchorElement) {
  link.href = link.href.replace("http://", "https://")
}