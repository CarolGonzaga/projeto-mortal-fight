// ************** BOTÕES DE AÇÃO ***************
var botoesP1 = document.querySelector(".botoes-p1");
var botoesP2 = document.querySelector(".botoes-p2");
var setaP1 = document.querySelector(".vez-p1");
var setaP2 = document.querySelector(".vez-p2");
var tela = document.querySelector("#console");

var botaoAtkP1 = document.querySelector("#botao-atacar-p1");
var botaoPocP1 = document.querySelector("#botao-pocao-p1");
var botaoVenP1 = document.querySelector("#botao-veneno-p1");

var botaoAtkP2 = document.querySelector("#botao-atacar-p2");
var botaoPocP2 = document.querySelector("#botao-pocao-p2");
var botaoVenP2 = document.querySelector("#botao-veneno-p2");

// ******************** FIM ********************


// ************* OUTROS ELEMENTOS **************

var reinicio = document.querySelector(".meio");
var reiniciarSim = document.querySelector("#reiniciar-sim");
var reiniciarNao = document.querySelector("#reiniciar-nao");

var numeroRound = document.querySelector("#round-numero");

var vitoriasP1 = document.querySelector("#numero-vitoria-p1");
var derrotasP1 = document.querySelector("#numero-derrota-p1");

var vitoriasP2 = document.querySelector("#numero-vitoria-p2");
var derrotasP2 = document.querySelector("#numero-derrota-p2");

// ******************** FIM ********************


// ************* IMAGENS LUTADORES *************

function imagemVida(nome) {
    if(nome == player1.nome) {
        var contadorVida = document.querySelector("#contador-vidas-p1");
    } else if (nome == player2.nome) {
        var contadorVida = document.querySelector("#contador-vidas-p2");
    }
    return contadorVida;
}

function imagemLutadorVivo(nome) {
    if (nome == player1.nome) {
        var imgP1 = document.querySelector("#img-p1");
        var img = (imgP1.src = "./assets/images/player1-vivo.png");
    } else if (nome == player2.nome) {
        var imgP2 = document.querySelector("#img-p2");
        var img = (imgP2.src = "./assets/images/player2-vivo.png");
    }
    return img;
}

function imagemLutadorMorto(nome) {
    if (nome == player1.nome) {
        var imgP1 = document.querySelector("#img-p1");
        var img = (imgP1.src = "./assets/images/player1-morto.png");
    } else if (nome == player2.nome) {
        var imgP2 = document.querySelector("#img-p2");
        var img = (imgP2.src = "./assets/images/player2-morto.png");
    }
    return img;
}

function imagemLutadorEnvenenado(nome) {
    if (nome == player1.nome) {
        var imgP1Poison = document.querySelector("#img-p1");
        var img2 = (imgP1Poison.src = "./assets/images/player1-envenenado.png");
    } else if (nome == player2.nome) {
        var imgP2Poison = document.querySelector("#img-p2");
        var img2 = (imgP2Poison.src = "./assets/images/player2-envenenado.png");
    }
    return img2;
}

function imagemPocao(nome) {
    if(nome == player1.nome) {
        var marcadorPot = document.querySelector("#marcador-pocao-p1");
    } else if (nome == player2.nome) {
        var marcadorPot = document.querySelector("#marcador-pocao-p2");
    }
    return marcadorPot;
}

function imagemVeneno(nome) {
    if(nome == player1.nome) {
        var marcadorVen = document.querySelector("#marcador-veneno-p1");
    } else if (nome == player2.nome) {
        var marcadorVen = document.querySelector("#marcador-veneno-p2");
    }
    return marcadorVen;
}

// ******************** FIM ********************


// *************** CLASSE LUTADOR **************
class Lutador {
    nome
    vida
    pocao_vida
    pocao_veneno
    envenenado
    vitorias
    derrotas
    
    constructor(nome) {
        this.nome = nome;
        this.vida = 5;
        this.pocao_vida = 3;
        this.pocao_veneno = 3;
        this.envenenado = false;
        this.vitorias = 0;
        this.derrotas = 0;
    }

    morto() {
        tela.value = this.nome + " foi derrotado!";
        imagemLutadorMorto(this.nome);
    }
    
