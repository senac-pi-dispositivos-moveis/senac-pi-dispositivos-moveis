var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;
var intervalocriamosca = 2000;

var niveljogo = window.location.search
niveljogo = niveljogo.replace('?','')

console.log(niveljogo)

if(niveljogo === 'normal') {
	//1500
	intervalocriamosca = 1500
} else if(niveljogo === 'medio') {
	//1000
	intervalocriamosca = 1000
} else if (niveljogo === 'ChuckNorris') {
	//750
	intervalocriamosca = 750
}

function ajustatamanhopalcojogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura, largura)
}

ajustatamanhopalcojogo()
var cronometro = setInterval(function () {
    tempo -= 1
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criamosca)
        window.location.href = "vitoria.html"
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica() {
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        if (vidas > 3) {
            window.location.href = 'gameOver.html'
        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }
    }
    var posicaoX = parseInt(Math.random() * largura) - 90;
    var posicaoY = parseInt(Math.random() * altura) - 90;
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove();
    }
    document.body.appendChild(mosquito)
}
function tamanhoAleatorio() {
    var tamanho = Math.floor(Math.random() * 3)
    switch (tamanho) {
        case 0:
            return 'mosca1'
            break
        case 1:
            return 'mosca2'
            break
        case 2:
            return 'mosca3'
            break
    }

}
function ladoAleatorio() {
    var lado = Math.floor(Math.random() * 2)
    switch (lado) {
        case 0:
            return 'lado1'
            break
        case 1:
            return 'lado2'
            break
    }

}