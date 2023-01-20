//Objetos

/*const denis = {
    nome: 'Dênis Santana',
    idade: 40
};

console.log(denis.nome);
console.log(denis.idade);
console.log(denis);*/


//Classes

/*lass Pessoa {

    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
    }
}

const denis = new Pessoa('Dênis', 40);
const renan = new Pessoa('Renan', 38);


denis.descrever(denis);
renan.descrever(renan);

console.log(denis);
console.log(renan);*/


//Função comparar pessoas

class Pessoa {

    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
    }
    
}



function compararPessoas(p1, p2) {

    if (p1.idade > p2.idade) {
        console.log('${p1.nome} é mais velho(a) que ${p2.nome)');
    } else if (p2.idade > p1.idade) {
        console.log('${p2.nome} é mais velho(a) que ${p1.nome)');
    } else {
        console.log('${p1.nome} e ${p1.nome) tem a mesma idade');
    }
}

const denis = new Pessoa('Dênis', 40);
const renan = new Pessoa('Renan', 38);


compararPessoas(denis, renan);