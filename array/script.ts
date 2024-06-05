async function fetchCursos (){
  const responese = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await responese.json();
console.log(data)
  showCursos(data);
};

interface interfaceCursos {
  aulas: number;
  horas: number;
  nome: string;
  gartuito: boolean;
  tags: Array<string>;
  idAulas: Array<number>;
  nivel: string
};

fetchCursos();

function showCursos(data: Array<interfaceCursos>){
 data.map((item) => 
  { if(item.nivel === "iniciante"){
      document.body.innerHTML += `
      <div>
        <h2 style="color:blue">${item.nome}</h2>
      </div>
      `
    }else{
      document.body.innerHTML += `
      <div>
        <h2 style="color:red">${item.nome}</h2>
      </div>
      `
    }
  }
);
};