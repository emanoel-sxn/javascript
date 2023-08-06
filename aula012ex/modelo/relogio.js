function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 ||fano.value > ano){
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName ('radsex') 
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.style.display = "block";
                img.setAttribute('src', 'foto-bebe-m.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-m')
            }else if (idade < 60){
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }   
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 11){
                img.setAttribute('src', 'foto-bebe-f')
                //Criança
            }else if (idade < 21){
                img.setAttribute('src', 'foto-jovem-f.png')
                //Jovem
            }else if (idade < 60){
                img.setAttribute('src', 'foto-adulto-m.png')
                //Adulto
            }else {
                img.setAttribute('src', 'foto-idoso-m.png')
                //Idoso
            }   
        } 
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} de ${idade} anos`
    res.appendChild(img)
}