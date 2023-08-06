var agora = new Date()
var DiaSem = agora.getDay()

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