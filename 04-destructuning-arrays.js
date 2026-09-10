//=======================================
//4. DESTRUIÇÃO (DESTRUCTURING) DE ARRAYS
//=======================================

//4.1 Desestruturção básica de array(baseada na POSIÇÃO dos elementos)
const cores = ["Azul" , "Verde" , "Vermelho"];

const [primeiraCor, segundaCor, terceiraCor] = cores;

console.log("Primeira cor:", primeiraCor);
console.log("Segunda cor:", segundaCor);
console.log("Terceira cor", terceiraCor);

//4.2 Comprando Objetos vs Arrays
// - Objeto: o nome da propriedade importa {nome, idade}
// - Array: a oredem/posição importa [ nome, idade]

//Exemplo com Objeto
const pessoaObjeto = {
    nome: "Carlos",
    idade: 20
};
const {nome, idade} = pessoaObjeto;
console.log(`Objeto -> Nome: ${nome}, idade: ${idade}`);

//Exemplo com Array:
const pessoaArray = ["Carlos", 20];
const [nomeAluno, idadeAluno] = pessoaArray;
console.log(`Array -> Nome: ${nomeAluno}, idade: ${idadeAluno}`);