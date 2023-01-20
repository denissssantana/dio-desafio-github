/*class Carro {
    marca;
    cor;
    gastoMedioKm;

    constructor(marca,cor,gastoMedioKm ) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm
    }

    calcularGastoPercurso(distancia, precoCombustivel){
        return distancia * this.gastoMedioKm * precoCombustivel
    }

}

const uno = new Carro('Fiat', 'prata', 1/12);
console.log(uno.calcularGastoPercurso(70, 5));
const palio = new Carro('Fiat', 'preto', 1/10);
console.log(palio.calcularGastoPercurso(70, 5));*/


class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarIMC() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return ('abaixo do peso')   
        } else if (imc >= 18.5 && imc <= 25) {
            return ('Peso normal')
        } else if (imc >= 25 && imc <= 30) {
            return ('Acima do peso')
        } else if (imc >= 30 && imc <= 40) {
            return ('Obeso')
        } else {
            return('Obesidade grave');  
    }

    }
}
const jose = new Pessoa('José', 100, 1.75 );
console.log(jose);
console.log(jose.calcularImc());
console.log(jose.classificarIMC());