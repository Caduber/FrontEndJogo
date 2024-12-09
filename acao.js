barraHp = document.getElementById("hp-heroi-atual")
goblinHp = document.getElementById("hp-goblin-atual")
texto1 = document.getElementById("texto-luta-ant")

function darDano() {

    if (heroi.inimigo == "goblin"){

        goblin.hp = goblin.hp - (heroi.dmg * heroi.multiplicador)
    // Corrigindo para valores negativos
        if(goblin.hp <= 0){
            goblin.hp = 0
            //document.getElementById("win-content").style.display = "inline-flex" //goblin morre -> vitoria
            
            document.getElementById("sprite-goblin").style.src = "Assets/ladra.png"   //musgo surge
            heroi.inimigo = "musgo"
            document.getElementById("hp-goblin-atual").style.width = "100%"
        }
    //
        goblinHp.style.width = (goblin.hp / 60) * 100 + "%"

        texto1.innerHTML = "O goblin sofreu " + (heroi.dmg * heroi.multiplicador) + " de dano!"
        heroi.multiplicador = 1
        console.log(goblin.hp)
    }
    
// MUSGO COMO INIMIGO
    if (heroi.inimigo == "musgo"){
        musgo.hp = musgo.hp - (heroi.dmg * heroi.multiplicador)
    // Corrigindo para valores negativos
        if(musgo.hp <= 0){
            musgo.hp = 0
            document.getElementById("win-content").style.display = "inline-flex"
        }
    //
        musgoHp.style.width = (goblin.hp / 90) * 100 + "%"

        texto1.innerHTML = "O musgo sofreu " + (heroi.dmg * heroi.multiplicador) + " de dano!"
        heroi.multiplicador = 1
        console.log(musgo.hp)
    }



}

function prepararAtaque(){
    heroi.multiplicador = heroi.multiplicador * 1.5
    texto1.innerHTML =  "O heroi preparou o ataque..."

}

function assustarInimigo(){
    goblin.multiplicador = goblin.multiplicador * 0.6
    texto1.innerHTML =  "O inimigo está fragilizado"
}

function enfaixarFeridas(){
    heroi.hp = heroi.hp + 20
// Corrigindo para valores maiores q o hp max
    if(heroi.hp > 100){
        heroi.hp = 100
    }
//
    barraHp.style.width = heroi.hp + '%'
    texto1.innerHTML =  "O heroi está se sentindo melhor"
}

