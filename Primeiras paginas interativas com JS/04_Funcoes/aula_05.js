//Função escrever o nome

function escrevaMeuNome(nome) {
    console.log('Meu nome é ' + nome);
}

escrevaMeuNome('Dênis')
escrevaMeuNome('Santana')


// Função identficar se é maior de idade

function EmaiordeIdade (idade){
    if (idade >= 18) {
        console.log('É maior de idade');
    } else {
        console.log('Não é maior de idade');
    }
    
}

EmaiordeIdade (17)

// Função juros separar em funções

function aplicarDesconto(valor,desconto){
    return (valor - (valor * (desconto / 100)));
}
function aplicarJuros(valor, juros){
    return (valor + (valor * (juros / 100)));
}

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log ( aplicarDesconto (precoEtiqueta, 10));
    } else if (formaDePagamento === 2) {
        console.log ( aplicarDesconto (precoEtiqueta, 15));
    } else if (formaDePagamento === 3) {
        console.log (precoEtiqueta );
    } else if (formaDePagamento === 4) {
        console.log ( aplicarJuros (precoEtiqueta, 10));
    }
    
