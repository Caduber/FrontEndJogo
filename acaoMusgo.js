barraHp = document.getElementById("hp-heroi-atual")
goblinHp = document.getElementById("hp-goblin-atual")
texto2 = document.getElementById("texto-luta")
spriteHeroi = document.getElementById("sprite-heroi")


document.getElementById("acoes").addEventListener("click", decisaoMusgo)


function decisaoMusgo(){
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
    heroi.hp = heroi.hp - (musgo.dmg * musgo.multiplicador)
// Corrigindo para valores negativos
    if(heroi.hp <= 0){
        heroi.hp = 0
        spriteHeroi.style.animationName = "none"
        document.getElementById("lose-content").style.display = "inline-flex"
    }
//    
    barraHp.style.width = heroi.hp + '%'
    musgo.multiplicador = 1
    texto2.innerHTML =  "O musgo cuspiu e causou " + (musgo.dmg * musgo.multiplicador) + " pontos de dano"
    console.log(heroi.hp)
}

function levarPreparo(){
    musgo.multiplicador = musgo.multiplicador * 1.7
    texto2.innerHTML =  "O musgo preparou o ataque..."

}

function serAssustado(){
    heroi.multiplicador = heroi.multiplicador * 0.2
    texto2.innerHTML =  "O musgo corroeu sua lâmina..."
}

function tomarCura(){
    musgo.hp = musgo.hp + 25
// Corrigindo para valores maiores q o hp max
    if(musgo.hp > 90){
        musgo.hp = 90
    }
//
    musgoHp.style.width = (musgo.hp/90) *100 + '%'
    texto2.innerHTML =  "O musgo comeu uma pedra do chão"
}

