var agora = new Date()
var DiaSem = agora.getDay()

var PC = new Date()
var hora = PC.getHours() 

switch (DiaSem) {
    case 0:
        console.log ('Hoje é um domingo')
        break
    case 1: 
        console.log ('Hoje é uma segunda-feira')
        break
    case 2: 
        console.log ('Hoje é uma terça-feira')
        break
    case 3: 
        console.log ('Hoje é uma quarta-feira')
        break
    case 4: 
        console.log ('Hoje é uma quinta-feira')
        break
    case 5:
        console.log ('Hoje é uma sexta-feira')
        break
    case 6:
        console.log ('Hoje é um sábado')    
}
console.log (`As ${hora} horas`)
if (hora < 5) {
    console.log('Boa Madrugada!');
} else if (hora <= 12)  {
    console.log('Bom dia!');
} else if (hora < 18) {
    console.log ('Boa tarde!')
} else if (hora > 18 && hora <= 23) {
    console.log('Boa noite!');
}