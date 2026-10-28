function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    //var hora = data.getHours();

    var hora = 18;

    msg.innerHTML = `Agora são ${hora} horas`;
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'img/manha-redondo.png';
        document.body.style.background='#85ac00'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'img/tarde-redondo.png';
        document.body.style.background='#ddc2b2'
    } else {
        //Boa noite
        img.src = 'img/noite-redondo.png';
        document.body.style.background='#333e5a'
    }

}