    medidorVida() {
        if(this.vida == 5) {
            imagemVida(this.nome).src = "./assets/images/vida5.png";
        } else if(this.vida == 4) {
            imagemVida(this.nome).src = "./assets/images/vida4.png";
        } else if(this.vida == 3) {
            imagemVida(this.nome).src = "./assets/images/vida3.png";
        } else if(this.vida == 2) {
            imagemVida(this.nome).src = "./assets/images/vida2.png";
        } else if(this.vida == 1) {
            imagemVida(this.nome).src = "./assets/images/vida1.png";
        } else if(this.vida == 0) {
            imagemVida(this.nome).src = "./assets/images/vida0.png";
            this.morto();
        }
    }

    medidorPocaoVida() {
        for (var marcador2 = 0; marcador2 <= this.pocao_vida; marcador2++) {
            if(this.pocao_vida == 3) {
                imagemPocao(this.nome).src = "./assets/images/marcador-pocao3.png";
            } else if(this.pocao_vida == 2) {
                imagemPocao(this.nome).src = "./assets/images/marcador-pocao2.png";
            } else if(this.pocao_vida == 1) {
                imagemPocao(this.nome).src = "./assets/images/marcador-pocao1.png";
            } else if(this.pocao_vida == 0) {
                imagemPocao(this.nome).src = "./assets/images/marcador-vazio.png";
            }
        }
    }

    medidorPocaoVeneno() {
        for (var marcador1 = 0; marcador1 <= this.pocao_veneno; marcador1++) {
            if(this.pocao_veneno == 3) {
                imagemVeneno(this.nome).src = "./assets/images/marcador-veneno3.png";
            } else if(this.pocao_veneno == 2) {
                imagemVeneno(this.nome).src = "./assets/images/marcador-veneno2.png";
            } else if(this.pocao_veneno == 1) {
                imagemVeneno(this.nome).src = "./assets/images/marcador-veneno1.png";
            } else if(this.pocao_veneno == 0) {
                imagemVeneno(this.nome).src = "./assets/images/marcador-vazio.png";
            }
        }
    }

    envenenar() {
        if (this.envenenado) {
            imagemLutadorEnvenenado(this.nome);
        } else if (this.vida > 0) {
            imagemLutadorVivo(this.nome);
        }
    }
};
// ******************** FIM ********************


// ***************** LUTADORES *****************
const player1 = new Lutador("Player 1");
const player2 = new Lutador("Player 2");
// ******************** FIM ********************


// ************** FUNÇÕES INÍCIO ***************
function sorteiaInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function quemComeca() {
    var id = sorteiaInt(1, 2);
    if (id == 1) {
        vezP1();
        tela.value = player1.nome + " começa!";
    } else {
        vezP2();
        tela.value = player2.nome + " começa!";
    }
}

function vezP1() {
    setaP2.style.visibility = "hidden"
    botoesP2.style.visibility = "hidden";
    setaP1.style.visibility = "visible"
    botoesP1.style.visibility = "visible";
}

function vezP2() {
    setaP1.style.visibility = "hidden"
    botoesP1.style.visibility = "hidden";
    setaP2.style.visibility = "visible"
    botoesP2.style.visibility = "visible";
}
// ******************** FIM ********************


// ************** FUNÇÕES BATALHA **************
function atacar(atacante) {
    if (atacante == player1) {
        if (player2.envenenado) {
            if (player2.vida >= 3) {
                player2.vida -= 3;
                player2.medidorVida();
            } else {
                player2.vida -= 1;
                player2.medidorVida();
            }
            player2.envenenado = false;
            player2.envenenar();
        } else {
            player2.vida -= 1;
            player2.medidorVida();
        }
    } else {
        if (player1.envenenado) {
            if (player1.vida >= 3) {
                player1.vida -= 3;
                player1.medidorVida();
            } else {
                player1.vida -= 1;
                player1.medidorVida();
            }
            player1.envenenado = false;
            player1.envenenar();
        } else {
            player1.vida -= 1;
            player1.medidorVida();
        }
    }
}

