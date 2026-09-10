//====================================
// 3. DESTRUCTUNING DE OBJETOS
//====================================

const professor = {
    nome: "Marcos",
    disciplina: "Programação",
    escola: "SENAI"
};

//3.1 Sem desestreturação (acesso direto tradicional)
console.log(professor.nome);
console.log(professor.disciplina);

//3.2 Com desestruturação (extrai as propriedades em novas variáveis)
const {nome, disciplina} = professor;
console.log("Com destructuring:", nome, "-", disciplina);

//3.3 Desestruturação parcial (não precisa pegar todas as propriedades)
const computador = {
    marca: "Lenovo",
    memoria: "16 GB",
    armazenamento: "512 GB",
    processador: "Ryzen 7",
};

const{marca, processador} = computador;
console.log(`Computador: Marca ${marca}, Processador ${processador}`);

//3.4 Desestruturação + Template Literal
const livro = {
    título: "JavaScript Básico",
    autor: "Lucas Silva",
    pagina: 320
};
const {titulo, autor, paginas} = livro;
console.log(`${titulo}, escrito por ${autor}, possui ${paginas} páginas`);


//3.5 
const funcionario = {
    nome: "Fernanda",
    cargo:"Programador",
    salario:4500
};

// A função já recebeu o objeto e extrai as propriedades diretamente nos parênteses:
const exibirFuncionario = ({nome, cargo, salario}) => {
    return `${nome} trabalha como ${cargo} e recebe R$ ${salario}.`;
};

console.log(exibirFuncionario(funcionario));

//Fim

