//==========================================
//1. ARROW FUNCTIONS
//==========================================

//1.1 Arrow Function básica com bloco e return
const saudacao = (nome) => {
    return 'Olá, ${nome}!'
}

console.log(saudacao("João")); // Olá João

//1.2 Versão com retorno implícito (uma única linha)
const saudacaoCurta = (nome) => `Olá, ${nome}!`;

console.log(saudacaoCurta("Maria")); //Olá, Maria!

//1.3 Arrow Function com cálculo
const multplicar = (a, b) => a*b;

console.log("Resultado da multiplicação:" , multiplicar(4, 5)); //20

//1.4 Arrow Function com estrutura condicional (if/ else)
    const verificarNota = (nota) => {
        if (nota >= 7) {
            return "Aprovado";
        } 
        return "Recuperação"
    };

console.log("Status do aluno (nota 8:)" , verificarNota(8)); //Aprovado
console.log("Status do aluno (nota 5:)" , verificarNota(5)); //Recuperaão
