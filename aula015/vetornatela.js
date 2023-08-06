

let valores = [8, 1, 7, 4, 2, 9]

console.log(valores)

/*
for (let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for(let pos in valores){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}

let posicao = valores.indexOf(8)
if(posicao == -1){
    console.log(`O valor não foi encontrado!`)
} else {
    console.log (`O valor selecionado estar na posição ${posicao}.`)
}



