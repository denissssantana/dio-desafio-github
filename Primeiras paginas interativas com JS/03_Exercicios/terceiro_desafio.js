const nota1 = 6.5;
const nota2 = 6.5;
const nota3 = 6.5;

const media = (nota1 + nota2 + nota3) / 3;
console.log(media);

if (media < 5) {
    console.log('Reprovado')
} else if (media >= 5 && media <= 7) {
    console.log('Recuperação')
} else {
    console.log('Passou de semestre');
}




/*const resultado = 'Reprovado';

if (media < 5) {
    
    console.log('Reprovado');
} if (media >= 5 <= 7) {
    console.log('Recuperação');
} else (media > 7)
    console.log('Aprovado');*/
