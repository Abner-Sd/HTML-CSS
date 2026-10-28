function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!");
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            genero = 'homem';
            if (idade >= 0 && idade <= 13) {
                //Criança
                img.setAttribute('src', 'img/kidboy_O.png');
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/youngboy_O.png');
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/man_O.png');
            } else {
                //Idoso
                img.setAttribute('src', 'img/grandpa_O.png');
            }
        } else if (fsex[1].checked) {
            genero = 'mulher';
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'img/kidgirl_O.png');
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/younggirl_O.png');
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/woman_O.png');
            } else {
                //Idoso
                img.setAttribute('src', 'img/granny_O.png');
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img);
    }
}