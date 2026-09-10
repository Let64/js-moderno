//=============================================
// 5. MÉTODOS DE ARRAY (filter e find) - SEM map
//==============================================

//-------FILTER (seleciona TODOS que atendem à condição) ---

//5.1 filter() com números
const notas = [5, 8, 4, 10, 7];
const aprovadas = notas.filter((nota) => 7);

console.log("Notas aprovadas (>=7):, aprovadas"); //[8, 10, 7]

//5.2 filter() com array de objetos
const jogos = [
    {nome: "Jogo A", preco: 50},
    {nome: "Jogo B", preco: 150},
    {nome: "Jogo C", preco: 80}
];

const jogosBaratos = jogos.filter((jogo) => jogo.preco < 100);
console.log("Jogos com preço menor que 100:", jogosBaratos);

// ----FIND(encontra e retorna apenas o PRIMEIRO que atende) ----

//5.3 find() com números
const numeros = [10, 25, 40, 60];
const primeiroMaiorQue30 = numeros.find((numero) => numero > 30);

console.log("Primeiro número > 30:", primeiroMaiorQue30); //40

//5.4 find() com array de objetos
const alunos = [
    {nome: "Ana", matricula: 101},
    {nome: "Bruno", matricula: 102},
    {nome: "Camila", matricula: 103}
]

const alunoEncontrado = alunos.find((aluno) => aluno.matricula === 102);
console.log("Aluno com matrícula 102:", alunoEncontrado);
//fim