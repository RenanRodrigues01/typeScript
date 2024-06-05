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
  gratuito: boolean;
  tags: Array<string>;
  idAulas: Array<number>;
  nivel: string
};

fetchCursos();
/* MINHA SOLUÇÃO
function showCursos(data: Array<interfaceCursos>){
 data.map((item) => 
  { if(item.nivel === "iniciante"){
      document.body.innerHTML += `
      <div>
        <h2 style="color:blue">${item.nome}</h2>
        <p>Horas: ${curso.horas}</p>
        <p>Aulas: ${curso.aulas}</p>
        <p>Tipo: ${curso.gratuito ? 'Gratuito' : 'Pago'}</p>
        <p>Tags: ${curso.tags.join(', ')}</p>
        <p>Aulas: ${curso.idAulas.join(' | ')}</p>
      </div>
      `
    }else{
      document.body.innerHTML += `
      <div>
        <h2 style="color:red">${item.nome}</h2>
        <p>Horas: ${curso.horas}</p>
        <p>Aulas: ${curso.aulas}</p>
        <p>Tipo: ${curso.gratuito ? 'Gratuito' : 'Pago'}</p>
        <p>Tags: ${curso.tags.join(', ')}</p>
        <p>Aulas: ${curso.idAulas.join(' | ')}</p>
      </div>
      `
    }
  }
);
};*/

// SOLUÇÃO DO CURSO

function showCursos(data: Array<interfaceCursos>) {
  data.forEach( (curso) => {
    let color;

    if(curso.nivel === 'iniciante'){
      color = "blue"
    } else{
      color = "red"
    }

    document.body.innerHTML += `
      <div>
        <h2 style="color: ${color};">${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
        <p>Aulas: ${curso.aulas}</p>
        <p>Tipo: ${curso.gratuito ? 'Gratuito' : 'Pago'}</p>
        <p>Tags: ${curso.tags.join(', ')}</p>
        <p>Aulas: ${curso.idAulas.join(' | ')}</p>
    </div>
    `
  });
}