function beberPocao(player) {
    if (player.vida == 5) {
        tela.value = player.nome + " já está com a VIDA cheia!";

    } else if (player.pocao_vida > 0) {
        player.vida += 1;
        player.pocao_vida -= 1;
        player.medidorPocaoVida();
        player.medidorVida();
        tela.value = player.nome + " usou POÇÃO e recuperou 1x ponto de VIDA!";

    } else {
        tela.value = player.nome + " não tem mais poção de VIDA!";
    }
}

function jogarVeneno(atacante) {
    if (atacante == player1) {
        if (atacante.pocao_veneno > 0) {
            atacante.pocao_veneno -= 1;
            atacante.medidorPocaoVeneno();
            player2.envenenado = true;
            tela.value = player1.nome + " envenenou " + player2.nome;
            vezP2();   
        } else {
            tela.value = atacante.nome + " não tem poção de VENENO!";
            vezP1();
        }
    } else {
        if (atacante.pocao_veneno > 0) {
            atacante.pocao_veneno -= 1;
            atacante.medidorPocaoVeneno();
            player1.envenenado = true;
            tela.value = player2.nome + " envenenou " + player1.nome;
            vezP1();   
        } else {
            tela.value = atacante.nome + " não tem poção de VENENO!";
            vezP2();
        }
    }
}

function contadorVitDer() {
    if (player1.vida == 0) {

        if (player1.pocao_vida == 0) {
            player1.pocao_vida += 1;
        }

        if (player1.pocao_veneno == 0) {
            player1.pocao_veneno += 1;
        }
        
        player2.vitorias += 1;
    
    } else if (player2.vida == 0) {
        
        if (player2.pocao_vida == 0) {
            player2.pocao_vida += 1;
        }

        if (player2.pocao_veneno == 0) {
            player2.pocao_veneno += 1;
        }

        player1.vitorias += 1
    }
    vitoriasP1.innerHTML = player1.vitorias;
    vitoriasP2.innerHTML = player2.vitorias;
}

function quemJoga(jogador) {
    if (jogador == player1) {
        tela.value = player1.nome + " atacou " + player2.nome + "!";
        atacar(player1, player2);
        if (player2.vida > 0) {
            vezP2(); 
        } else {
            contadorVitDer();
            finalPartida();
        }
    } else if (jogador == player2) {
        tela.value = player2.nome + " atacou " + player1.nome + "!";
        atacar(player2, player1);
        if (player1.vida > 0) {
            vezP1(); 
        } else {
            contadorVitDer();
            finalPartida();
        }
    }
}

function finalPartida() {
    setaP1.style.visibility = "hidden"
    botoesP1.style.visibility = "hidden";
    setaP2.style.visibility = "hidden"
    botoesP2.style.visibility = "hidden";
    reinicio.style.visibility = "visible";
}

// ******************** FIM ********************

document.addEventListener('DOMContentLoaded', function () {
    quemComeca();
    reinicio.style.visibility = "hidden";
});

botaoAtkP1.onclick = function() {
    quemJoga(player1);
};

botaoPocP1.onclick = function() {
    beberPocao(player1);
};

botaoVenP1.onclick = function() {
    if (player2.envenenado) {
        tela.value = player2.nome + " já está envenenado!";
    } else {
        jogarVeneno(player1);
        player2.envenenar();
    }
};

botaoAtkP2.onclick = function() {
    quemJoga(player2);
};

botaoPocP2.onclick = function() {
    beberPocao(player2);
};

botaoVenP2.onclick = function() {
    if (player1.envenenado) {
        tela.value = player1.nome + " já está envenenado!";
    } else {
        jogarVeneno(player2);
        player1.envenenar();
    }
};

reiniciarSim.onclick = function() {
    quemComeca();

    player1.vida = 5;
    player1.medidorVida();
    player1.medidorPocaoVida();
    player1.medidorPocaoVeneno();
    player1.envenenado = false;
    imagemLutadorVivo(player1.nome);

    player2.vida = 5;
    player2.medidorVida();
    player2.medidorPocaoVida();
    player2.medidorPocaoVeneno();
    player2.envenenado = false;
    imagemLutadorVivo(player2.nome);

    reinicio.style.visibility = "hidden";
    numeroRound.innerHTML = parseInt(numeroRound.innerHTML) + 1;
}

reiniciarNao.onclick = function() {
    tela.value = "Fim de Jogo!";
    reinicio.style.visibility = "hidden";
}