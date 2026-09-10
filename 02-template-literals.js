//======================================
// 2. TEMPLATE LITERALS
//======================================

const nome = "Beatriz";
const curso = "Informática";

//2.1 Conectandotradicional (antiga com operador +)
console.log("A aluna" + nome + "estuda" + curso + " . ");

// 2.2 Com Template Literal (usando crases `` e ${})
console.log(`A aluna ${nome} estuda ${curso}.`);

//2.3 Template Literal com cálculos e expresões no ${}
const preco = 50;
const quantidade = 3;

console.log(`Total de compra: R$ ${preco* quantidade}`);

//2.4 Template Literal acessando propriedades de objetos
const celular = {
    marca: "Samsung",
    modelo: "Galaxy A55"
};

console.log(`Celular: ${celular.marca} ${celular.modelo}`);