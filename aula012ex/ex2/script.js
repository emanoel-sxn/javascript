function carregar(){
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    var minuto = data.getMinutes() 
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`

    if (hora >= 0 && hora < 12) {
        //Bom dia 
        img.src = 'manha.png'
        document.body.style.background = '#ffe4c4'
    } else if (hora >= 12 && hora < 18){

        //Boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#deb887'

    } else if (hora >= 18 && hora < 0) {
        //Boa noite
        img.src = 'noite.png'
        document.body.style.background = '#deb887'
        
    }
}