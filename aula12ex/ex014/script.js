function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} hora.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#c9c91a'
    } else if (hora >= 12 && hora <18) {
        //BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#ccad7f'
    } else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#121a1c'
    }
}
