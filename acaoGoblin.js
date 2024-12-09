barraHp = document.getElementById("hp-heroi-atual")
goblinHp = document.getElementById("hp-goblin-atual")
texto2 = document.getElementById("texto-luta")
spriteHeroi = document.getElementById("sprite-heroi")


document.getElementById("acoes").addEventListener("click", decisaoGoblin)


function decisaoGoblin(){
    let decisao = (Math.floor(Math.random() *10) %5)

    console.log("decisao: " + decisao)

    if(decisao <= 1 ){
        tomarDano()
    }
    else if(decisao == 2){
        levarPreparo()
    }
    else if(decisao == 3){
        serAssustado()
    }
    else if(decisao == 4){
        tomarCura()
    }

}


function tomarDano() {
    heroi.hp = heroi.hp - (goblin.dmg * goblin.multiplicador)
// Corrigindo para valores negativos
    if(heroi.hp <= 0){
        heroi.hp = 0
        spriteHeroi.style.animationName = "none"
        document.getElementById("lose-content").style.display = "inline-flex"
    }
//    
    barraHp.style.width = heroi.hp + '%'
    goblin.multiplicador = 1
    texto2.innerHTML =  "O goblin te causou " + (goblin.dmg * goblin.multiplicador) + " pontos de dano"
    console.log(heroi.hp)
}

function levarPreparo(){
    goblin.multiplicador = goblin.multiplicador * 2
    texto2.innerHTML =  "O goblin preparou o ataque..."

}

function serAssustado(){
    heroi.multiplicador = heroi.multiplicador * 0.5
    texto2.innerHTML =  "O goblin te fragilizou"
}

function tomarCura(){
    goblin.hp = goblin.hp + 20
// Corrigindo para valores maiores q o hp max
    if(goblin.hp > 60){
        goblin.hp = 60
    }
//
    goblinHp.style.width = (goblin.hp/60) *100 + '%'
    texto2.innerHTML =  "O goblin se alimentou do sangue derramado"
}

