var PC = new Date()
var hora = PC.getHours() 
console.log (`agora são ${hora} horas.`)
if (hora < 5) {
    console.log('Boa Madrugada!');
} else if (hora <= 12)  {
    console.log('Bom dia!');
} else if (hora < 18) {
    console.log ('Boa tarde!')
} else if (hora > 18 && hora <= 23) {
    console.log('Boa noite!');
}