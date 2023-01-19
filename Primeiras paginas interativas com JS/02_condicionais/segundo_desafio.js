const precoEtanol = 2.00;
const precoGasolina = 5.00;
const gastoCarro = 10;
const distancia = 100;
const combustivel = 'Gasolina';

const litrosConsumidos = distancia / gastoCarro;

if (combustivel === 'Etanol') {
    const resultado = litrosConsumidos * precoEtanol;
    console.log(resultado.toFixed(2));
} else {
    const resultado = litrosConsumidos * precoGasolina;
    console.log(resultado.toFixed(2));
}








